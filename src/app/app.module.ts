import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ManageComponent } from './pages/manage/manage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './pages/manage/table/table.component';
import { SearchFormComponent } from './pages/manage/search-form/search-form.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ManageComponent,
        NotFoundComponent,
        TableComponent,
        SearchFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
