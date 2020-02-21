import { Component, OnInit } from '@angular/core';
import { LookupsService } from '../lookups.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

  lookup;
  review ={};
  id;
  private lookupdetailsurl = "/lookupdetails/"
  constructor( private lookupservice : LookupsService,private _activatedroute : ActivatedRoute,private router:Router) { }

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


  onReviewSubmit(){

     
    console.log(this.review);
    this.lookupservice.putReview(this.lookup.lookupid,this.review)
      .subscribe(
        result =>{
          this.lookupservice.getLookupDetails(this.lookup.lookupid)
            .subscribe(
              result =>{
                this.lookup = result;
                 this.router.navigateByUrl(this.lookupdetailsurl+this.lookup.lookupid);
              },
              error =>{
                console.log(error);
              }
            )
        },
        error =>{
          console.log(error);
        }
      )
      // this.router.navigate(['/lookupdetails/lookupid']) 
  }
     
  
}
