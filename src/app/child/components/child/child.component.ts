import { Component, OnInit } from '@angular/core';
import { SingleParentComponent } from '../../../parent/components/single-parent/single-parent.component';

@Component({
    selector: 'app-child',
    templateUrl: '../../../parent/components/single-parent/single-parent.component.html',
    styleUrls: ['../../../parent/components/single-parent/single-parent.component.scss']
})
export class ChildComponent extends SingleParentComponent {

    constructor() {
        super();
    }

    // ngOnInit(): void {
    // }

}
