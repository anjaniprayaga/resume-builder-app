import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPopupContentComponent } from './login-popup-content/login-popup-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { SignupPopupContentComponent } from './signup-popup-content/signup-popup-content.component';
import { ResumeContentComponent } from './resume-content/resume-content.component';
import { FormsModule } from '@angular/forms';
import { Theme1Component } from './theme1/theme1.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPopupContentComponent,
    SignupPopupContentComponent,
    ResumeContentComponent,
    Theme1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
