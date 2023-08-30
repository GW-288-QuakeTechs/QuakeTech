import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import { FormsModule } from '@angular/forms'; // Import FormsModule


@Component({
  selector: 'app-dashboard',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal-component.scss'],
})

export class EditModalComponent implements OnInit {
  @Input() itemType!: string; // Using definite assignment assertion
  @Input() index!: number;     // Using definite assignment assertion
  updatedAmount: number;

  constructor(private modalController: ModalController) {
    this.updatedAmount = 0; // Initialize updatedAmount
  }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }

  saveChanges() {
    this.modalController.dismiss({
      updatedItem: {
        itemType: this.itemType,
        index: this.index,
        updatedAmount: this.updatedAmount
      }
    });
  }
}

@NgModule({
    declarations: [EditModalComponent],
    imports: [CommonModule, IonicModule, FormsModule], // Include FormsModule here
  })
  export class EditModalModule {}
