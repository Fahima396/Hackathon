import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialPageComponent } from './financial-page/financial-page.component';

const routes: Routes = [
  {
    path: '',
    component: FinancialPageComponent,
    children: [
      {
        path: 'financial',
        loadChildren: () => import('./financial-page/financial-page.component').then(m => m.FinancialPageComponent)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialOutlookRoutingModule { }
