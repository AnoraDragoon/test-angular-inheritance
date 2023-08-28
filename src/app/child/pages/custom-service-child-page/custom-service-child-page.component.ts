import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-custom-service-child-page',
    templateUrl: './custom-service-child-page.component.html',
    styleUrls: ['./custom-service-child-page.component.scss']
})
export class CustomServiceChildPageComponent implements OnInit {

    readonly title: string = 'custom-service-child-page';

    constructor() { }

    ngOnInit(): void {
    }

}
