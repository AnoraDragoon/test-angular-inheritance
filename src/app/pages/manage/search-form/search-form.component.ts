import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

    @Input() form: FormGroup = new FormGroup({});
    @Output() submit: EventEmitter<any> = new EventEmitter();


    constructor() { }

    ngOnInit(): void {
    }

    onSubmit(): void {
        this.submit.emit(this.form.value);
    }

}
