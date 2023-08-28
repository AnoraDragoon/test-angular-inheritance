import { Component, OnInit } from '@angular/core';
import { StandardDepService } from '../../services/standard-dep.service';

@Component({
    selector: 'app-service-dep-parent',
    templateUrl: './service-dep-parent.component.html',
    styleUrls: ['./service-dep-parent.component.scss']
})
export class ServiceDepParentComponent {

    title: string = 'service-dep-parent works!';
    depStatus$ = this.standardDepService.status$;


    constructor(protected standardDepService: StandardDepService) { }

    setDepStatusCero(): void {
        this.standardDepService.setStatus(0);
    }

}
