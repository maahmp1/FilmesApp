import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeBeforeYouPageRoutingModule } from './me-before-you-routing.module';

import { MeBeforeYouPage } from './me-before-you.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeBeforeYouPageRoutingModule
  ],
  declarations: [MeBeforeYouPage]
})
export class MeBeforeYouPageModule {}
