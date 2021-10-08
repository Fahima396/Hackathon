import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutYouRoutingModule } from './about-you-routing.module';
import { AboutPageComponent } from './about-page/about-page.component';


@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    AboutYouRoutingModule
  ]
})
export class AboutYouModule { }
