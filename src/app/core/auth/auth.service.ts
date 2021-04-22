import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

const API_URL = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

    authenticate(userName: string, password: string) {

      return this.http
        .post(
          API_URL + '/user/login', 
          { userName, password }, 
          { observe: 'response'} 
        )
        .pipe(tap(res => {
          const authToken = res.headers.get('x-acess-token');
          console.log(`User ${userName} authenticated with token ${authToken}`);
        }))
    }
   
}
