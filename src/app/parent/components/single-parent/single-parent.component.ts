import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-parent',
  templateUrl: './single-parent.component.html',
  styleUrls: ['./single-parent.component.scss']
})
export class SingleParentComponent implements OnInit {

    @Input() inputText: string = '';
    public readonly title: string = 'single-parent works!!'
    private privateStatus: boolean = false;
    protected protectedNumber: number = 0;


    constructor() { }

    ngOnInit(): void {
        console.log('Init ParentComponent');
    }

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
