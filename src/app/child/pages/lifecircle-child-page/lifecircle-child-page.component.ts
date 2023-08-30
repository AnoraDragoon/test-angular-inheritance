import { Component, OnInit } from '@angular/core';
import { LifecircleParentPageComponent } from 'src/app/parent/pages/lifecircle-parent-page/lifecircle-parent-page.component';

@Component({
    selector: 'app-lifecircle-child-page',
    templateUrl: './lifecircle-child-page.component.html',
    styleUrls: ['../../../parent/pages/lifecircle-parent-page/lifecircle-parent-page.component.scss','./lifecircle-child-page.component.scss']
})
export class LifecircleChildPageComponent extends LifecircleParentPageComponent implements OnInit {

    readonly title: string = 'lifecircle-child-page';


    constructor() {
        super();
    }

    //   ngOnInit(): void {
    //   }

    initLog(): void {
        console.log('LifecircleChildPageComponent.ngOnInit executed.');
    }

}
