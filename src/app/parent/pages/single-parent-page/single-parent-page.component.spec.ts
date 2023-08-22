import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleParentPageComponent } from './single-parent-page.component';

describe('SinglePageComponent', () => {
  let component: SingleParentPageComponent;
  let fixture: ComponentFixture<SingleParentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleParentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleParentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
