import { Component } from '@angular/core';
import { SingleParentPageComponent } from '../../../parent/pages/single-parent-page/single-parent-page.component';

@Component({
    selector: 'app-child-page',
    // Use parent template from SingleParentPageComponent
    templateUrl: '../../../parent/pages/single-parent-page/single-parent-page.component.html',
    // Use parent styles from SingleParentPageComponent
    styleUrls: ['../../../parent/pages/single-parent-page/single-parent-page.component.scss']
})
export class ChildPageComponent extends SingleParentPageComponent {
    /**
     * Overwrite SingleParentPageComponent.title.
     */
    readonly title: string = 'child-page';


    constructor() {
        super();
    }
    /**
     * Overwrite SingleParentPageComponent.getLog()
     * @returns string
     */
    getLog(): string {
        return `Init ChildPageComponent: (${this.title}) extends from (${super.title})`;
    }

}
