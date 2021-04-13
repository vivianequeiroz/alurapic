import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
// import { PhotoService } from './photo/photo.service';
// import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PhotosModule, 
    AppRoutingModule,
    ErrorsModule
  ],
  providers: [ 

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
