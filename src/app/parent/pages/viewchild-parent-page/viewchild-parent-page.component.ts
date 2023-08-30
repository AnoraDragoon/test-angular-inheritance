import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewchildParentComponent } from '../../components/viewchild-parent/viewchild-parent.component';

@Component({
    selector: 'app-viewchild-parent-page',
    templateUrl: './viewchild-parent-page.component.html',
    styleUrls: ['./viewchild-parent-page.component.scss']
})
export class ViewchildParentPageComponent implements OnInit {

    @ViewChild('subComponent') subComponent: ViewchildParentComponent;
    readonly title: string = 'viewchild-parent-page';


    constructor() { }

    ngOnInit(): void {
    }

    subComponentToggleNumber(): void {
        let num = this.subComponent.num === 0 ? 8 : 0;
        this.subComponent.setNumber(num)
    }

}
