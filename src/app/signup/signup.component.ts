import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CormentisService } from '../cormentis.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private cormentisservice: CormentisService) { }
  signupForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl(''),
    pwd: new FormControl(''),
  });

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pwd : ['', Validators.required]
    })
  }

  signUp() {
    if (this.signupForm.invalid) {
      return
    }
    else {
      this.cormentisservice.createUser(this.signupForm.value).subscribe(data=>{
        let resp = JSON.parse(JSON.stringify(data));
         console.log(`sign up service responded ith data : ${JSON.stringify(resp)}`);
         if(resp.status == 'success')
           this.router.navigate(['/main']);
         else if(resp.status == 'fail') 
            alert(resp.errorMessage);
         
       })
    }
   // console.log(this.signupForm.value);
  //  alert("Employee Record inserted successfully...!");
  }
}
