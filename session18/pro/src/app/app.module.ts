import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DatePipe } from '@angular/common';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'
import { UserInterceptor } from './providers/interceptors/user.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule, HttpClientModule, BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    DatePipe,
    {provide:HTTP_INTERCEPTORS, useClass:UserInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
