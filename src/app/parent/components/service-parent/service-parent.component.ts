import { Component, OnInit } from '@angular/core';
import { SingleParentService } from '../../services/single-parent.service';

@Component({
    selector: 'app-service-parent',
    templateUrl: './service-parent.component.html',
    styleUrls: ['./service-parent.component.scss']
})
export class ServiceParentComponent implements OnInit {

    title: string = 'service-parent works!';
    status$ = this.singleParentService.status$;


    constructor(protected singleParentService: SingleParentService) { }

    ngOnInit(): void {
    }

    setStatusCero(): void {
        this.singleParentService.setStatus(0);
    }
}
