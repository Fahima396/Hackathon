import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutYouRoutingModule } from './about-you-routing.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AboutYouRoutingModule
  ]
})
export class AboutYouModule { }
