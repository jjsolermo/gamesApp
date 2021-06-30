import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/app/services/ship';
import { DbService } from '../../../services/db.service';
import { Router,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../../../modal/modal/modal.page';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.page.html',
  styleUrls: ['./ships.page.scss'],
})
export class ShipsPage implements OnInit {

  shipList : Ship[]= [];
  ships:Observable<any[]>;
  shipFake:any[] =[
  {
    Attack_Strength: "E3 (A6-8)",
  Buy: 1,
  CP: 6,
  Class: "Scout",
  Defense_Strength: "0",
  Description: "May have increased firepower versus fighters depending on level of point defense technology - A6 at PD1, A7 at PD2, A8 at PD3.",
  Hull_Size: 1,
  Type: "SC #1",
  id: 1
  },
  {
    Attack_Strength: "E3 (A6-8)",
  Buy: 1,
  CP: 6,
  Class: "Scout",
  Defense_Strength: "0",
  Description: "May have increased firepower versus fighters depending on level of point defense technology - A6 at PD1, A7 at PD2, A8 at PD3.",
  Hull_Size: 1,
  Type: "SC #2",
  id: 2
  },
  {Attack_Strength: "E3 (A6-8)",
  Buy: 1,
  CP: 6,
  Class: "Scout",
  Defense_Strength: "0",
  Description: "May have increased firepower versus fighters depending on level of point defense technology - A6 at PD1, A7 at PD2, A8 at PD3.",
  Hull_Size: 1,
  Type: "SC #3",
  id: 3
  },
  {
    Attack_Strength: "0",
  Buy: 1,
  CP: 5,
  Class: "Mining Ship",
  Defense_Strength: "0",
  Description: "(0 - Mant) Can pick up minerals and Space Wrecks.Always has a movement tech of 1.Is destroyed instantly during movement or combat if there are enemycombat ships present and there are no friendly combat ships.Can not retreat.",
  Hull_Size: 1,
  Type: "Miner 1",
  id: 58
  }
]
cps :any;
data :any;

  constructor(private router: Router,private rout:ActivatedRoute, private db: DbService , public modalController: ModalController) { }

  ngOnInit() {
    this.data = this.rout.params.subscribe(params => {
      this.cps = params['cps']; 
    });

    this.db.dbState().subscribe((res) => {
      if(res){
        this.ships = this.db.fetchShipsOwner();
      }
    });
  }

  async presentModal(e) {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'modal',
      componentProps: {
        Attack_Strength: e.Attack_Strength,
        Buy: e.Buy,
        CP: e.CP,
        Class: e.Class,
        Defense_Strength: e.Defense_Strength,
        Description: e.Description,
        Hull_Size: e.Hull_Size,
        Type: e.Type,
        id: e.id,
      }
    });
    return await modal.present();

  }

  buy(e){
    this.cps = this.cps - e.CP
  }

  navigateToSapce(){
    this.router.navigateByUrl('/games/space');
  }

}
