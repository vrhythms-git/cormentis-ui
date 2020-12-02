import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CormentisService } from '../cormentis.service';
import { BrowserModule, Meta } from '@angular/platform-browser';

import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, 
    private cormentisservice: CormentisService,
    private metaService:Meta,
    private authService: SocialAuthService
    ) { }
  signInForm = new FormGroup({
    email: new FormControl(''),
    pwd: new FormControl(''),
  });

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', Validators.required]
    })
    this.metaService.addTag( { name:'google-signin-client_id',content:"375538955820-4069j1gjuav1vikavdr6gc02bea1585g.apps.googleusercontent.com"});
    this.metaService.addTag( { name:'google-site-verification',content:"PMFCCWMDhawL2bB5-HD7raMAHQXA0-S9RJ9kQR3vRjI"});
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  // signInWithGoogle(googleUser:any) {
  //   //alert('signInWithGoogle button pressed!')
  //   let profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }

 

  signIn() {
    if (this.signInForm.invalid) {
      return
    }
    else {
      this.cormentisservice.userSignIn(this.signInForm.value).subscribe(data => {
        let resp = JSON.parse(JSON.stringify(data));
        console.log(`sign in service responded ith data : ${JSON.stringify(resp)}`);
        if (resp.status == 'success')
          this.router.navigate(['/main']);
        else if (resp.status == 'fail')
          alert(resp.errorMessage);

      })
    }
  }
}
