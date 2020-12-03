import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class CormentisService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

 // private baseURL = "http://localhost:8081/api/";
  private baseURL = "https://cormentis-ui-build.herokuapp.com/api/";
private signupurl =  this.baseURL + "signup";
private signinurl = this.baseURL + "signin";

createUser(data:any): Observable<IUser[]> {

  let payloadJson = {
                        "email": data.email,
                        "password": data.pwd,
                        "displayName": data.fname +" "+data.lname,
                        "photoURL": "http://fake.photo"
                  }	
//"phoneNumber": "+910000000000",
                  console.log('Payload JSON : ' + JSON.stringify(payloadJson));

  return this.http.post<IUser[]>(this.signupurl, payloadJson);
}

  userSignIn(data:any): Observable<IUser[]> {
    
    let payloadJson = {
      "email": data.email,
      "password": data.pwd 
    }
console.log('Attempting to sign in using data : ' + JSON.stringify(payloadJson))
    return this.http.post<IUser[]>(this.signinurl, payloadJson);
  }

}
