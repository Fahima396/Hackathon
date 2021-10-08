import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialOutlookRoutingModule } from './financial-outlook-routing.module';
import { FinancialPageComponent } from './financial-page/financial-page.component';


@NgModule({
  declarations: [
    FinancialPageComponent
  ],
  imports: [
    CommonModule,
    FinancialOutlookRoutingModule
  ]
})
export class FinancialOutlookModule { }
