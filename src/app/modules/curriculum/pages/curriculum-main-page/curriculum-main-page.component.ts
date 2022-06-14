import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-main-page',
  templateUrl: './curriculum-main-page.component.html',
  styleUrls: ['./curriculum-main-page.component.scss'],
  animations: [
    trigger('sectionsAnimation', [
      transition(':enter', [
        query('.content-section', style({
          transform: 'translateY(-100%)',
          opacity: '0'
        })),
        query('.content-section',
          stagger('600ms', [
            animate('600ms', style({
              transform: 'translateY(0)',
              opacity: '1'
            }))
          ])
        ),
      ]),
    ]),
    trigger('openClose', [
      state('open', style({
        width: '100%',
        height: '100%'
      })),
      state('close', style({
      })),
      transition('close => open', [animate('0.5s ease')]),
      transition('open => close', [animate('0.5s ease')]),
    ]),
  ]
})
export class CurriculumMainPageComponent implements OnInit {
  screenWidth!: number;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  selectedSection: 'intro' | 'personal-info' | 'skillset' | 'experience';

  constructor() {
    this.onResize();
    this.selectedSection = 'intro';
   }

  ngOnInit(): void {}

  onSectionSelected(selection: 'intro' | 'personal-info' | 'skillset' | 'experience'): void{
    if (this.selectedSection === 'intro'){
      setTimeout(() => this.selectedSection = selection, 700);
    } else {
      this.selectedSection = selection;
    }
  }
}
