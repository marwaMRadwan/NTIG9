import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';

const routes: Routes = [

  {path:"test", children:[
    {path:'', component:TestComponent, pathMatch:"full"},
    {path: 'z', component:Test1Component,pathMatch:"full"},
    {path:"zy", component:HomeComponent, pathMatch:"full"}
  
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
