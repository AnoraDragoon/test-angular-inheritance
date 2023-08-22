import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomChildComponent } from './custom-child.component';

describe('CustomChildComponent', () => {
  let component: CustomChildComponent;
  let fixture: ComponentFixture<CustomChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
