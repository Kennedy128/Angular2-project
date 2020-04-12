import { Component, OnInit } from '@angular/core';
import{Users} from '../users';
import { Repos } from '../repos';
import { ProfilesService } from '../services/profiles.service';
import{HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
  providers:[ProfilesService]
})
export class ReposComponent implements OnInit {
  public username ='Kennedy128';
  repos:Repos;
  users:Users;

  constructor(private profilesService:ProfilesService,public repositoryService:ProfilesService) { }

  ngOnInit(): void {
    this.profilesService.getProfileInfo(this.username);
    this.users = this.profilesService.users;

    this.repositoryService.getProfileRepo(this.username);
    this.repos = this.repositoryService.repos;

}

  }


