import { Component, OnInit } from '@angular/core';
import { fadeOnRender } from 'src/app/modules/core/animations/elements-in-out';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    fadeOnRender
  ]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
