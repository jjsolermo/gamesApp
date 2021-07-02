import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ddice',
  templateUrl: './ddice.page.html',
  styleUrls: ['./ddice.page.scss'],
})
export class DdicePage implements OnInit {

  soldierValue = 0;
  medalValue = 0;
  workValue = 0;
  starValue = 0;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sumSoldier(e){
    this.soldierValue = e + 1;
  }

  resSoldier(e){
    this.soldierValue = e - 1;
  }

  sumMedal(e){
    this.medalValue = e + 1;
  }

  resMedal(e){
    this.medalValue = e - 1;
  }

  sumWork(e){
    this.workValue = e + 1;
  }

  resWork(e){
    this.workValue = e - 1;
  }

  sumStar(e){
    this.starValue = e + 1;
  }

  resStar(e){
    this.starValue = e - 1;
  }

  reset(){
    this.starValue = 0;
    this.workValue = 0;
    this.medalValue = 0;
    this.soldierValue = 0;
  }

  navigateToGames(){
    this.router.navigateByUrl('/games');
  }

}
