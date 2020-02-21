import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LookupsService {

  private _lookupsurl = "http://localhost:3000/lookups/"
  private _putreviewurl = "http://localhost:3000/lookups/"
  private _registrationurl = "http://localhost:3000/auth/register";
  private _loginurl = "http://localhost:3000/auth/login";

  constructor(private _http : HttpClient) { }

  getLookups(){
    return(this._http.get<any>(this._lookupsurl))
  }

  getLookupDetails(id){
    return(this._http.get<any>(this._lookupsurl+id));
  }

  putReview(id,review){
    return(this._http.put<any>(this._putreviewurl+id,review));
  }

  registration(user){
    return(this._http.post<any>(this._registrationurl,user))
  }

  login(user){
    return(this._http.post<any>(this._loginurl,user));
  }

  isLoggedIn(){
    return !!sessionStorage.getItem('authtoken')
  }
  getToken(){
    
    console.log("Get token : "+sessionStorage.getItem('authtoken'));
      
      return sessionStorage.getItem('authtoken');
     
     }
    
     
    
}
