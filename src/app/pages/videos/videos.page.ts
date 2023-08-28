import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
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
  currentImageIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  nextImage() {
    this.currentImageIndex++;
    if (this.currentImageIndex >= this.images.length) {
      this.currentImageIndex = 0; 
    }
  }
}
