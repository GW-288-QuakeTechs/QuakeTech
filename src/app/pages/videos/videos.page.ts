// Import necessary Angular modules and components
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Import NavController


// Decorator to configure the component
@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
   // Array of image objects, each representing a video
  images = [
    {
      description: 'Video 1 of 3. How Do I Save Money?',
      paragraph: 'Learn how eWyzly saves you money by transforming spending into savings with you shop online',
      path: 'assets/images/Video1.png'
    },
    {
      description: 'Video 2 of 3. eWyzly, the Game',
      paragraph: 'eWyzly is one app with two modes: Game and Live. In Game mode, you simulate savings in virtual accounts. In Live mode, you save real dollars and watch them grow',
      path: 'assets/images/Video2.png'
    },
    {
      description: 'Video 3 of 3. The Virtual Closet',
      paragraph: 'When you save money, you also save your merchandise in a virtual closet for a cooling off period. If you cant live without it, you can complete your purchase after five days.',
      path: 'assets/images/Video3.png'
    },

  ];
  // Initialize the index of the current image
  currentImageIndex = 0;

  constructor(private navCtrl: NavController) {
    // Constructor for the component, receives NavController for navigation
    // Other constructor logic
  }

  ngOnInit() {
     // Initialization method, executed when the component is initialized
  }
  

  ionViewWillEnter() {
     // Lifecycle hook - Reset currentImageIndex to 0 when entering the page
    // Reset currentImageIndex to 0 when entering the page
    this.currentImageIndex = 0;
  }

  nextImage() {
      // Function to navigate to the next image
    this.currentImageIndex++;
 // Check if we have reached the end of the images array
    if (this.currentImageIndex >= this.images.length) {
      this.navigateToDashboardPage();
    }
  }

  private navigateToDashboardPage() {
     // Private method to navigate to the DashboardPage using NavController
    this.navCtrl.navigateForward('/dashboard'); // Navigate to the DashboardPage
  }
}
