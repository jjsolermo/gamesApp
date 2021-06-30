import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/app/services/ship';
import { DbService } from '../../../services/db.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ships',
  templateUrl: './ships.page.html',
  styleUrls: ['./ships.page.scss'],
})
export class ShipsPage implements OnInit {

  shipList : Ship[]= [];

  constructor(private router: Router, private db: DbService) { }

  ngOnInit() {

    this.db.dbState().subscribe((res) => {
      console.log(res)
      if(res){
        this.db.getShipsOwner().then( async item => {
          console.log( await item);   
        })
      }
    });


  }

  navigateToSapce(){
    this.router.navigateByUrl('/games/space');
  }

}
