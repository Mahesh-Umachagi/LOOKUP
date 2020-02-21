import { Component } from '@angular/core';
import { LookupsService } from './lookups.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private lookupsservice : LookupsService,private router : Router){}


  onLogout(){
    sessionStorage.clear();
    this.router.navigateByUrl('/lookups')
  }
}
