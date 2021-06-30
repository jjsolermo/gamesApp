import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyShipsPage } from './buy-ships.page';

const routes: Routes = [
  {
    path: '',
    component: BuyShipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyShipsPageRoutingModule {}
