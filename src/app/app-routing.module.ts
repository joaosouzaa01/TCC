import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MonteOSeuComponent } from './pages/monte-o-seu/monte-o-seu.component';

const routes: Routes = [
  {path:'monte-o-seu', component: MonteOSeuComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
