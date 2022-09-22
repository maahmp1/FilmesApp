import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheGodFatherPageRoutingModule } from './the-god-father-routing.module';

import { TheGodFatherPage } from './the-god-father.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheGodFatherPageRoutingModule
  ],
  declarations: [TheGodFatherPage]
})
export class TheGodFatherPageModule {}
