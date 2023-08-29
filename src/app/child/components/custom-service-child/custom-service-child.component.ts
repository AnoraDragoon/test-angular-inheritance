import { Component } from '@angular/core';
import { CustomSingleChildService } from '../../services/custom-single-child.service';
import { ServiceParentComponent } from 'src/app/parent/components/service-parent/service-parent.component';

@Component({
    selector: 'app-custom-service-child',
    templateUrl: './custom-service-child.component.html',
    styleUrls: ['./custom-service-child.component.scss']
})
export class CustomServiceChildComponent extends ServiceParentComponent {

    readonly title: string = 'custom-service-child works!';


    constructor(
        protected customSingleChildService: CustomSingleChildService
    ) {
        super(customSingleChildService);
    }

}
