import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildChildPageComponent } from './viewchild-child-page.component';

describe('ViewchildChildPageComponent', () => {
  let component: ViewchildChildPageComponent;
  let fixture: ComponentFixture<ViewchildChildPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchildChildPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildChildPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
