import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Photo } from "./photo";


const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    // private/public in the constructor parameter turns the parameter into a class property
    constructor(private http: HttpClient) {}
        
        listFromUser(userName: string) {
          return this.http
            .get<Photo[]>(API + '/' +  userName + '/photos');
        }

        listFromUserPaginated(userName: string, page: number) {
          const params = new HttpParams()
              .append('page', page.toString());
      
          return this.http
              .get<Photo[]>(API + '/' + userName + '/photos', { params: params });
      }
}