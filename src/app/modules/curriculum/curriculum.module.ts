import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumMainPageComponent } from './pages/curriculum-main-page/curriculum-main-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';


@NgModule({
  declarations: [
    CurriculumMainPageComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    CurriculumRoutingModule,
    CoreModule
  ]
})
export class CurriculumModule { }
