import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.page.html',
  styleUrls: ['./investment.page.scss'],
})
export class InvestmentPage implements OnInit {

  constructor(private currencyPipe: CurrencyPipe, private camera: Camera) { }

  goals: { index: string, investPurpose: string, money: string, period: string }[] = [];
  indexCounter: number = 1;
  selectedImage: string = '';
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

  chooseFromGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        this.selectedImage = 'data:image/jpeg;base64,' + imageData;
      },
      (err) => {
        console.error('Error selecting from gallery:', err);
      }
    );
  }


  ngOnInit() {
  }

}

