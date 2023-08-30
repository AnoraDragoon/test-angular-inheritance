import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-viewchild-parent',
    templateUrl: './viewchild-parent.component.html',
    styleUrls: ['./viewchild-parent.component.scss']
})
export class ViewchildParentComponent implements OnInit {

    public readonly title: string = 'viewchild-parent works!';
    public num: number = 10;

    constructor() { }

    ngOnInit(): void {
    }

    setNumber(num: number): void {
        this.num = num;
    }
}
