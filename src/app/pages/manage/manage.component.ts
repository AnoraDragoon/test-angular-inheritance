import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TestService } from 'src/app/services/test.service';

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

    public status: boolean = false;
    form: FormGroup = this.fb.group({
        search: '',
        date: '',
    })

    constructor(private testService: TestService, private fb: FormBuilder) { }

    ngOnInit(): void {
    }

    showData(formData: any): void {
        this.status = true;
        console.log(formData);
    }

}
