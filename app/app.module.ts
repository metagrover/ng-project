import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { FORM_DIRECTIVES, FORM_PROVIDERS } from '@angular/common';

import { routing } from './app.routing';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form.component';
import { PostsComponent } from './posts/posts.component';

import { UserService } from './users/user.service';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        UsersComponent,
        UserFormComponent,
        PostsComponent,
        FORM_DIRECTIVES
    ],
    providers: [
        UserService,
        FORM_PROVIDERS
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
