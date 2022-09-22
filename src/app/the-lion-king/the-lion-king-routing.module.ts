import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheLionKingPage } from './the-lion-king.page';

const routes: Routes = [
  {
    path: '',
    component: TheLionKingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheLionKingPageRoutingModule {}
