import { Injectable, Injector } from '@angular/core';

import { HttpInterceptor } from '@angular/common/http';
import { LookupsService } from './lookups.service';

import { inject } from '@angular/core/testing';




@Injectable({
  providedIn: 'root'
})



export class TokenInterceptorService  implements HttpInterceptor{



 constructor(private injector : Injector) { }

  intercept(req, next) {
  

  let _auth = this.injector.get(LookupsService);
    let token = _auth.getToken();
 
   let tokenizedReq = req.clone({
 
     setHeaders : {

        Authorization : `Bearer ${_auth.getToken()}`
 
     }
 
   });
 

   return next.handle(tokenizedReq);
  }
}

