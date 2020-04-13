import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from '../app.component';
import { ReposComponent } from '../repos/repos.component';
import { SearchComponent } from '../search/search.component';
import { MyProfilesComponent } from '../my-profiles/my-profiles.component';

const routes:Routes=[
{path:'my-profiles',component:MyProfilesComponent},
{path:'search',component:SearchComponent },
{path:'',redirectTo:'/my-profiles',pathMatch:"full"}


]
@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }