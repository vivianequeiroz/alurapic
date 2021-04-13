import { PhotoService } from '../photo/photo.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver {

    constuctor(private service: PhotoService) {}
}