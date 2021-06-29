import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/app/services/ship';
import { DbService } from '../../../services/db.service';


@Component({
  selector: 'app-ships',
  templateUrl: './ships.page.html',
  styleUrls: ['./ships.page.scss'],
})
export class ShipsPage implements OnInit {

  shipList : Ship[]= [];

  constructor(private db: DbService) { }

  ngOnInit() {

    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchShipsOwner().subscribe(item => {
          this.shipList = item
          
        })
      }
    });


  }

}
