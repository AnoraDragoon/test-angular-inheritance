import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecircleParentComponent } from './lifecircle-parent.component';

describe('LifecircleParentComponent', () => {
  let component: LifecircleParentComponent;
  let fixture: ComponentFixture<LifecircleParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecircleParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecircleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
