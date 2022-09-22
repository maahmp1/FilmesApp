import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaptainAmericaPageRoutingModule } from './captain-america-routing.module';

import { CaptainAmericaPage } from './captain-america.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaptainAmericaPageRoutingModule
  ],
  declarations: [CaptainAmericaPage]
})
export class CaptainAmericaPageModule {}
