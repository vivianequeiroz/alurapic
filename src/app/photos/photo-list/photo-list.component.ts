import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../photo/photo.service';
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
  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
  
    const userName = this.activatedRoute.snapshot.params.userName;
    this.photoService
      .listFromUser(userName)
      .subscribe(photos => this.photos = photos);
  }
}
