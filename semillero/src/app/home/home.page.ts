import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  token= this.restService.token;
  userId = this.restService.getUserId();
  actived= this.restService.getActived();
  users: any[];
  

  
  
  constructor(public restService: RestService,
              public router: Router,
              private http: HttpClient) {this.getUsers()}

  ngOnInit(){}
 men(){
   console.log(this.actived)
 }

 getUsers(){
  this.restService.getUsers()
     .then((res: any) => {
       if(res.success){
       this.users=res.data;
       console.log(this.users);
     }
  },
    (error)=>{
      console.error(error);
    }
  );
}
  
}
