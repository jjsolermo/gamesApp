import { Component, OnInit ,Input} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() Attack_Strength:string;
  @Input() Buy: boolean;
  @Input() CP: number;
  @Input() Class: number;
  @Input() Description: string;
  @Input() Hull_Size: number;
  @Input() Type:string;
  @Input() id: number;
  @Input() TAttack: number;
  @Input() TDefense: number;
  @Input() TMove: number;
  @Input() TOther: number;
  @Input() TTactics: number;


  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

   close() {
      this.modalController.dismiss();
    }

}
