import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-single-parent',
    templateUrl: './single-parent.component.html',
    styleUrls: ['./single-parent.component.scss']
})
export class SingleParentComponent {

    @Input() inputText: string = '';
    public readonly title: string = 'single-parent works!!';
    private privateStatus: boolean = false;
    protected protectedNumber: number = 0;


    constructor() { }

    public toggleStatus(): void {
        this.privateStatus = !this.privateStatus;
    }

    public toggleNumber(): void {
        this.protectedNumber = this.protectedNumber ? 0 : 5;
    }

    getNumber(): number {
        return this.protectedNumber;
    }

    getStatus(): boolean {
        return this.privateStatus;
    }

}
