import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LookupsComponent } from './lookups/lookups.component';
import { LookupdetailsComponent } from './lookupdetails/lookupdetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path : '' , component : LookupsComponent
  },
  {
    path : 'about' , component : AboutComponent
  },
  {
    path : 'lookups', component : LookupsComponent
  },
 {
   path : 'lookupdetails/:id',component : LookupdetailsComponent
 },
  {
   path : 'lookupdetails',component : LookupdetailsComponent
 },
 {
   path : 'login', component : LoginComponent
 },
 {
   path : 'register' , component : RegisterComponent
 },
 {
   path : 'addreview/:id' , component : AddreviewComponent,
   canActivate : [AuthGuard]
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
