import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScarfacePageRoutingModule } from './scarface-routing.module';

import { ScarfacePage } from './scarface.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScarfacePageRoutingModule
  ],
  declarations: [ScarfacePage]
})
export class ScarfacePageModule {}
