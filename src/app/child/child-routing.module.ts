import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildPageComponent } from './pages/child-page/child-page.component';
import { CustomChildPageComponent } from './pages/custom-child-page/custom-child-page.component';
import { ServiceChildPageComponent } from './pages/service-child-page/service-child-page.component';

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
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
