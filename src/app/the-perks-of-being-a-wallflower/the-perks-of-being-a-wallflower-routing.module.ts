import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThePerksOfBeingAWallflowerPage } from './the-perks-of-being-a-wallflower.page';

const routes: Routes = [
  {
    path: '',
    component: ThePerksOfBeingAWallflowerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThePerksOfBeingAWallflowerPageRoutingModule {}
