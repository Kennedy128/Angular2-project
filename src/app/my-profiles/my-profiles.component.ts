import { Component, OnInit } from '@angular/core';
import { Users} from '../users';
import { Repos } from '../repos';
import { HttpClient} from '@angular/common/http';
import { ProfilesService } from '../services/profiles.service';

@Component({
  selector: 'app-my-profiles',
  templateUrl: './my-profiles.component.html',
  styleUrls: ['./my-profiles.component.css'],
  providers: [ProfilesService]
})
export class MyProfilesComponent implements OnInit {
  public username = 'Kennedy128';
  repos: Repos;
  users: Users

  constructor(private profilesService:ProfilesService,public repositoryService:ProfilesService) { }

  ngOnInit() {
    this.profilesService.getProfileInfo(this.username);
      this.users = this.profilesService.users;

      this.repositoryService.getProfileRepo(this.username);
      this.repos = this.repositoryService.repos;
  }


}
