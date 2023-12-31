import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-single-page',
  templateUrl: './single-parent-page.component.html',
  styleUrls: ['./single-parent-page.component.scss']
})
export class SingleParentPageComponent implements OnInit {

    readonly title: string = 'single-parent-page';
    status: boolean = false;


    constructor() { }

    ngOnInit(): void {
        console.log(this.getLog());
    }

    toggleStatus(): void {
        this.status = !this.status;
    }

    getLog(): string {
        return `Init ${this.title}`;
    }
}
