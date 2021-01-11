import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {BoardModeratorComponent} from "./board-moderator/board-moderator.component";
import {BoardAdminComponent} from "./board-admin/board-admin.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BoardUserComponent} from "./board-user/board-user.component";
import {RegisterComponent} from "./register/register.component";
import {authInterceptorProviders} from "./_helpers/auth.interceptor";
import { ProductComponent } from './product/product.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
