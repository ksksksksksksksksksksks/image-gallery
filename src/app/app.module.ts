import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CarouselDirective } from './carousel.directive';
import { LikesService } from './likes.service';


@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    CarouselDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    CommonModule,
    MatButtonModule
  ],
  providers: [ LikesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
