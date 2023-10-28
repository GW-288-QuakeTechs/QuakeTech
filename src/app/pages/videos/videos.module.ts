// Import necessary Angular modules and components
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideosPageRoutingModule } from './videos-routing.module'; // Import the route configuration for VideosPage

import { VideosPage } from './videos.page'; // Import the VideosPage component

// Define the Angular module for the VideosPage
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideosPageRoutingModule
  ],
  declarations: [VideosPage] // Declare the VideosPage component to make it available in this module
})
export class VideosPageModule {} // Define the Angular module class for VideosPage
