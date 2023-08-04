import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InheritanceInSelfRoutingModule } from './inheritance-in-self-routing.module';
import { ParentPageComponent } from './pages/parent-page/parent-page.component';
import { ChildPageComponent } from './pages/child-page/child-page.component';
import { CustomChildPageComponent } from './pages/custom-child-page/custom-child-page.component';


@NgModule({
  declarations: [
    ParentPageComponent,
    ChildPageComponent,
    CustomChildPageComponent,
],
  imports: [
    CommonModule,
    InheritanceInSelfRoutingModule,
  ]
})
export class InheritanceInSelfModule { }
