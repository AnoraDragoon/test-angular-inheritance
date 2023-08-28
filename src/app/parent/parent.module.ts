import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { ParentRoutingModule } from './parent-routing.module';
import { SingleParentPageComponent } from './pages/single-parent-page/single-parent-page.component';
import { SingleParentComponent } from './components/single-parent/single-parent.component';
import { ServiceParentPageComponent } from './pages/service-parent-page/service-parent-page.component';
import { ServiceParentComponent } from './components/service-parent/service-parent.component';
import { ServiceDepParentComponent } from './components/service-dep-parent/service-dep-parent.component';


@NgModule({
    declarations: [
        SingleParentPageComponent,
        SingleParentComponent,
        ServiceParentPageComponent,
        ServiceParentComponent,
        ServiceDepParentComponent
    ],
    imports: [
        CommonModule,
        ParentRoutingModule,
        HttpClientModule
    ],
    exports: [
        SingleParentComponent,
        ServiceParentComponent,
        ServiceDepParentComponent
    ]
})
export class ParentModule { }
