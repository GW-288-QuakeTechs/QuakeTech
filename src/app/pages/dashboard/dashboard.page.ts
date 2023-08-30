import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditModalComponent } from './edit-modal.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  goals: {list: number; name: string; amount: number; goal: number; editing: boolean }[] = [];
  investmentgoals: {list: number; name: string; amount: number; goal: number; editing: boolean }[] = [];



  constructor(private modalController: ModalController) { 
    // Initialize goals with default values and editing status
    this.goals = [
      {list: 1, name: 'Computer', amount: 1250, goal: 3500, editing: false },
      {list: 2, name: 'Travel', amount: 950, goal: 3500, editing: false },
      {list: 3, name: 'Home', amount: 5550, goal: 3500, editing: false },
      {list: 4, name: 'Rainy Day', amount: 1950, goal: 3500, editing: false },
      {list: 5, name: 'Wedding', amount: 1400, goal: 3500, editing: false },
      {list: 6, name: 'Furnishings', amount: 220, goal: 3500, editing: false },
    ];
    this.investmentgoals = [
      {list: 1, name: 'Retirement', amount: 190000, goal: 450000, editing: false },
      {list: 2, name: 'Education', amount: 3800, goal: 55000, editing: false },
      {list: 3, name: 'Start a Business', amount: 15000, goal: 30000, editing: false },
      {list: 4, name: 'Legacy', amount: 1950, goal: 15000, editing: false },
    ];
  }

  async openEditModal(itemType: string, index: number) {
    const modal = await this.modalController.create({
      component: EditModalComponent,
      componentProps: {
        itemType: itemType,
        index: index
      },
      cssClass: 'edit-modal' // Apply the custom CSS class
    });
  
    await modal.present();
  
    const { data } = await modal.onWillDismiss();
  
    // If data contains updated information, update the goals array
    if (data && data.updatedItem) {
      const updatedItem = data.updatedItem;
      if (updatedItem.itemType === 'savings') {
        this.goals[updatedItem.index].amount = updatedItem.updatedAmount;
      } else if (updatedItem.itemType === 'investment') {
        this.investmentgoals[updatedItem.index].amount = updatedItem.updatedAmount;
      }
    }
  }

  toggleEdit(index: number, section: string) {
    if (section === 'savings') {
      this.goals[index].editing = !this.goals[index].editing;
    } else if (section === 'investment') {
      this.investmentgoals[index].editing = !this.investmentgoals[index].editing;
    }
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


  // Method to calculate total savings amount
  calculateTotalinvestmentAmount(): number {
    let totalI = 0; // Initialize total to 0
    for (const investmentgoal of this.investmentgoals) {
      totalI += investmentgoal.amount;
    }
    return totalI;
  }

  // Method to calculate total savings goal amount
  calculateTotalinvestmentGoal(): number {
    let totalInvestment = 0;
    for (const investmentgoal of this.investmentgoals) {
      totalInvestment += investmentgoal.goal;
    }
    return totalInvestment;
  }


  
  ngOnInit() {
  }
}

