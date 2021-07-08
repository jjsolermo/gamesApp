import { Component, EventEmitter, OnInit , Output } from '@angular/core';
import { Ship } from 'src/app/services/ship';
import { DbService } from '../../../services/db.service';
import { Router,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { ModalController,ToastController  } from '@ionic/angular';
import { ModalPage } from '../../../modal/modal/modal.page';
import { Tech } from './../../../services/tech';

@Component({
  selector: 'app-buy-ships',
  templateUrl: './buy-ships.page.html',
  styleUrls: ['./buy-ships.page.scss'],
})
export class BuyShipsPage implements OnInit {

  schipList : Ship[]= [];
  techList : Tech[] = [];
  ships:Observable<Ship[]>;
  techs:Observable<Tech[]>;
  @Output() returnValue = new EventEmitter<any>();
  
  cps :any;
  data :any;
  hull_size = 1;
  limit_Ship  = 0;

  constructor(private router: Router,private rout:ActivatedRoute, private db: DbService , public modalController: ModalController,public toastController: ToastController) { }

  ngOnInit() {
    this.data = this.rout.params.subscribe(params => {
      this.cps = params['cps']; 
    });

    this.db.dbState().subscribe((res) => {
      if(res){
        this.ships = this.db.fetchShips();
        this.techs = this.db.fetchTechOwner();
        this.techs.forEach(e =>{
          e.map((i) => this.techList.push(i));
        })
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

  async noCpsToast() {
    const toast = await this.toastController.create({
      message: 'Insufficient cps.',
      duration: 2000
    });
    toast.present();
  }

  async masHullToast() {
    const toast = await this.toastController.create({
      message: 'You exceed the hull size.',
      duration: 2000
    });
    toast.present();
  }
  async buyToast(type,classShip) {
    const toast = await this.toastController.create({
      message: `You buy a ${type} - ${classShip}.`,
      duration: 2000
    });
    toast.present();
  }


  buy(e){
    let tempScps = this.cps - e.CP;
    if(tempScps < 0){
      this.noCpsToast();
    }else{
      if(e.Hull_Size > this.hull_size){
        this.masHullToast();
      }else{
        this.cps = this.cps - e.CP
        this.assigTech(e);
        this.db.buyShip(e.id, 1);
        this.buyToast(e.Type,e.Class);
        this.returnValue.emit(this.cps);
      }
      
    }   
    
  }

  assigTech(ship : Ship){
    

    this.techList.forEach(element => {
      if(element.Name === 'Attack' && element.Value > 0){
        ship.TAttack = element.Value;
      }
      if(element.Name === 'Defense' && element.Value > 0){
        ship.TDefense = element.Value;
      }
      if(element.Name === 'Tactics' && element.Value > 0){
        ship.TTactics = element.Value;
      }
      if(element.Name === 'Move' && element.Value > 1){
        ship.TMove = element.Value;
      }
    });

    switch (ship.Class){
      case 'Scout':
        this.techList.forEach(element => {       
        if(element.Name === 'Point Defense' && element.Value > 0){
          ship.TOther = 'Point Defense :' + element.Value;
        }
      });
      break;
      case 'Destroyer':
        this.techList.forEach(element => {        
          if(element.Name === 'Scanners' && element.Value > 0){
            ship.TOther = 'Scanners: ' + element.Value;
          }
        });
        break;
        case 'Cruiser':
        this.techList.forEach(element => {        
          if(element.Name === 'Exploration' && element.Value > 0){
            ship.TOther = 'Exploration :' + element.Value;
          }
        });
        break;
        case 'Fighter 1':
          this.techList.forEach(element => {          
            if(element.Name === 'Fighters' && element.Value > 0){
              ship.TOther ='Fighters :' + element.Value;
              ship.TMove = 0
            }
          });
          break;
          case 'Fighter 2':
          this.techList.forEach(element => {          
            if(element.Name === 'Fighters' && element.Value > 0){
              ship.TOther ='Fighters :' + element.Value;
              ship.TMove = 0
            }
          });
          break;
          case 'Fighter 3':
          this.techList.forEach(element => {          
            if(element.Name === 'Fighters' && element.Value > 0){
              ship.TOther ='Fighters :' + element.Value;
              ship.TMove = 0
            }
          });
          break;
          case 'Raider':
          this.techList.forEach(element => {          
            if(element.Name === 'Cloaking' && element.Value > 0){
              ship.TOther ='Cloaking :' + element.Value;
            }
          });
          break;
          case 'Mine Sweeper':
          this.techList.forEach(element => {          
            if(element.Name === 'Mine Sweeper' && element.Value > 0){
              ship.TOther ='Mine Sweeper :' + element.Value;
            }
          });
          break;
          
    }

    this.db.updateShips(ship.id,ship);

  }

  navigateToSapce(){
    this.router.navigateByUrl('/games/space');
  }

}
