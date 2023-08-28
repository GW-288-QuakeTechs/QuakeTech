import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  goals: {list: number; name: string; amount: number; goal: number; editing: boolean }[] = [];
  investmentgoals: {list: number; name: string; amount: number; goal: number; editing: boolean }[] = [];

  constructor() {
    // Initialize goals with default values and editing status
    this.goals = [
      {list: 1, name: 'Computer', amount: 1250, goal: 3500, editing: true },
      {list: 2, name: 'Travel', amount: 950, goal: 3500, editing: true },
      {list: 3, name: 'Home', amount: 5550, goal: 3500, editing: true },
      {list: 4, name: 'Rainy Day', amount: 1950, goal: 3500, editing: true },
      {list: 5, name: 'Wedding', amount: 1400, goal: 3500, editing: true },
      {list: 6, name: 'Furnishings', amount: 220, goal: 3500, editing: true },
    ];
    this.investmentgoals = [
      {list: 1, name: 'Retirement', amount: 190000, goal: 450000, editing: true },
      {list: 2, name: 'Education', amount: 3800, goal: 55000, editing: true },
      {list: 3, name: 'Start a Business', amount: 15000, goal: 30000, editing: true },
      {list: 4, name: 'Legacy', amount: 1950, goal: 15000, editing: true },
    ];
  }

  toggleEdit(index: number) {
    this.goals[index].editing = !this.goals[index].editing;
    this.investmentgoals[index].editing = !this.investmentgoals[index].editing;
  }


  // Method to calculate total savings amount
  calculateTotalSavingsAmount(): number {
    let total = 0; // Initialize total to 0
    for (const goal of this.goals) {
      total += goal.amount;
    }
    return total;
  }

  // Method to calculate total savings goal amount
  calculateTotalSavingsGoal(): number {
    let totalGoal = 0;
    for (const goal of this.goals) {
      totalGoal += goal.goal;
    }
    return totalGoal;
  }

  
  ngOnInit() {
  }
  
}

