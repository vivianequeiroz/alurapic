import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoModule } from '../photo/photo.module';
import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoCommentsComponent } from './photos-comments/photo-comments';

@NgModule({
    declarations: [
        PhotoDetailsComponent,
        PhotoCommentsComponent
    ],
    exports: [
        PhotoDetailsComponent,
        PhotoCommentsComponent
    ],
    imports: [
        CommonModule,
        PhotoModule
    ]
})
export class PhotoDetailsModule { }