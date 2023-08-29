import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputChildPageComponent } from './input-output-child-page.component';

describe('InputOutputChildPageComponent', () => {
  let component: InputOutputChildPageComponent;
  let fixture: ComponentFixture<InputOutputChildPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputChildPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputChildPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
