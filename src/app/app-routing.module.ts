import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot (routes,{useHash: true}),
    CommonModule
  ]
})
export class AppRoutingModule { }
