import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/services/logger.service';
import { SingleParentService } from '../../services/single-parent.service';
import { StandardDepService } from '../../services/standard-dep.service';

@Component({
    selector: 'app-service-parent-page',
    templateUrl: './service-parent-page.component.html',
    styleUrls: ['./service-parent-page.component.scss']
})
export class ServiceParentPageComponent implements OnInit {

    readonly title: string = 'service-parent-page';
    status: number = 0;
    depStatus$ = this.standardDepService.status$;
    depStatus: number = 0;

    constructor(
        protected logger: Logger,
        protected singleParentService: SingleParentService,
        protected standardDepService: StandardDepService
    ) { }

    ngOnInit(): void {
        this.singleParentService.status$.subscribe(status => {
            this.status = status;
        });
        this.depStatus$.subscribe(status => { this.depStatus = status });
    }

    toggleStatus(): void {
        switch (this.status) {
            case 0:
                this.singleParentService.setStatus(5);
                break;
            case 5:
                this.singleParentService.setStatus(10);
                break;
            default:
                this.singleParentService.setStatus(0);
                break;
        }
    }

    toggleDepStatus(): void {
        switch (this.depStatus) {
            case 0:
                this.standardDepService.setStatus(1);
                break;
            case 1:
                this.standardDepService.setStatus(2);
                break;
            case 2:
                this.standardDepService.setStatus(4);
                break;
            default:
                this.standardDepService.setStatus(0);
                break;
        }
    }

    generateLog(): void {
        this.logger.log('Log message generated successfully!!!')
    }

}
