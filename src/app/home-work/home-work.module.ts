import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeWorkLaptopComponent } from './home-work-laptop/home-work-laptop.component';
import { HomeWorkCarouselComponent } from './home-work-carousel/home-work-carousel.component';
import { HomeWorkSmartphoneComponent } from './home-work-smartphone/home-work-smartphone.component';
import { HomeWorkFooterComponent } from './home-work-footer/home-work-footer.component';
import { HomeWorkHeaderComponent } from './home-work-header/home-work-header.component';

@NgModule({
  declarations: [
    HomeWorkLaptopComponent, 
    HomeWorkCarouselComponent, 
    HomeWorkSmartphoneComponent, 
    HomeWorkFooterComponent, 
    HomeWorkHeaderComponent, 
  ],
  exports: [
    HomeWorkLaptopComponent, 
    HomeWorkCarouselComponent, 
    HomeWorkSmartphoneComponent, 
    HomeWorkFooterComponent, 
    HomeWorkHeaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeWorkModule { }
