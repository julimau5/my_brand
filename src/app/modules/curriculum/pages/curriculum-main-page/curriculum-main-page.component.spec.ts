import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumMainPageComponent } from './curriculum-main-page.component';

describe('CurriculumMainPageComponent', () => {
  let component: CurriculumMainPageComponent;
  let fixture: ComponentFixture<CurriculumMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
