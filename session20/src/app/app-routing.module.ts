import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGuardGuard } from './g/my-guard.guard';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},

  {path:"", children:[
    {path:"", component:AboutComponent},
    {path:"about", component:AboutComponent},
    {path:"profile", component:ProfileComponent}
  ], canActivate:[MyGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
