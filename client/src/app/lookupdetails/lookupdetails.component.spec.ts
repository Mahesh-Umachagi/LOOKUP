import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupdetailsComponent } from './lookupdetails.component';

describe('LookupdetailsComponent', () => {
  let component: LookupdetailsComponent;
  let fixture: ComponentFixture<LookupdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
