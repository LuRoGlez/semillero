import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const headers = new HttpHeaders;
@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = 'http://semillero.allsites.es/public/api';
  token: any;
  tokenLogin: any;
  userId: any;
  actived: any;
  type: any;
  opinionId: any;
  
  

  constructor(private http: HttpClient) { }

  //primera entrega: login, registro y activación usuarios

  login(email:String, password:String) {
    return new Promise((resolve) => {
      this.http
        .post(this.apiUrl + "/login", {
          email: email,
          password: password,
        })
        .subscribe(
          (data) => {
            this.token = data;
            resolve(data);
          },
          (err) => {
            console.log(err);
          }
        );
    });
  }

  async register(name, email, password, surname) {
    return await new Promise(resolve => {
      this.http.post(this.apiUrl + '/register',
      {
        name: name,
        email: email,
        password: password,
        surname: surname
      })
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          console.log(err);
        });
    });
  }

  getUsers(){
    return new Promise((resolve) => {
      this.http.get(this.apiUrl +"/users", {
        headers: new HttpHeaders().set('Authorization','Bearer ' + this.tokenLogin),
      }).subscribe(
        (data)=>{
          console.log(data);
          resolve(data);
        },
        (err) =>{
          console.log(err);
        }
      );
      });
    
    }
    activateUser(user_id:any){
      return new Promise((resolve)=>{
        this.http.post(this.apiUrl + "/activate", {
          user_id: user_id},{
          headers: new HttpHeaders().set('Authorization','Bearer ' + this.tokenLogin),
        })
        .subscribe(
          (data)=>{
            resolve(data);
          },
          (err) => {
            console.log(err);
          }
        );
      });
    }

   
    getOpinions(){
      return new Promise((resolve) => {
        this.http.get(this.apiUrl +"/opinions", {
          headers: new HttpHeaders().set('Authorization','Bearer ' + this.tokenLogin),
        }).subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            console.log(err)
          }
        );
      });
    }

    async giveLike(opinion_id: any, user_id: any) {
      return new Promise<any>((resolve) => {
        this.http.post(this.apiUrl + "/like", {
          user_id: user_id,
          opinion_id: opinion_id,}, {
          headers: new HttpHeaders().set('Authorization','Bearer ' + this.tokenLogin),
        }).subscribe(
          (data) => {
            console.log(data);
            resolve(data);
          },
          (err) => {
            console.log(err)
          }
        );
      });
    }

    getPlagues() {
      return new Promise((resolve) => {
        this.http.get(this.apiUrl + "/plagues", {}).subscribe(
          (data) => {
            console.log(data);
            resolve(data);
           
          },
          (err) => {
            console.log(err);
          }
        );
      });
    }

    getProductos(){
      return new Promise((resolve) => {
        this.http.get(this.apiUrl +"/products", {
          headers: new HttpHeaders().set('Authorization','Bearer ' + this.tokenLogin),
        }).subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            console.log(err)
          }
        );
      });
    }
     

     //getters and setters
  setToken(valor: any){
    this.tokenLogin= valor;
  }

  getToken(){
    return this.tokenLogin;
  }


  
  setUserId(valor: any){

    this.userId=valor;
  }
  getUserId(){
    return this.userId;
  }

  setActived(valor: any){
    this.actived=valor;
  }

  getActived(){
    return this.actived;
  }
  setType(valor: any){
    this.type=valor;
  }

  getType(){
    return this.type;
  }

  setOpinionId(valor: any){

    this.opinionId=valor;
  }

  getOpinionId(){

    return this.opinionId;
  }



}
