import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PhotosModule, 
    AppRoutingModule,
    ErrorsModule,
    HomeModule,
    CoreModule,
  ],
  providers: [ 

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
