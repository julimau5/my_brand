import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-navigation',
  templateUrl: './front-navigation.component.html',
  styleUrls: ['./front-navigation.component.scss'],
})
export class FrontNavigationComponent implements OnInit {
  links: NavLink[] = [
    { label: 'Home', extension: '/home', active: false },
    { label: 'Curriculum', extension: '/curriculum', active: false },
    { label: 'Blog', extension: '/blog', active: false },
    { label: 'Gallery', extension: '/gallery', active: false },
    { label: 'About', extension: '/about', active: false },
  ];
  route!: string;

  constructor(private _router: Router) {
    this.initNav();
  }

  ngOnInit(): void {}

  initNav() {
    this.route = this._router.routerState.snapshot.url;
    this.resolveLinks(this.route);
  }

  resolveLinks(route: string) {
    switch (true) {
      case route.includes('/home'):
        this.links.forEach((link) => {
          link.active = link.label === 'Home';
        });
        break;
      case route.includes('/curriculum'):
        this.links.forEach((link) => {
          link.active = link.label === 'Curriculum';
        });
        break;
      case route.includes('/blog'):
        this.links.forEach((link) => {
          link.active = link.label === 'Blog';
        });
        break;
      case route.includes('/gallery'):
        this.links.forEach((link) => {
          link.active = link.label === 'Gallery';
        });
        break;
      case route.includes('/about'):
        this.links.forEach((link) => {
          link.active = link.label === 'About';
        });
        break;
    }
  }

  navigateTo(extension: string){
    this._router.navigate([`/f_index${extension}`])
      .then(()=> this.resolveLinks(extension) );
  }
}

export interface NavLink {
  label: string;
  extension: string;
  active: boolean;
}
