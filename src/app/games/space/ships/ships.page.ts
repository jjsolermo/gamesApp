import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/app/services/ship';
import { DbService } from '../../../services/db.service';
import { Router,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { ModalController,ToastController  } from '@ionic/angular';
import { ModalShipPage } from 'src/app/modal/modal-ship/modal-ship.page';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.page.html',
  styleUrls: ['./ships.page.scss'],
})
export class ShipsPage implements OnInit {

  shipList : Ship[]= [];
  ships:Observable<Ship[]>;

  constructor(private router: Router, private db: DbService , public modalController: ModalController,public toastController: ToastController) { }

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if(res){
        this.ships = this.db.fetchShipsOwner();   
        this.db.getShipsOwner().then((data) => {
          console.log(data);
        }) 
        console.log(this.ships);
      }
    });

  }

  destroyShip(ship:Ship){
    this.db.destroyShips(ship.id,0).then((res) => {
    })
  }

  async presentModal(e) {
    const modal = await this.modalController.create({
      component: ModalShipPage,
      cssClass: 'modal',
      componentProps: {
        Attack_Strength: e.Attack_Strength,
        Buy: e.Buy,
        CP: e.CP,
        Class: e.Class,
        Defense_Strength: e.Defense_Strength,
        Description: e.Description,
        Hull_Size: e.Hull_Size,
        TAttack: e.TAttack,
        TDefense: e.TDefense,
        TMove: e.TMove,
        TOther: e.TOther,
        TTactics: e.TTactics,
        Type: e.Type,
        id: e.id
      }
    });
    return await modal.present();

  }
  navigateToSapce(){
    this.router.navigateByUrl('/games/space');
  }

}
