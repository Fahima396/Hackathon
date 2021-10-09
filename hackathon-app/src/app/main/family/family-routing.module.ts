import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyPageComponent } from './family-page/family-page.component';

const routes: Routes = [
  {
    path: '',
    component: FamilyPageComponent,
    children: [
      {
        path: 'family',
        loadChildren: () => import('./family-page/family-page.component').then(m => m.FamilyPageComponent)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyRoutingModule { }
