import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildPageComponent } from './pages/child-page/child-page.component';
import { CustomChildPageComponent } from './pages/custom-child-page/custom-child-page.component';

const routes: Routes = [
    {
        path: 'single',
        component: ChildPageComponent
    },
    {
        path: 'custom',
        component: CustomChildPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }
