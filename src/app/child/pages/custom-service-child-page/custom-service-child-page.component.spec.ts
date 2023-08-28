import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomServiceChildPageComponent } from './custom-service-child-page.component';

describe('CustomServiceChildPageComponent', () => {
  let component: CustomServiceChildPageComponent;
  let fixture: ComponentFixture<CustomServiceChildPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomServiceChildPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomServiceChildPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
