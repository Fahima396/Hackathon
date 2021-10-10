import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourContactRoutingModule } from './your-contact-routing.module';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    YourContactRoutingModule
  ]
})
export class YourContactModule { }
