import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from './child-routing.module';
import { CustomChildComponent } from './components/custom-child/custom-child.component';
import { ChildComponent } from './components/child/child.component';
import { CustomChildPageComponent } from './pages/custom-child-page/custom-child-page.component';
import { ChildPageComponent } from './pages/child-page/child-page.component';
import { ParentModule } from '../parent/parent.module';
import { ServiceChildPageComponent } from './pages/service-child-page/service-child-page.component';
import { CustomServiceChildPageComponent } from './pages/custom-service-child-page/custom-service-child-page.component';
import { CustomServiceChildComponent } from './components/custom-service-child/custom-service-child.component';
import { InputOutputChildComponent } from './components/input-output-child/input-output-child.component';
import { InputOutputChildPageComponent } from './pages/input-output-child-page/input-output-child-page.component';
import { FormsModule } from '@angular/forms';
import { LifecircleChildPageComponent } from './pages/lifecircle-child-page/lifecircle-child-page.component';
import { LifecircleChildComponent } from './components/lifecircle-child/lifecircle-child.component';


@NgModule({
    declarations: [
        ChildPageComponent,
        CustomChildPageComponent,
        ChildComponent,
        CustomChildComponent,
        ServiceChildPageComponent,
        CustomServiceChildPageComponent,
        CustomServiceChildComponent,
        InputOutputChildComponent,
        InputOutputChildPageComponent,
        LifecircleChildPageComponent,
        LifecircleChildComponent
    ],
    imports: [
        CommonModule,
        ChildRoutingModule,
        ParentModule,
        FormsModule
    ]
})
export class ChildModule { }
