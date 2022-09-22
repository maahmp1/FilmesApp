import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaptainAmericaPage } from './captain-america.page';

const routes: Routes = [
  {
    path: '',
    component: CaptainAmericaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaptainAmericaPageRoutingModule {}
