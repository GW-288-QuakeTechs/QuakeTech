import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestmentPageRoutingModule } from './investment-routing.module';

import { InvestmentPage } from './investment.page';
import { CurrencyPipe  } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestmentPageRoutingModule,


  ],
  declarations: [InvestmentPage],
  providers: [CurrencyPipe],
})
export class InvestmentPageModule {}
