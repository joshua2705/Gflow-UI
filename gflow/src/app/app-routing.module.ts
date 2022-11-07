import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SigninLoginComponent } from './signin-login/signin-login.component';

const routes: Routes = [
  {path:"", component: LandingPageComponent},
  {path:'auth', component: SigninLoginComponent},
  {path:'home', component: LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
