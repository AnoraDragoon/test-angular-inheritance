import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lifecircle-parent-page',
    templateUrl: './lifecircle-parent-page.component.html',
    styleUrls: ['./lifecircle-parent-page.component.scss']
})
export class LifecircleParentPageComponent implements OnInit {

    readonly title: string = 'lifecircle-parent-page';
    status: boolean = true;
    name: string = 'admin';


    constructor() { }

    ngOnChanges(): void {
        console.log('LifecircleParentPageComponent.ngOnChanges executed.');
    }

    ngOnInit(): void {
        this.initLog();
    }

    ngDoCheck(): void {
        console.log('LifecircleParentPageComponent.ngDoCheck executed.');
    }

    ngAfterContentInit(): void {
        console.log('LifecircleParentPageComponent.ngAfterContentInit executed.');
    }

    ngAfterContentChecked(): void {
        console.log('LifecircleParentPageComponent.ngAfterContentChecked executed.');
    }

    ngAfterViewInit(): void {
        console.log('LifecircleParentPageComponent.ngAfterViewInit executed.');
    }

    ngAfterViewChecked(): void {
        console.log('LifecircleParentPageComponent.ngAfterViewChecked executed.');
    }

    ngOnDestroy(): void {
        console.log('LifecircleParentPageComponent.ngOnDestroy executed.');
    }

    public toggleStatus(): void {
        this.status = !this.status;
    }

    public toggleName(): void {
        switch (this.name) {
            case 'admin':
                this.name = 'Dragoon';
                break;
            case 'Dragoon':
                this.name = 'game master';
                break;
            default:
                this.name = 'admin';
        }
    }

    initLog(): void {
        console.log('LifecircleParentPageComponent.ngOnInit executed.');
    }
}
