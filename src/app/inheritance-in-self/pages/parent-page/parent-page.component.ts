import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parent-page',
    templateUrl: './parent-page.component.html',
    styleUrls: ['./parent-page.component.scss']
})
export class ParentPageComponent implements OnInit {

    status: boolean = false;


    constructor() { }

    ngOnInit(): void {
        console.log('Init ParentPageComponent');
    }

    toggleStatus(): void {
        this.status = !this.status;
    }
}
