import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from './child-routing.module';
import { CustomChildComponent } from './components/custom-child/custom-child.component';
import { ChildComponent } from './components/child/child.component';
import { CustomChildPageComponent } from './pages/custom-child-page/custom-child-page.component';
import { ChildPageComponent } from './pages/child-page/child-page.component';
import { ParentModule } from '../parent/parent.module';
import { ServiceChildPageComponent } from './pages/service-child-page/service-child-page.component';


@NgModule({
    declarations: [
        ChildPageComponent,
        CustomChildPageComponent,
        ChildComponent,
        CustomChildComponent,
        ServiceChildPageComponent
    ],
    imports: [
        CommonModule,
        ChildRoutingModule,
        ParentModule
    ]
})
export class ChildModule { }
