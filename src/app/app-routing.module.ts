import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ManageComponent } from './pages/manage/manage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    { path: 'manage', component: ManageComponent },
    { path: 'self', loadChildren: () => import('./inheritance-in-self/inheritance-in-self.module').then(m=> m.InheritanceInSelfModule)},
    { path: 'library', loadChildren: () => import('./inheritance-from-library/inheritance-from-library.module').then(m=> m.InheritanceFromLibraryModule)},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
