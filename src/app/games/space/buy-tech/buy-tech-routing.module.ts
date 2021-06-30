import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyTechPage } from './buy-tech.page';

const routes: Routes = [
  {
    path: '',
    component: BuyTechPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyTechPageRoutingModule {}
