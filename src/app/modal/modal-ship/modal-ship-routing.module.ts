import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalShipPage } from './modal-ship.page';

const routes: Routes = [
  {
    path: '',
    component: ModalShipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalShipPageRoutingModule {}
