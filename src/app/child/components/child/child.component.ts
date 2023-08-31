import { Component } from '@angular/core';
import { SingleParentComponent } from '../../../parent/components/single-parent/single-parent.component';

/**
 *
 */
@Component({
    selector: 'app-child',
    templateUrl: '../../../parent/components/single-parent/single-parent.component.html',
    styleUrls: ['../../../parent/components/single-parent/single-parent.component.scss']
})
export class ChildComponent extends SingleParentComponent {

    /**
     * title overwrite SingleParentComponent.title
     */
    public readonly title: string = 'child works!!';


    constructor() {
        super();
    }


}
