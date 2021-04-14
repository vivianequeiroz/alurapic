import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from 'src/app/photos/photo/photo';
import { PhotoService } from 'src/app/photos/photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  // properties
  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';
  
  //only for dependency injection
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
    ) { }
  
  ngOnInit(): void {
    
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }


  load() {
    this.photoService
        .listFromUserPaginated(this.userName, ++this.currentPage)
        .subscribe(photos => {
            this.photos = this.photos.concat(photos);
            if(!photos.length) this.hasMore = false;
        });
  }
}