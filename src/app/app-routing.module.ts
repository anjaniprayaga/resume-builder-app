import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeContentComponent } from './resume-content/resume-content.component';
import { HomePageComponent } from 'src/home-page/home-page.component';
import { Theme1Component } from './theme1/theme1.component';
import { LoginPopupContentComponent } from './login-popup-content/login-popup-content.component';

const routes: Routes = [
  {path:'app-resume-content',component: ResumeContentComponent},
  {path:'app-home-page', component:HomePageComponent},
  {path:'app-theme1',component:Theme1Component},
  // {path:'app-login-popup-content', component:LoginPopupContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
