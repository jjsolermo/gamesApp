import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DdicePageRoutingModule } from './ddice-routing.module';

import { DdicePage } from './ddice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DdicePageRoutingModule
  ],
  declarations: [DdicePage]
})
export class DdicePageModule {}
