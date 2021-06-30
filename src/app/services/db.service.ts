import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Ship } from './ship';
import { Turn } from './turn';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})

export class DbService {
  private storage: SQLiteObject;
  shipList = new BehaviorSubject([]);
  turnList = new BehaviorSubject([]);
  shipListOwner = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform, 
    private sqlite: SQLite, 
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'space_db.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
      });
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }
 
  fetchShips(): Observable<Ship[]> {
    return this.shipList.asObservable();
  }

  fetchShipsOwner(): Observable<Ship[]> {
    return this.shipListOwner.asObservable();
  }

  fetchTurn(): Observable<Turn[]> {
    return this.turnList.asObservable();
  }

    // Render fake data
    getFakeData() {
      this.httpClient.get(
        'assets/seed.sql', 
        {responseType: 'text'}
      ).subscribe(data => {
        this.sqlPorter.importSqlToDb(this.storage, data)
          .then(_ => {

            this.getShips();
            this.getTurn();
            this.getShipsOwner();
            this.isDbReady.next(true);
          })
          .catch(error => console.error(error));
      });
    }

  // Get list
  getShips(){
    return this.storage.executeSql('SELECT * FROM ships where Buy = 0', []).then(res => {
      let items: Ship[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            id: res.rows.item(i).Id,
            Type: res.rows.item(i).Type,
            Class: res.rows.item(i).Class,
            CP:res.rows.item(i).CP,
            Attack_Strength: res.rows.item(i).Attack_Strength,
            Defense_Strength: res.rows.item(i).Defense_Strength,
            Hull_Size: res.rows.item(i).Hull_Size,
            Description: res.rows.item(i).Description,
            Buy: res.rows.item(i).Buy,
           });
        }
      }
      this.shipList.next(items);
    });
    
  }

  getShipsOwner(){
    return this.storage.executeSql('SELECT * FROM ships where Buy = 1', []).then(res => {
      let items: Ship[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            id: res.rows.item(i).Id,
            Type: res.rows.item(i).Type,
            Class: res.rows.item(i).Class,
            CP:res.rows.item(i).CP,
            Attack_Strength: res.rows.item(i).Attack_Strength,
            Defense_Strength: res.rows.item(i).Defense_Strength,
            Hull_Size: res.rows.item(i).Hull_Size,
            Description: res.rows.item(i).Description,
            Buy: res.rows.item(i).Buy,
           });
        }
      }
      this.shipListOwner.next(items);
    });
    
  }

  updateTurn(id, turnObject: Turn) {
    let data = [turnObject.CPS];
    return this.storage.executeSql(`UPDATE turn SET CPS = ? WHERE id = ${id}`, data)
    .then(data => {
      this.getTurn();
    })
  }

  getTurn(){
    return this.storage.executeSql('SELECT * FROM turn', []).then(res => {
      let items: Turn[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            Id: res.rows.item(i).Id,
            CPS: res.rows.item(i).CPS,
           });
        }
      }
      this.turnList.next(items);
    });

  // Add
  /* addSong(artist_name, song_name) {
    let data = [artist_name, song_name];
    return this.storage.executeSql('INSERT INTO songtable (artist_name, song_name) VALUES (?, ?)', data)
    .then(res => {
      this.getSongs();
    });
  } */
 
 /*  // Get single object
  getSong(id): Promise<Ship> {
    return this.storage.executeSql('SELECT * FROM songtable WHERE id = ?', [id]).then(res => { 
      return {
        id: res.rows.item(0).id,
        artist_name: res.rows.item(0).artist_name,  
        song_name: res.rows.item(0).song_name
      }
    });
  }

  // Update
  updateSong(id, song: Ship) {
    let data = [song.artist_name, song.song_name];
    return this.storage.executeSql(`UPDATE songtable SET artist_name = ?, song_name = ? WHERE id = ${id}`, data)
    .then(data => {
      this.getSongs();
    })
  }

  // Delete
  deleteSong(id) {
    return this.storage.executeSql('DELETE FROM songtable WHERE id = ?', [id])
    .then(_ => {
      this.getSongs();
    });
  } */
}
}

