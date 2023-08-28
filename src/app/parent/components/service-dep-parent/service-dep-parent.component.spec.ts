import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDepParentComponent } from './service-dep-parent.component';

describe('ServiceDepParentComponent', () => {
    let component: ServiceDepParentComponent;
    let fixture: ComponentFixture<ServiceDepParentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ServiceDepParentComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ServiceDepParentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
