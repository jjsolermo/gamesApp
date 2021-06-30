import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyTechPageRoutingModule } from './buy-tech-routing.module';

import { BuyTechPage } from './buy-tech.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyTechPageRoutingModule
  ],
  declarations: [BuyTechPage]
})
export class BuyTechPageModule {}
