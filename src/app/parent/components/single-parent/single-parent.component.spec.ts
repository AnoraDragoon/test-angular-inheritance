import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleParentComponent } from './single-parent.component';

describe('SingleParentComponent', () => {
  let component: SingleParentComponent;
  let fixture: ComponentFixture<SingleParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
