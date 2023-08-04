import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildPageComponent } from './pages/child-page/child-page.component';
import { CustomChildPageComponent } from './pages/custom-child-page/custom-child-page.component';
import { ParentPageComponent } from './pages/parent-page/parent-page.component';

const routes: Routes = [
    { path: 'parent', component: ParentPageComponent },
    { path: 'child', component: ChildPageComponent },
    { path: 'custom', component: CustomChildPageComponent },
    { path: '', redirectTo: 'child', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InheritanceInSelfRoutingModule { }
