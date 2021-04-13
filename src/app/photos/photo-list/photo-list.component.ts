import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from 'src/app/photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  // properties
  photos: Photo[] = [];
  filter: string = '';
  
  //only for dependency injection
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.photos = this.activatedRoute.snapshot.data.photos;
  }
}
