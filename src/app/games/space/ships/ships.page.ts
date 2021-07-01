import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/app/services/ship';
import { DbService } from '../../../services/db.service';
import { Router,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { ModalController,ToastController  } from '@ionic/angular';
import { ModalPage } from '../../../modal/modal/modal.page';
import { Tech } from './../../../services/tech';
import { forEach } from '@angular-devkit/schematics';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.page.html',
  styleUrls: ['./ships.page.scss'],
})
export class ShipsPage implements OnInit {

  shipList : Ship[]= [];
  techList : Tech[] = [];
  ships:Observable<Ship[]>;
  techs:Observable<Tech[]>;
  
  cps :any;
  data :any;
  hull_size: 1;
  limit_Ship :0;

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
          techOv = new Tech
          e.map(i =>{
              this.techList.push(new Tech(
                'Id':i.Id,
                'Name':'i.Name',
                'Value':i.Value,
                'Cost':i.Cost,
                'Description':i.Description,
                Buy:i.Buy
              ))
          })
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

  buy(e){
    let tempScps = this.cps - e.CP;
    if(tempScps < 0){
      this.noCpsToast();
    }else{
      if(e.Hull > this.hull_size){
        this.masHullToast();
      }else{
        this.cps = this.cps - e.CP
        this.db.buyShip(e.id, 1);
        this.assigTech(e);
      }
      
    }   
    
  }

  assigTech(ship : Ship){
    

    this.techs.forEach(element => {
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
        this.techs.forEach(element => {       
        if(element.Name === 'Point Defense' && element.Value > 0){
          ship.TOther = 'Point Defense :' + element.Value;
        }
      });
      break;
      case 'Destroyer':
        this.techs.forEach(element => {        
          if(element.Name === 'Scanners' && element.Value > 0){
            ship.TOther = 'Scanners: ' + element.Value;
          }
        });
        break;
        case 'Cruiser':
        this.techs.forEach(element => {        
          if(element.Name === 'Exploration' && element.Value > 0){
            ship.TOther = 'Exploration :' + element.Value;
          }
        });
        break;
        case 'Fighter 1':
          this.techs.forEach(element => {          
            if(element.Name === 'Fighters' && element.Value > 0){
              ship.TOther ='Fighters :' + element.Value;
              ship.TMove = 0
            }
          });
          break;
          case 'Fighter 2':
          this.techs.forEach(element => {          
            if(element.Name === 'Fighters' && element.Value > 0){
              ship.TOther ='Fighters :' + element.Value;
              ship.TMove = 0
            }
          });
          break;
          case 'Fighter 3':
          this.techs.forEach(element => {          
            if(element.Name === 'Fighters' && element.Value > 0){
              ship.TOther ='Fighters :' + element.Value;
              ship.TMove = 0
            }
          });
          break;
          case 'Raider':
          this.techs.forEach(element => {          
            if(element.Name === 'Cloaking' && element.Value > 0){
              ship.TOther ='Cloaking :' + element.Value;
            }
          });
          break;
          case 'Mine Sweeper':
          this.techs.forEach(element => {          
            if(element.Name === 'Mine Sweeper' && element.Value > 0){
              ship.TOther ='Mine Sweeper :' + element.Value;
            }
          });
          break;


          
    }



  console.log(ship);


  }

  navigateToSapce(){
    this.router.navigateByUrl('/games/space');
  }

  techFake:any[] =[
    {
      Buy: 1,
Cost: 0,
Description: "Add 0 to a ship's attack rating when in battle",
Id: 6,
Name: "Attack",
Value: 0
    },{
      Buy: 1,
Cost: 0,
Description: "Add 0 to a ship's attack rating when in battle",
Id: 6,
Name: "Attack",
Value: 1
    }
    
    
    ,{
      Buy: 1,
Cost: 0,
Description: "Can build SC,CO,SY,Miner,Decoy,MS Pipeline",
Id: 10,
Name: "Ships Size",
Value: 1
    },
    {
      Buy: 1,
Cost: 0,
Description: "Can move 1 hex per turn",
Id: 19,
Name: "Move",
Value: 1
    },
    {
      Buy: 1,
Cost: 10,
Description: "Can move 1 hex per turn",
Id: 19,
Name: "Move",
Value: 2
    }
    
    ,{
      Buy: 1,
Cost: 0,
Description: "Can build a 1 hull point per SY",
Id: 26,
Name: "Ship Yards",
Value: 1
    }
  ]
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

}
