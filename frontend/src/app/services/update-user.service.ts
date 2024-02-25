import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseURL = "http://localhost:3000/api/users";

@Injectable({
    providedIn: 'root'
})
export class UpdateUserService {

    constructor(private http: HttpClient) {
    }


    updateFirstName(firstname: string): Observable<any> {
        return this.http.put(`${baseURL}/firstname`, {firstname: firstname});
    }

    updateLastName(lastname: string): Observable<any> {
        return this.http.put(`${baseURL}/lastname`, {lastname: lastname});
    }

    updateEmail(email: string): Observable<any> {
        return this.http.put(`${baseURL}/email`, {email: email});
    }

    updateUsername(username: string): Observable<any> {
        return this.http.put(`${baseURL}/username`, {username: username});
    }

    changePassword(newPassword: string): Observable<any> {
        return this.http.put(`${baseURL}/password`, {password: newPassword});
    }

    fetchUserData(): Observable<any> {
        return this.http.get(`${baseURL}/userdata`);
    }
}
