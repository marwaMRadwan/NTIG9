import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { XComponent,YComponent } from '..';

const routes:Routes=[
  {path:"x", component:XComponent},
  {path:"y", component:YComponent}
]

@NgModule({
  declarations: [XComponent, YComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
