import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    // private/public in the constructor parameter turns the parameter into a class property
    constructor(private http: HttpClient) {}
        
        listFromUser(userName: string) {

        return this.http
            .get<Object[]>(API + '/flavio/photos');
        }
}