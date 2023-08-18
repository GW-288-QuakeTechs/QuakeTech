import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StopAdsPageRoutingModule } from './stop-ads-routing.module';

import { StopAdsPage } from './stop-ads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StopAdsPageRoutingModule
  ],
  declarations: [StopAdsPage]
})
export class StopAdsPageModule {}
