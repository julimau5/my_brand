import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { modalMenuAnimation } from '../../../core/animations/navbar.animations';

@Component({
  selector: 'app-front-navigation',
  templateUrl: './front-navigation.component.html',
  styleUrls: ['./front-navigation.component.scss'],
  animations: [modalMenuAnimation],
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
  activeLink!: NavLink;

  isColapsed: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  isOpened: boolean = false;

  constructor(
    private _router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.initNav();
  }

  ngOnInit(): void {}

  initNav() {
    this.route = this._router.routerState.snapshot.url;
    this.resolveLinks(this.route);
  }

  resolveLinks(route: string) {
    this.links.forEach((link) => {
      if (route.includes(link.extension)) {
        this.activeLink = link;
        this.isOpened = false;
      }
    });
  }

  navigateTo(link: NavLink) {
    this._router
      .navigate([`/f_index${link.extension}`])
      .then(() => this.resolveLinks(link.extension));
  }

  toogleMenu() {
    this.isOpened = !this.isOpened;
  }
}

export interface NavLink {
  label: string;
  extension: string;
  active: boolean;
}
