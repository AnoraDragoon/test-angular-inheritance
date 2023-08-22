import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { SingleParentPageComponent } from './pages/single-parent-page/single-parent-page.component';
import { SingleParentComponent } from './components/single-parent/single-parent.component';


@NgModule({
  declarations: [
    SingleParentPageComponent,
    SingleParentComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule
  ],
  exports:[
    SingleParentComponent
  ]
})
export class ParentModule { }
