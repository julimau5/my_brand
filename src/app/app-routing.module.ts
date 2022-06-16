import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './modules/frontdoor/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'f_index',
    pathMatch: 'full'
  },
  {
    path:'f_index',
    loadChildren: () => import('./modules/frontdoor/frontdoor.module').then(
      (m) => m.FrontdoorModule
    ),
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
