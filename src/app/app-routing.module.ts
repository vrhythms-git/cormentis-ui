import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignInComponent } from './signin/signin.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { WeightageDetailComponent } from './weightage-detail/weightage-detail.component';

const routes: Routes = [
  { path:'', component: SignupComponent },
  { path:'main', component:MainpageComponent },
  { path:'signin', component:SignInComponent},
  { path:'second', component:SecondpageComponent},
  { path:'weightage', component:WeightageDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
