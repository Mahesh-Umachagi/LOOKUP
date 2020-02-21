import { Component, OnInit } from '@angular/core';
import { LookupsService } from '../lookups.service';

@Component({
  selector: 'app-lookups',
  templateUrl: './lookups.component.html',
  styleUrls: ['./lookups.component.css']
})
export class LookupsComponent implements OnInit {

  lookup;

  constructor(private _lookupservice : LookupsService) { }

  ngOnInit() {


    this._lookupservice.getLookups()
    .subscribe(
      result =>{
        console.log(result);
        this.lookup = result;
      },
      error =>{
        console.log(error);
      }
    )
  }

}
