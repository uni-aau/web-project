import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(usernameOrEmail: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/api/auth/login', { username: usernameOrEmail, email: usernameOrEmail, password });
  }

  register(firstname:string, lastname:string, username:string, email:string, password:string){
    return this.http.post('http://localhost:3000/api/auth/register', { firstname:firstname, lastname:lastname, username:username, email:email, password:password });
  }

  changePassword(email:string, oldPassword: string, newPassword: string){
    return this.http.post('http://localhost:3000/api/auth/password', {email: email, oldPassword:oldPassword, newPassword: newPassword})
  }

  getIsAdmin() {
    return localStorage.getItem('isAdmin');
  }

  isGuest():boolean{
    return !localStorage.getItem('authToken')
  }

  getRole():string{
    if(!localStorage.getItem('authToken')){
      return "guest"
    }else{
      if(this.getIsAdmin()){
        return "admin"
      }else {
        return "user"
      }
    }
  }
}
