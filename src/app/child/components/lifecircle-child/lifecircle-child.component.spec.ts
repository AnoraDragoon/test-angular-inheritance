import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecircleChildComponent } from './lifecircle-child.component';

describe('LifecircleChildComponent', () => {
  let component: LifecircleChildComponent;
  let fixture: ComponentFixture<LifecircleChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecircleChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecircleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
