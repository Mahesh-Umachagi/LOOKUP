import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookuppanelComponent } from './lookuppanel.component';

describe('LookuppanelComponent', () => {
  let component: LookuppanelComponent;
  let fixture: ComponentFixture<LookuppanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookuppanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookuppanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
