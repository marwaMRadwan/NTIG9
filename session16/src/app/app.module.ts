import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { C1Component } from './test/c1/c1.component';
import { C2Component } from './test/c2/c2.component';
import { C3Component } from './test/c3/c3.component';
import { NavbarComponent } from './pro/navbar/navbar.component';
import { HomepageComponent } from './pro/homepage/homepage.component';
import { RFormComponent } from './myForms/r-form/r-form.component';
import { UsersComponent } from './pro/users/users.component';
import { SingleComponent } from './pro/single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    NavbarComponent,
    HomepageComponent,
    RFormComponent,
    UsersComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
