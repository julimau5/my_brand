import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { FrontdoorRoutingModule } from './frontdoor-routing.module';

import { FrontIndexComponent } from './front-index/front-index.component';
import { HomePageComponent } from '../frontdoor/pages/home-page/home-page.component';
import { NotFoundPageComponent } from '../frontdoor/pages/not-found-page/not-found-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

import { IntroComponent } from '../frontdoor/components/intro/intro.component';
import { FrontNavigationComponent } from './components/front-navigation/front-navigation.component';
import { MessageDisplayComponent } from './components/message-display/message-display.component';

@NgModule({
  declarations: [
    HomePageComponent,
    NotFoundPageComponent,
    IntroComponent,
    FrontIndexComponent,
    FrontNavigationComponent,
    AboutPageComponent,
    MessageDisplayComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FrontdoorRoutingModule
  ]
})
export class FrontdoorModule { }
