import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LookupsService } from '../lookups.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user ={};

  constructor(private lookupsService : LookupsService,
              private router : Router) { }

  ngOnInit() {
  }

  onRegisterClick(){
    console.log(this.user);
    this.lookupsService.registration(this.user)
      .subscribe(
        result =>{
          sessionStorage.setItem('authtoken',result.token);
          this.router.navigateByUrl('/lookups')
        },
        error => {
          console.log(error);
        }
      )
  }
}
