import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import{RoutingModule} from './routing/routing.module'
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ProfilesService } from './services/profiles.service';
import { MyProfilesComponent } from './my-profiles/my-profiles.component';
import { ReposComponent } from './repos/repos.component';
import { SearchComponent } from './search/search.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyProfilesComponent,
    ReposComponent,
    SearchComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
