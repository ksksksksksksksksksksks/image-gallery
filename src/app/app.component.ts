import { Component } from '@angular/core';
import { LikesService } from './likes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public activeCat = 0;
  public cats: string[] = [
    'https://images.wallpaperscraft.ru/image/single/kot_morda_vzglyad_pyatnistyj_104633_1280x960.jpg',
    'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1626602411112-10742f9a3ab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    'https://images.unsplash.com/photo-1482066490729-6f26115b60dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1114&q=80'
  ];
  // public isLiked: boolean = false;

  constructor(public likesService: LikesService) {
    // this.likesService.getContent(this.cats);
  }

  fullScreen() {
  }

  isLiked(cat: string) {
    return this.likesService.isLiked(cat);
  }

  like(cat: string) {
    this.likesService.toggle(cat);
  }
}
