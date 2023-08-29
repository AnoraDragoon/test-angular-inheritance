import { Component, OnInit } from '@angular/core';
import { IParentUserModel } from '../../models/parent-user.model';
import { USER } from '../../models/parent-user.mock';

@Component({
    selector: 'app-input-output-page',
    templateUrl: './input-output-page.component.html',
    styleUrls: ['./input-output-page.component.scss']
})
export class InputOutputPageComponent {

    readonly title: string = 'input-output-page';

    user: IParentUserModel | null = null;


    constructor() { }

    loadUser(): void {
        this.user = USER;
    }

    updateUserName($event: IParentUserModel): void {
        if (this.user) {
            this.user.name = $event.name;
        }
        console.log($event);
    }

}
