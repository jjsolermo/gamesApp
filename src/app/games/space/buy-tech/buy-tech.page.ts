import { Component, OnInit } from '@angular/core';
import { DbService } from '../../../services/db.service';
import { Router,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { ModalController,ToastController  } from '@ionic/angular';
import { Tech } from './../../../services/tech';
@Component({
  selector: 'app-buy-tech',
  templateUrl: './buy-tech.page.html',
  styleUrls: ['./buy-tech.page.scss'],
})
export class BuyTechPage implements OnInit {

  cps :any;
  data :any;
  techs:Observable<Tech[]>;
  techList : Tech[] = [];

  constructor(private router: Router,private rout:ActivatedRoute, private db: DbService ,public toastController: ToastController) { }

  ngOnInit() {
    this.data = this.rout.params.subscribe(params => {
      this.cps = params['cps']; 
    });

    this.db.dbState().subscribe((res) => {
      if(res){
        this.techs = this.db.fetchTech();
        console.log(this.techs);
      }
    });
  }

  async buyToast(value) {
    const toast = await this.toastController.create({
      message: `You buy a ${value} technology.`,
      duration: 2000
    });
    toast.present();
  }


  buyTech(e){
    this.db.buyTech(e.Id,1).then( data =>{
      this.buyToast(e.name);
    })
  }

  navigateToSapce(){
    this.router.navigateByUrl('/games/space');
  }

}
