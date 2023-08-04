import { Component, OnInit } from '@angular/core';
import { ParentPageComponent } from '../parent-page/parent-page.component';

@Component({
    selector: 'app-custom-child-page',
    templateUrl: './custom-child-page.component.html',
    styleUrls: ['./custom-child-page.component.scss']
})
export class CustomChildPageComponent extends ParentPageComponent {

    constructor() {
        super();
    }

    ngOnInit(): void {
        super.ngOnInit();
        console.log('Init CustomChildPageComponent');
    }

    showForm(): void {
        this.status = true
    }

    hideForm(): void {
        if (this.status) {
            this.toggleStatus();
        }
    }
}
