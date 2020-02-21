import { Component, OnInit } from '@angular/core';
import { LookupsService } from '../lookups.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lookupdetails',
  templateUrl: './lookupdetails.component.html',
  styleUrls: ['./lookupdetails.component.css']
})
export class LookupdetailsComponent implements OnInit {

  id;
  lookup;
  review = {};

  private addreviewurl = "/addreview/"


  constructor(private _activatedroute : ActivatedRoute,
              private lookupservice : LookupsService,
              private router : Router) { }

  ngOnInit() {
    this.id = this._activatedroute.params.subscribe((params)=>{
      this.id = params.id;
      this.lookupservice.getLookupDetails(this.id)
        .subscribe(
          result =>{
            console.log(result);
            this.lookup = result;
          },
          error =>{
            console.log(error);
          }
        )
    })
  }

  onClick(id){
    this.router.navigateByUrl(this.addreviewurl+this.lookup.lookupid);
  }
}
