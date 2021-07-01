import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalShipPageRoutingModule } from './modal-ship-routing.module';

import { ModalShipPage } from './modal-ship.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalShipPageRoutingModule
  ],
  declarations: [ModalShipPage]
})
export class ModalShipPageModule {}
