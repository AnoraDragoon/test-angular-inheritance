import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceParentPageComponent } from './service-parent-page.component';

describe('ServiceParentPageComponent', () => {
  let component: ServiceParentPageComponent;
  let fixture: ComponentFixture<ServiceParentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceParentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceParentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
