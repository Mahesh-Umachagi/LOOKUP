import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lookuppanel',
  templateUrl: './lookuppanel.component.html',
  styleUrls: ['./lookuppanel.component.css']
})
export class LookuppanelComponent implements OnInit {

  @Input('lookup') lookup;

  private lookupdetailsurl = "/lookupdetails/"

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  onLookupClick(){
    console.log(this.lookup.lookupid);
    this._router.navigateByUrl(this.lookupdetailsurl+this.lookup.lookupid);
  }

}
