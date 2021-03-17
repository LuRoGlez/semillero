import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registrado=true;
  noReg=false;
  password = new FormControl('');
  email = new FormControl('');
  c_password = new FormControl('');
  name = new FormControl('');
  token: any;

  constructor(public restService: RestService, public router: Router) { }

  ngOnInit() {
  }

  registrarse(){
      this.registrado=false;
      this.noReg=true;
    
  }
  crearCuenta(){
    this.restService.register(this.name.value, this.email.value, this.password.value, this.c_password.value).then(data=>{
      this.token = data
      if (this.restService.token.success.token != null){
        this.router.navigate(['/home']);
      }
    })
  }

  changeLogin(){
    this.noReg=false;
    this.registrado=true;
  }

  login(){
    this.restService.login(this.email.value, this.password.value).then(data=>{
      this.token = data;
      if (this.restService.token.success.token != null){
        this.router.navigate(['/home']);
      }
    })
    
  }
}
