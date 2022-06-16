import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumMainPageComponent } from './pages/curriculum-main-page/curriculum-main-page.component';

const routes: Routes = [
  {
    path: '',
    component: CurriculumMainPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumRoutingModule { }
