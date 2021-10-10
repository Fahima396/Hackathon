import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyRoutingModule } from './family-routing.module';
import { FamilyPageComponent } from './family-page/family-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FamilyPageComponent
  ],
  imports: [
    CommonModule,
    FamilyRoutingModule,
    ReactiveFormsModule
  ]
})
export class FamilyModule { }
