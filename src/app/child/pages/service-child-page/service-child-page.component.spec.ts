import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChildPageComponent } from './service-child-page.component';

describe('ServiceChildPageComponent', () => {
  let component: ServiceChildPageComponent;
  let fixture: ComponentFixture<ServiceChildPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceChildPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceChildPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
