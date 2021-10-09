import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/about-you/about-you.module').then(m => m.AboutYouModule)
  },
  
  {
    path: 'family',
    loadChildren: () => import('./main/family/family.module').then(m => m.FamilyModule)
  },
  {
    path: 'financial',
    loadChildren: () => import('./main/financial-outlook/financial-outlook.module').then(m => m.FinancialOutlookModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./main/your-contact/your-contact.module').then(m => m.YourContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
