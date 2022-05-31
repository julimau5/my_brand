import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontNavigationComponent } from './front-navigation.component';

describe('FrontNavigationComponent', () => {
  let component: FrontNavigationComponent;
  let fixture: ComponentFixture<FrontNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
