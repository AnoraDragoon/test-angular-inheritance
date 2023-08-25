import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPageComponent } from './child-page.component';
import { ParentModule } from 'src/app/parent/parent.module';

describe('ChildPageComponent', () => {
  let component: ChildPageComponent;
  let fixture: ComponentFixture<ChildPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPageComponent ],
      imports: [
        ParentModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
