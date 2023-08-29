import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IParentUserModel } from '../../models/parent-user.model';

@Component({
    selector: 'app-input-output-parent',
    templateUrl: './input-output-parent.component.html',
    styleUrls: ['./input-output-parent.component.scss']
})
export class InputOutputParentComponent {

    readonly title: string = 'input-output-parent works!';
    @Input() componentUser: IParentUserModel | null = null;
    @Output() changeUserName: EventEmitter<IParentUserModel> = new EventEmitter();
    userName: string = '';


    constructor() { }

    emitUserName(): void {
        let user: IParentUserModel = {
            id: 1,
            name: this.userName,
            email: '',
            date: new Date()
        };
        this.changeUserName.emit(user);
    }

}
