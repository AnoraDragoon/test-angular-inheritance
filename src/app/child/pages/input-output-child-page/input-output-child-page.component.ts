import { Component, OnInit } from '@angular/core';
import { InputOutputPageComponent } from 'src/app/parent/pages/input-output-page/input-output-page.component';
import { IChildUserModel } from '../../models/child-user.model';
import { USER } from '../../models/child-user.mock';

@Component({
    selector: 'app-input-output-child-page',
    templateUrl: './input-output-child-page.component.html',
    styleUrls: ['./input-output-child-page.component.scss']
})
export class InputOutputChildPageComponent extends InputOutputPageComponent {

    readonly title: string = 'input-output-child-page';
    user: IChildUserModel | null = null;

    constructor() {
        super();
    }

    ngOnInit(): void {
    }

    loadUser(): void {
        this.user = USER;
    }

}
