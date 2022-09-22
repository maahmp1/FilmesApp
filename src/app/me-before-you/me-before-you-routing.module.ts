import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeBeforeYouPage } from './me-before-you.page';

const routes: Routes = [
  {
    path: '',
    component: MeBeforeYouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeBeforeYouPageRoutingModule {}
