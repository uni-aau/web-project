import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseURL = "http://localhost:3000/api/users"

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  constructor(private http: HttpClient) {
  }


  updateFirstName(firstname: string): Observable<any> {
    return this.http.put(`${baseURL}/firstname`, firstname);
  }
}
