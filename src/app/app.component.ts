import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public activeCat = 0;
  public cats: string[] = [
    'https://images.wallpaperscraft.ru/image/single/kot_morda_vzglyad_pyatnistyj_104633_1280x960.jpg',
    'https://img4.goodfon.com/wallpaper/nbig/6/4a/kot-koshka-vzgliad-boke.jpg',
    'https://images.unsplash.com/photo-1626602411112-10742f9a3ab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  ];
}
