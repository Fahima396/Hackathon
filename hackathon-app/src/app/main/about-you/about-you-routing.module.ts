import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent,
    children: [
      {
        path: 'about',
        loadChildren: () => import('./about-page/about-page.component').then(m => m.AboutPageComponent)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutYouRoutingModule { }
