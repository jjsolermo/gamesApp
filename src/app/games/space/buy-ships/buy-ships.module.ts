import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyShipsPageRoutingModule } from './buy-ships-routing.module';

import { BuyShipsPage } from './buy-ships.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyShipsPageRoutingModule
  ],
  declarations: [BuyShipsPage]
})
export class BuyShipsPageModule {}
