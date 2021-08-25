import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { Mycomp1Component } from './mycomp1/mycomp1.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { ProductsComponent } from './mydata/products/products.component';
import { SingleproductComponent } from './mydata/singleproduct/singleproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    MycompComponent,
    Mycomp1Component,
    MyCompComponent,
    ProductsComponent,
    SingleproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
