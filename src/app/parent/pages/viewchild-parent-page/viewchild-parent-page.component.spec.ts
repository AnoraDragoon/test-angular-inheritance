import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildParentPageComponent } from './viewchild-parent-page.component';

describe('ViewchildParentPageComponent', () => {
  let component: ViewchildParentPageComponent;
  let fixture: ComponentFixture<ViewchildParentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchildParentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildParentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
