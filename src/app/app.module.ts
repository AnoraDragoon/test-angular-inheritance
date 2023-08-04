import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ManageComponent } from './pages/manage/manage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ManageComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
