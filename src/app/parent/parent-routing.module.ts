import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleParentPageComponent } from './pages/single-parent-page/single-parent-page.component';

const routes: Routes = [
    {
        path: 'single',
        component: SingleParentPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ParentRoutingModule { }
