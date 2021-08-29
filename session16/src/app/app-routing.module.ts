import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RFormComponent } from './myForms/r-form/r-form.component';
import { HomepageComponent } from './pro/homepage/homepage.component';
import { SingleComponent } from './pro/single/single.component';
import { UsersComponent } from './pro/users/users.component';
import { C1Component } from './test/c1/c1.component';

const routes: Routes = [
  {path: "", component:HomepageComponent},
  {path:'c1', component:C1Component},
  {path:'form', component:RFormComponent},
  {path:"users", component:UsersComponent},
  {path:"users/:id", component:SingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
