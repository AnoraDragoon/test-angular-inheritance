import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomServiceChildComponent } from './custom-service-child.component';

describe('CustomServiceChildComponent', () => {
  let component: CustomServiceChildComponent;
  let fixture: ComponentFixture<CustomServiceChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomServiceChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomServiceChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
