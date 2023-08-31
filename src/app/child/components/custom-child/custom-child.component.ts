import { Component, OnInit } from '@angular/core';
import { SingleParentComponent } from 'src/app/parent/components/single-parent/single-parent.component';

@Component({
    selector: 'app-custom-child',
    templateUrl: './custom-child.component.html',
    // Last style file overwrite previews
    styleUrls: ['../../../parent/components/single-parent/single-parent.component.scss', './custom-child.component.scss']
})
export class CustomChildComponent extends SingleParentComponent {

    constructor() {
        super();
    }

}
