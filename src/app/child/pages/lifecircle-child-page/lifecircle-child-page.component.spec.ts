import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecircleChildPageComponent } from './lifecircle-child-page.component';

describe('LifecircleChildPageComponent', () => {
  let component: LifecircleChildPageComponent;
  let fixture: ComponentFixture<LifecircleChildPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecircleChildPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecircleChildPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
