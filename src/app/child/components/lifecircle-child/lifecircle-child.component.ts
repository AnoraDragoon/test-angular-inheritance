import { Component, OnInit } from '@angular/core';
import { LifecircleParentComponent } from 'src/app/parent/components/lifecircle-parent/lifecircle-parent.component';

@Component({
    selector: 'app-lifecircle-child',
    templateUrl: '../../../parent/components/lifecircle-parent/lifecircle-parent.component.html',
    styleUrls: ['../../../parent/components/lifecircle-parent/lifecircle-parent.component.scss', './lifecircle-child.component.scss']
})
export class LifecircleChildComponent extends LifecircleParentComponent implements OnInit {

    readonly title: string = 'lifecircle-child works!';


    constructor() {
        super();
    }

    //   ngOnInit(): void {
    //   }

    initLog(): void {
        console.log('(CC) LifecircleChildComponent.ngOnInit executed.');
    }

}
