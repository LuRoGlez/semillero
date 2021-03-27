import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.page.html',
  styleUrls: ['./activate-user.page.scss'],
})
export class ActivateUserPage implements OnInit {
  users: any[];

  constructor(public restService: RestService) { 
    this.getUsers();
  }

  ngOnInit() {
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

  Activate(valor:any){
    this.restService.activateUser(valor)
    .then((res:any)=>
  {if(res.success){
   console.log(res);
   this.getUsers();
  }
},
    (error)=>{
      console.error(error);
    }
    );
    }

}
