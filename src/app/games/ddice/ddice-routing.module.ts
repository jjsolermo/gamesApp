import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DdicePage } from './ddice.page';

const routes: Routes = [
  {
    path: '',
    component: DdicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DdicePageRoutingModule {}
