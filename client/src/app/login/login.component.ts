import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LookupsService } from '../lookups.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {};

  constructor(private lookupsservice : LookupsService,private router : Router) { }

  ngOnInit() {
  }

  onLoginClick(){
    this.lookupsservice.login(this.user)
      .subscribe(
        result=>{
          sessionStorage.setItem('authtoken',result.token);
          this.router.navigateByUrl('/lookups');
        },
      )

  }

}
