import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Ship } from './ship';
import { Turn } from './turn';
import { Tech } from './tech';

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
  techList = new BehaviorSubject([]);
  techOwnerList = new BehaviorSubject([]);

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
  fetchTech(): Observable<Tech[]> {
    return this.techList.asObservable();
  }
  fetchTechOwner(): Observable<Tech[]> {
    return this.techOwnerList.asObservable();
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
            this.getTechOwner();
            this.getTech();
            this.isDbReady.next(true);
          })
          .catch(error => console.error(error));
      });
    }

 
  getTechOwner(){
    return this.storage.executeSql('SELECT * FROM techs where Buy = 1', []).then(res => {
      let items: Tech[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            Id: res.rows.item(i).Id,
          	Name:res.rows.item(i).Name,
          	Value:res.rows.item(i).Value,
          	Cost:res.rows.item(i).Cost,
          	Description:res.rows.item(i).Description,
            Buy:res.rows.item(i).Buy,
           });
        }
      }
      this.techOwnerList.next(items);
    });
    
  }
  getTech(){
    return this.storage.executeSql('SELECT * FROM techs where Buy = 0', []).then(res => {
      let items: Tech[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            Id: res.rows.item(i).Id,
          	Name:res.rows.item(i).Name,
          	Value:res.rows.item(i).Value,
          	Cost:res.rows.item(i).Cost,
          	Description:res.rows.item(i).Description,
            Buy:res.rows.item(i).Buy,
           });
        }
      }
      this.techList.next(items);
    });
    
  }

  buyTech(id, buy){
    let data = [buy];
    return this.storage.executeSql(`UPDATE techs SET Buy = ? WHERE Id = ${id}`, data)
    .then(data => {
      this.getTech();
      this.getTechOwner();
    })
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
            TAttack:res.rows.item(i).TAttack,
	          TDefense:res.rows.item(i).TDefense,
	          TTactics:res.rows.item(i).TTactics,
	          TMove:res.rows.item(i).TMove,
	          TOther: res.rows.item(i).TOther,
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
            TAttack:res.rows.item(i).TAttack,
	          TDefense:res.rows.item(i).TDefense,
	          TTactics:res.rows.item(i).TTactics,
	          TMove:res.rows.item(i).TMove,
	          TOther: res.rows.item(i).TOther,
           });
        }
      }
      this.shipListOwner.next(items);
    });
    
  }

  buyShip(id, buy){
    let data = [buy];
    return this.storage.executeSql(`UPDATE ships SET Buy = ? WHERE id = ${id}`, data)
    .then(data => {
    })
  }



  updateShips(id, shipObject: Ship) {
    let data = [shipObject.TAttack,shipObject.TDefense,shipObject.TTactics,shipObject.TMove,shipObject.TOther];
    return this.storage.executeSql(`UPDATE ships SET TAttack = ? ,TDefense = ? ,TTactics = ? ,TMove = ? , TOther = ?  WHERE id = ${id}`, data)
    .then(data => {
      this.getShips();
      this.getShipsOwner();
    })
  }


  destroyShips(id, buy) {
    let data = [buy];
    return this.storage.executeSql(`UPDATE ships SET Buy = ? WHERE id = ${id}`, data)
    .then(data => {
      this.getShipsOwner();
      this.getShips();
    })
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

