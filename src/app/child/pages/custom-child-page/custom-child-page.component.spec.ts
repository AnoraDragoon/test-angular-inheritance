import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomChildPageComponent } from './custom-child-page.component';
import { ParentModule } from 'src/app/parent/parent.module';
import { ChildModule } from '../../child.module';

describe('CustomChildPageComponent', () => {
    let component: CustomChildPageComponent;
    let fixture: ComponentFixture<CustomChildPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CustomChildPageComponent],
            imports: [ParentModule, ChildModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomChildPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
