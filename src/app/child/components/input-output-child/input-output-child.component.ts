import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IChildUserModel } from '../../models/child-user.model';
import { InputOutputParentComponent } from 'src/app/parent/components/input-output-parent/input-output-parent.component';
import { IParentUserModel } from 'src/app/parent/models/parent-user.model';

@Component({
    selector: 'app-input-output-child',
    templateUrl: './input-output-child.component.html',
    styleUrls: ['./input-output-child.component.scss']
})
export class InputOutputChildComponent extends InputOutputParentComponent {

    readonly title: string = 'input-output-child works!';
    @Input() componentUser: IChildUserModel | null = null;
    @Output() changeUserName: EventEmitter<IChildUserModel | IParentUserModel> = new EventEmitter();


    constructor() {
        super();
    }

    emitUserName(): void {
        let user: IChildUserModel = {
            id: 1,
            name: this.userName,
            email: '',
            date: new Date(),
            status: false
        };
        this.changeUserName.emit(user);
    }

}
