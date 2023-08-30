import { Component, OnInit } from '@angular/core';
import { ViewchildParentComponent } from 'src/app/parent/components/viewchild-parent/viewchild-parent.component';

@Component({
    selector: 'app-viewchild-child',
    templateUrl: '../../../parent/components/viewchild-parent/viewchild-parent.component.html',
    styleUrls: ['./viewchild-child.component.scss']
})
export class ViewchildChildComponent extends ViewchildParentComponent implements OnInit {

    public readonly title: string = 'viewchild-child works!';

    constructor() {
        super();
    }

    ngOnInit(): void {
    }

}
