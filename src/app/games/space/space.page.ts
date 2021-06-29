import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DbService } from '../../services/db.service';
import { Turn } from './../../services/turn';



@Component({
  selector: 'app-space',
  templateUrl: './space.page.html',
  styleUrls: ['./space.page.scss'],
})
export class SpacePage implements OnInit {

  Turn: Turn[] = []

  ionicForm :FormGroup;
  total= 0;
  subTotal= 0;
  carryValue = 0;
  colonyValue= 0;
  mineralValue = 0;
  pipeValue = 0;
  manteninanceValue = 0;
  turnOrderBidValue = 0;

  constructor(private router: Router, private db: DbService,) { }

  ngOnInit() {
      this.ionicForm = new FormGroup({
        carry: new FormControl(this.carryValue),
        colony: new FormControl(0),
        mineral: new FormControl(0),
        pipe: new FormControl(0),
        manteninance:new FormControl(0),
        turnOrderBid:new FormControl(0)
      });

      this.db.dbState().subscribe((res) => {
        if(res){
          this.db.fetchTurn().subscribe(item => {
            this.Turn = item
            console.log(this.Turn);
            /* if(this.Turn){
              this.carryValue = this.Turn[0].CPS
            }else{
              this.carryValue = 0
            } */
            
          })
        }
      });
}

navigateToGames(){
  this.router.navigateByUrl('/games');
}

public updateCarry(e) :void{
  this.total =  e + this.colonyValue + this.mineralValue + this.pipeValue
}
public updateColony(e) :void{
  this.total = this.carryValue + e + this.mineralValue + this.pipeValue
}
public updateMineral(e) :void{
  this.total = this.carryValue + this.colonyValue + e + this.pipeValue
} 
public updatePipe(e) :void{
  this.total = this.carryValue + this.colonyValue + this.mineralValue + e
}

public updateManteninance(e) :void{
  this.subTotal = this.total - e - this.turnOrderBidValue
}
public updateTurnOrderBid(e) :void{
  this.subTotal = this.total - this.manteninanceValue - e
}

cpForm(){
  console.log(this.ionicForm.value)
}

}
