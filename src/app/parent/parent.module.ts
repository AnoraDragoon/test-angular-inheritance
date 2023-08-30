import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { ParentRoutingModule } from './parent-routing.module';
import { SingleParentPageComponent } from './pages/single-parent-page/single-parent-page.component';
import { SingleParentComponent } from './components/single-parent/single-parent.component';
import { ServiceParentPageComponent } from './pages/service-parent-page/service-parent-page.component';
import { ServiceParentComponent } from './components/service-parent/service-parent.component';
import { ServiceDepParentComponent } from './components/service-dep-parent/service-dep-parent.component';
import { InputOutputPageComponent } from './pages/input-output-page/input-output-page.component';
import { InputOutputParentComponent } from './components/input-output-parent/input-output-parent.component';
import { FormsModule } from '@angular/forms';
import { LifecircleParentComponent } from './components/lifecircle-parent/lifecircle-parent.component';
import { LifecircleParentPageComponent } from './pages/lifecircle-parent-page/lifecircle-parent-page.component';


@NgModule({
    declarations: [
        SingleParentPageComponent,
        SingleParentComponent,
        ServiceParentPageComponent,
        ServiceParentComponent,
        ServiceDepParentComponent,
        InputOutputPageComponent,
        InputOutputParentComponent,
        LifecircleParentComponent,
        LifecircleParentPageComponent
    ],
    imports: [
        CommonModule,
        ParentRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    exports: [
        SingleParentComponent,
        ServiceParentComponent,
        ServiceDepParentComponent,
        InputOutputParentComponent,
        LifecircleParentComponent
    ]
})
export class ParentModule { }
