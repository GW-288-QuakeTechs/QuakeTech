// Import necessary Angular modules and components
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosPage } from './videos.page'; // Import the component to be associated with this route

// Define the routes for this module
const routes: Routes = [
  {
    path: '', // The URL path for this route (root path)
    component: VideosPage, // Specify the component to be displayed when this route is accessed
  }
];

// Define and export the module that contains the route configuration
@NgModule({
  imports: [RouterModule.forChild(routes)], // Import the RouterModule and configure it with the defined routes
  exports: [RouterModule], // Export the configured RouterModule for use in other parts of the application
})
export class VideosPageRoutingModule {} // Define the route module class
