import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScarfacePage } from './scarface.page';

const routes: Routes = [
  {
    path: '',
    component: ScarfacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScarfacePageRoutingModule {}
