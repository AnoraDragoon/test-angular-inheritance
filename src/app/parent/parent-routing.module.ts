import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleParentPageComponent } from './pages/single-parent-page/single-parent-page.component';
import { ServiceParentPageComponent } from './pages/service-parent-page/service-parent-page.component';
import { InputOutputPageComponent } from './pages/input-output-page/input-output-page.component';
import { LifecircleParentPageComponent } from './pages/lifecircle-parent-page/lifecircle-parent-page.component';

const routes: Routes = [
    {
        path: 'single',
        component: SingleParentPageComponent
    },
    {
        path: 'service',
        component: ServiceParentPageComponent
    },
    {
        path: 'input-output',
        component: InputOutputPageComponent
    },
    {
        path: 'lifecircle',
        component: LifecircleParentPageComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ParentRoutingModule { }
