import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourContactRoutingModule } from './your-contact-routing.module';
import { ContactPageComponent } from './contact-page/contact-page.component';


@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    YourContactRoutingModule
  ]
})
export class YourContactModule { }
