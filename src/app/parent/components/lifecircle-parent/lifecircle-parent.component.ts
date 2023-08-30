import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-lifecircle-parent',
    templateUrl: './lifecircle-parent.component.html',
    styleUrls: ['./lifecircle-parent.component.scss']
})
export class LifecircleParentComponent implements OnInit {

    readonly title: string = 'lifecircle-parent works!';
    @Input() data: string = '';


    constructor() { }

    ngOnChanges(): void {
        console.log('(C) LifecircleParentComponent.ngOnChanges executed.');
    }

    ngOnInit(): void {
        this.initLog();
    }

    ngDoCheck(): void {
        console.log('(C) LifecircleParentComponent.ngDoCheck executed.');
    }

    ngAfterContentInit(): void {
        console.log('(C) LifecircleParentComponent.ngAfterContentInit executed.');
    }

    ngAfterContentChecked(): void {
        console.log('(C) LifecircleParentComponent.ngAfterContentChecked executed.');
    }

    ngAfterViewInit(): void {
        console.log('(C) LifecircleParentComponent.ngAfterViewInit executed.');
    }

    ngAfterViewChecked(): void {
        console.log('(C) LifecircleParentComponent.ngAfterViewChecked executed.');
    }

    ngOnDestroy(): void {
        console.log('(C) LifecircleParentComponent.ngOnDestroy executed.');
    }

    initLog(): void {
        console.log('LifecircleParentComponent.ngOnInit executed.');
    }

}
