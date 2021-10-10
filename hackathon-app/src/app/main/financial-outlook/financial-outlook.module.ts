import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialOutlookRoutingModule } from './financial-outlook-routing.module';
import { FinancialPageComponent } from './financial-page/financial-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FinancialPageComponent
  ],
  imports: [
    CommonModule,
    FinancialOutlookRoutingModule,
    ReactiveFormsModule
  ]
})
export class FinancialOutlookModule { }
