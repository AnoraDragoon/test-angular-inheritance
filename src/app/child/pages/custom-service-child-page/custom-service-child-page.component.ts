import { Component, OnInit } from '@angular/core';
import { ServiceParentPageComponent } from 'src/app/parent/pages/service-parent-page/service-parent-page.component';
import { Logger } from 'src/app/services/logger.service';
import { StandardDepChildService } from '../../services/standard-dep-child.service';
import { CustomSingleChildService } from '../../services/custom-single-child.service';

@Component({
    selector: 'app-custom-service-child-page',
    templateUrl: './custom-service-child-page.component.html',
    styleUrls: ['./custom-service-child-page.component.scss']
})
export class CustomServiceChildPageComponent extends ServiceParentPageComponent implements OnInit {

    readonly title: string = 'custom-service-child-page';


    constructor(
        protected logger: Logger,
        protected customSingleChildService: CustomSingleChildService,
        protected standardDepChildService: StandardDepChildService
    ) {
        super(logger, customSingleChildService, standardDepChildService);
    }

    ngOnInit(): void {
        super.ngOnInit();
    }

}
