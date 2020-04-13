import { Component, OnInit } from '@angular/core';
import{Users} from '../users';
import { Repos } from '../repos';
import { ProfilesService } from '../services/profiles.service';
import { Search } from '../search';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  newSearch = new Search('','','',0);
  public username = '';
  repos: Repos;
  users: Users
  submitUser(name){
    this.profilesService.getProfileInfo(name.value);
    this.repositoryService.getProfileRepo(name.value);
  }
  constructor(private profilesService:ProfilesService,public repositoryService:ProfilesService) { }

  ngOnInit()  {
    this.profilesService.getProfileInfo(this.username);
    this.users = this.profilesService.users;

    this.repositoryService.getProfileRepo(this.username);
    this.repos = this.repositoryService.repos;
  }

 


  

  
}
