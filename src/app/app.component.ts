import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public activeCat = 0;
  public cats: readonly string[] = [
    'https://img3.goodfon.ru/wallpaper/nbig/b/4b/cat-kot-ryzhiy.jpg',
    'https://img4.goodfon.com/wallpaper/nbig/6/4a/kot-koshka-vzgliad-boke.jpg',
    'https://foma.ru/wp-content/uploads/2016/02/8511091946_46c80bd3f5_k-e1454938833900-768x415.jpg'
  ];
}
