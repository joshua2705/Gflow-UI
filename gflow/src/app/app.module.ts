import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import {MatDividerModule} from '@angular/material/divider';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SigninLoginComponent } from './signin-login/signin-login.component';
import { AuthLoginComponent } from './signin-login/auth-login/auth-login.component';
import { AuthSigninComponent } from './signin-login/auth-signin/auth-signin.component';
import { CitzLoginComponent } from './signin-login/citz-login/citz-login.component';
import { CitzSigninComponent } from './signin-login/citz-signin/citz-signin.component';
import { CitizenHomepageComponent } from './citizen-homepage/citizen-homepage.component';
import { AuthorityHomepageComponent } from './authority-homepage/authority-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LandingPageComponent,
    SigninLoginComponent,
    AuthLoginComponent,
    AuthSigninComponent,
    CitzLoginComponent,
    CitzSigninComponent,
    CitizenHomepageComponent,
    AuthorityHomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
