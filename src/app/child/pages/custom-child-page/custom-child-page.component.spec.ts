import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomChildPageComponent } from './custom-child-page.component';

describe('CustomChildPageComponent', () => {
    let component: CustomChildPageComponent;
    let fixture: ComponentFixture<CustomChildPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CustomChildPageComponent]
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
