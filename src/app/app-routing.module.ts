import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignInComponent } from './signin/signin.component';

const routes: Routes = [
  { path:'', component: SignupComponent },
  { path:'main', component:MainpageComponent },
  { path:'signin', component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
