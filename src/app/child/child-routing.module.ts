import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildPageComponent } from './pages/child-page/child-page.component';
import { CustomChildPageComponent } from './pages/custom-child-page/custom-child-page.component';
import { ServiceChildPageComponent } from './pages/service-child-page/service-child-page.component';
import { CustomServiceChildPageComponent } from './pages/custom-service-child-page/custom-service-child-page.component';
import { InputOutputChildPageComponent } from './pages/input-output-child-page/input-output-child-page.component';
import { LifecircleChildPageComponent } from './pages/lifecircle-child-page/lifecircle-child-page.component';

const routes: Routes = [
    {
        path: 'single',
        component: ChildPageComponent
    },
    {
        path: 'custom',
        component: CustomChildPageComponent
    },
    {
        path: 'service',
        component: ServiceChildPageComponent
    },
    {
        path: 'custom-service',
        component: CustomServiceChildPageComponent
    },
    {
        path: 'input-output',
        component: InputOutputChildPageComponent
    },
    {
        path: 'lifecircle',
        component: LifecircleChildPageComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
