import { Component, OnInit } from '@angular/core';
import { ServiceParentPageComponent } from 'src/app/parent/pages/service-parent-page/service-parent-page.component';
import { SingleParentService } from 'src/app/parent/services/single-parent.service';
import { StandardDepService } from 'src/app/parent/services/standard-dep.service';
import { Logger } from 'src/app/services/logger.service';

@Component({
    selector: 'app-service-child-page',
    templateUrl: '../../../parent/pages/service-parent-page/service-parent-page.component.html',
    styleUrls: ['../../../parent/pages/service-parent-page/service-parent-page.component.scss']
})
export class ServiceChildPageComponent extends ServiceParentPageComponent implements OnInit {

    constructor(protected logger: Logger, protected singleParentService: SingleParentService, protected standardDepService: StandardDepService) {
        super(logger, singleParentService, standardDepService)
    }

    ngOnInit(): void {
    }

}
