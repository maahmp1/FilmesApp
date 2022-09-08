import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThePerksOfBeingAWallflowerPageRoutingModule } from './the-perks-of-being-a-wallflower-routing.module';

import { ThePerksOfBeingAWallflowerPage } from './the-perks-of-being-a-wallflower.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThePerksOfBeingAWallflowerPageRoutingModule
  ],
  declarations: [ThePerksOfBeingAWallflowerPage]
})
export class ThePerksOfBeingAWallflowerPageModule {}
