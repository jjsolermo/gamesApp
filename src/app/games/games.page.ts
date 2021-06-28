import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logout();
  }

  navigateToSpace(){
    console.log('soy un boton');
    //this.router.navigateByUrl('/space');
  }

  navigateToDDice(){
    console.log('soy un boton 2');
  }

}
