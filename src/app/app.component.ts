import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos: Object[] = [];
  
  constructor(http: HttpClient) {
   
    const observable = http.get<Object[]>('http://localhost:3000/flavio/pgfhotos')
    .subscribe(
      photos => this.photos = photos,
      err => console.log(err.message)
      );
  }
}
