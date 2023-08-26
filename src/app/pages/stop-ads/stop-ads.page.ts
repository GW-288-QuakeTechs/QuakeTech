import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-ads',
  templateUrl: './stop-ads.page.html',
  styleUrls: ['./stop-ads.page.scss'],
})
export class StopAdsPage implements OnInit {

  items: any[] = [
    { virtualChecking: "$500", cost: "$1.75", newBalance: "$475", rewardBalance: "1,975" },
    { virtualChecking: "$1,000", cost: "$3.25", newBalance: "$2,475", rewardBalance: "2,975" },
    { virtualChecking: "$2,500", cost: "$7.50", newBalance: "$4,975", rewardBalance: "5,475" },
    { virtualChecking: "$5,000", cost: "$14.25", newBalance: "$5,475", rewardBalance: "10,975" },
    { virtualChecking: "$7,500", cost: "$19.75", newBalance: "$7,975", rewardBalance: "15,975" },
    { virtualChecking: "$10,000", cost: "$26.75", newBalance: "$10,475", rewardBalance: "20,975" },

  ];
  

  selectedRowIndex: number = -1;

  constructor() { }

  ngOnInit() {
  }

  onRowClick(index: number) {
    this.selectedRowIndex = index;
   
    console.log('Row clicked:', index);
  }
}
