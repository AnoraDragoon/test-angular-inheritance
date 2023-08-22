import { Component, OnInit } from '@angular/core';
import { SingleParentPageComponent } from '../../../parent/pages/single-parent-page/single-parent-page.component';

@Component({
    selector: 'app-custom-child-page',
    templateUrl: './custom-child-page.component.html',
    styleUrls: ['./custom-child-page.component.scss']
})
export class CustomChildPageComponent extends SingleParentPageComponent {

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
