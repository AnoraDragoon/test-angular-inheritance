import { Component, OnInit } from '@angular/core';
import { ViewchildParentPageComponent } from 'src/app/parent/pages/viewchild-parent-page/viewchild-parent-page.component';

@Component({
    selector: 'app-viewchild-child-page',
    templateUrl: './viewchild-child-page.component.html',
    styleUrls: ['./viewchild-child-page.component.scss']
})
export class ViewchildChildPageComponent extends ViewchildParentPageComponent implements OnInit {

    readonly title: string = 'viewchild-child-page';


    constructor() {
        super();
    }

    ngOnInit(): void {
    }

}
