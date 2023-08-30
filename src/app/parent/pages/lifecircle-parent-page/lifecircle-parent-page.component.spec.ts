import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecircleParentPageComponent } from './lifecircle-parent-page.component';

describe('LifecircleParentPageComponent', () => {
  let component: LifecircleParentPageComponent;
  let fixture: ComponentFixture<LifecircleParentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecircleParentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecircleParentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
