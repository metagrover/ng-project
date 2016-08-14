import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';

import { UserService } from './users/user.service';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        HttpModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        UsersComponent,
        PostsComponent
    ],
    providers: [
        UserService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
