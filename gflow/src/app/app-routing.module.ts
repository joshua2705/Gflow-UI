import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthLoginComponent } from './signin-login/auth-login/auth-login.component';
import { AuthSigninComponent } from './signin-login/auth-signin/auth-signin.component';
import { CitzLoginComponent } from './signin-login/citz-login/citz-login.component';
import { CitzSigninComponent } from './signin-login/citz-signin/citz-signin.component';
import { SigninLoginComponent } from './signin-login/signin-login.component';

const routes: Routes = [
  {path:"", component: LandingPageComponent},
  {path:'authentication', component: SigninLoginComponent, 
  children:  [
    {
    path: 'citzSignup',
    component: CitzSigninComponent
    },
    {
    path: 'citzLogin',
    component: CitzLoginComponent
    },
    {
      path: 'authSignup',
      component: AuthSigninComponent
    },
    {
      path: 'authLogin',
      component: AuthLoginComponent
      }
  ]
    },
  {path:'home', component: LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
