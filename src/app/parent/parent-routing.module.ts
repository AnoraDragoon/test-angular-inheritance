import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleParentPageComponent } from './pages/single-parent-page/single-parent-page.component';
import { ServiceParentPageComponent } from './pages/service-parent-page/service-parent-page.component';

const routes: Routes = [
    {
        path: 'single',
        component: SingleParentPageComponent
    },
    {
        path: 'service',
        component: ServiceParentPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ParentRoutingModule { }
