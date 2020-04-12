import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import { Users } from '../users';
import { Repos } from '../repos';


@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  repos: Repos;
   users: Users;
   repo;

   constructor(private http:HttpClient) { 
    this.users = new Users('','','',0,'','','','','','',new Date());
    this.repos = new Repos('','','',new Date(),new Date(),'');
  }
  getProfileInfo(username){
    interface ApiResponse{
      name:string;
      login:string;
      avatar_url:string;
      public_repos:number;
      followers:string;
      following:string;
      email:string;
      location:string;
      html_url:string;
      repos_url:string;
      created_at:Date;
      forks:number;

    }
    const promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl + username + environment.apikey).toPromise().then(response => {

        this.users.name=response.name;
        this.users.login=response.login;
        this.users.avatar_url=response.avatar_url;
        this.users.public_repos=response.public_repos;
        this.users.followers=response.followers;
        this.users.following=response.following;
        this.users.email=response.email;
        this.users.location=response.location;
        this.users.html_url=response.html_url;
        this.users.repos_url=response.repos_url;
        this.users.created_at=response.created_at;
        resolve()
      },



    )
  })

  return promise;

}

getProfileRepo(username){
  interface ApiResponse{
    name:string;
    description:string;
    html_url:string;
    created_at:Date;
    updated_at:Date;
    homepage:string;

  }
  const promise =new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>(environment.apiUrl + username +  environment.repoapikey).toPromise().then(response => {
  this.users=new Users('','','',0,'','','','','','',new Date());
      this.repo=response;


      resolve()
    },



  )
})

return promise;
}
}
