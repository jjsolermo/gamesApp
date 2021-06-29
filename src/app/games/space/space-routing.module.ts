import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpacePage } from './space.page';

const routes: Routes = [
  {
    path: '',
    component: SpacePage
  },
  {
    path: 'ships',
    loadChildren: () => import('./ships/ships.module').then( m => m.ShipsPageModule)
  },
  {
    path: 'techs',
    loadChildren: () => import('./techs/techs.module').then( m => m.TechsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpacePageRoutingModule {}
