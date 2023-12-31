import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageComponent } from './manage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';

describe('ManageComponent', () => {
    let component: ManageComponent;
    let fixture: ComponentFixture<ManageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ManageComponent],
            imports: [AppModule, ReactiveFormsModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ManageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
