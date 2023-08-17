import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinPrizesPageRoutingModule } from './win-prizes-routing.module';

import { WinPrizesPage } from './win-prizes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WinPrizesPageRoutingModule
  ],
  declarations: [WinPrizesPage]
})
export class WinPrizesPageModule {}
