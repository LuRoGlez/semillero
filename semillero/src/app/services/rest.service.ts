import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = 'http://tucanapp.allsites.es/public';
  token: any;

  constructor(private http: HttpClient) { }

  async login(email, password) {
    return await new Promise<any>(resolve => {
      this.http.post(this.apiUrl + '/api/login',
      {
        email: email,
        password: password
      })
        .subscribe(data => {
          this.token = data;
          resolve(data);
        }, err => {
          // console.log(err);
        });
    });
  }

  async register(name, email, password, c_password) {
    return await new Promise(resolve => {
      this.http.post(this.apiUrl + '/api/register',
      {
        name: name,
        email: email,
        password: password,
        c_password: c_password
      })
        .subscribe(data => {
          this.token = data;
          resolve(data);
        }, err => {
          // console.log(err);
        });
    });
  }
}
