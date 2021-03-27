import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registrado=true;
  noReg=false;
  password: any;
  email: any;
  surname: any;
  name: any;
  token: any;

  constructor(public restService: RestService, public router: Router, public loadingController: LoadingController) { }

  ngOnInit() {
  }

  registrarse(){
      this.registrado=false;
      this.noReg=true;
    
  }
  crearCuenta(){
    this.restService.register(this.name, this.email, this.password, this.surname).then(async data => {
      console.log(data);
      if(data){
         this.router.navigateByUrl("/usuario-registrado");
        
      }
    })
  }

  changeLogin(){
    this.noReg=false;
    this.registrado=true;
  }

  login(){
    this.restService.login(this.email, this.password).then(data=>{
      console.log(data);
      this.token = data;
      this.restService.setToken(this.token.data.token);
      this.restService.setUserId(this.token.data.id);
      this.restService.setType(this.token.data.type);
      if(this.token.success){
        console.log('Login correcto');
        if(this.token.data.type=="client"){
          this.router.navigateByUrl('/home');
        }else{
          this.router.navigateByUrl('/activate-user');
        }
       }
    });
    
  }

 }
