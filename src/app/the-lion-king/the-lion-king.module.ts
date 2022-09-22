import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheLionKingPageRoutingModule } from './the-lion-king-routing.module';

import { TheLionKingPage } from './the-lion-king.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheLionKingPageRoutingModule
  ],
  declarations: [TheLionKingPage]
})
export class TheLionKingPageModule {}
