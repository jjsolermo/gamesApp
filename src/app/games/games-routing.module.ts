import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesPage } from './games.page';

const routes: Routes = [
  {
    path: '',
    component: GamesPage
  },
  {
    path: 'space',
    loadChildren: () => import('./space/space.module').then( m => m.SpacePageModule)
  },  {
    path: 'ddice',
    loadChildren: () => import('./ddice/ddice.module').then( m => m.DdicePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesPageRoutingModule {}
