import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.page.html',
  styleUrls: ['./investment.page.scss'],
})
export class InvestmentPage implements OnInit {


  constructor(private currencyPipe:CurrencyPipe){}

  goals: { index: string, investPurpose: string, money: string, period: string }[] = [];
  indexCounter: number = 1;
  moneyValue: string = "";

  formatMoneyInput() {
    // Remove non-numeric characters
    const numericValue = this.moneyValue.replace(/[^\d]/g, '');

    // Format the value with a dollar sign and comma separator
    const formattedValue = this.currencyPipe.transform(numericValue, 'USD', 'symbol', '1.0-0');

    if (formattedValue !== null) {
      this.moneyValue = formattedValue;
    }
  }

  getInput(investPurpose: string, period: string) {
    this.goals.push({ index: this.indexCounter.toString(), investPurpose, money: this.moneyValue, period });
    this.indexCounter++;
  }


  ngOnInit() {
  }

}

