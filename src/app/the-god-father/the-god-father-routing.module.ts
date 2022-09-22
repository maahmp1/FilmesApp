import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheGodFatherPage } from './the-god-father.page';

const routes: Routes = [
  {
    path: '',
    component: TheGodFatherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheGodFatherPageRoutingModule {}
