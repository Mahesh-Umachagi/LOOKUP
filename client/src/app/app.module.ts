import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LookupsComponent } from './lookups/lookups.component';
import { LookuppanelComponent } from './lookuppanel/lookuppanel.component';
import { LookupdetailsComponent } from './lookupdetails/lookupdetails.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { LookupsService } from './lookups.service';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AddreviewComponent } from './addreview/addreview.component';
import { ReviewpanelComponent } from './reviewpanel/reviewpanel.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LookupsComponent,
    LookuppanelComponent,
    LookupdetailsComponent,
    RegisterComponent,
    LoginComponent,
    AddreviewComponent,
    ReviewpanelComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,LookupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
