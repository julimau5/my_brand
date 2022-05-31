import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontIndexComponent } from './front-index/front-index.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path:'',
    component: FrontIndexComponent,
    children: [
      {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontdoorRoutingModule { }
