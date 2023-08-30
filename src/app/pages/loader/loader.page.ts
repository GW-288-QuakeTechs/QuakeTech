import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    // Navigate to a different page after a 5-second delay
    setTimeout(() => {
      this.navigateToDifferentPage();
    }, 5000); // 5000 milliseconds = 5 seconds
  }

  private navigateToDifferentPage() {
    this.navCtrl.navigateForward('/signup');
  }
}
