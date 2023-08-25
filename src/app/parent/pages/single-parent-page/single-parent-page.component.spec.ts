import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleParentPageComponent } from './single-parent-page.component';
import { ParentModule } from '../../parent.module';

describe('SinglePageComponent', () => {
    let component: SingleParentPageComponent;
    let fixture: ComponentFixture<SingleParentPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SingleParentPageComponent],
            imports: [ParentModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SingleParentPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
