import { Component, OnInit } from '@angular/core';
import { SingleParentComponent } from 'src/app/parent/components/single-parent/single-parent.component';

@Component({
    selector: 'app-custom-child',
    templateUrl: './custom-child.component.html',
    styleUrls: ['./custom-child.component.scss']
})
export class CustomChildComponent extends SingleParentComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit(): void {

    }

}
