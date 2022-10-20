import { Component } from '@angular/core';
import { LikesService } from './likes.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FullScreenComponent } from './full-screen/full-screen.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public cats: string[] = [
    'https://images.wallpaperscraft.ru/image/single/kot_morda_vzglyad_pyatnistyj_104633_1280x960.jpg',
    'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1626602411112-10742f9a3ab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    'https://images.unsplash.com/photo-1482066490729-6f26115b60dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1114&q=80'
  ];

  constructor(public likesService: LikesService,
    public matDialog: MatDialog) { }

  public isLiked(cat: string) {
    return this.likesService.isLiked(cat);
  }

  public like(cat: string) {
    this.likesService.toggle(cat);
  }

  public openInFullScreen(cat: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "full-screen";
    dialogConfig.height = "window.screen.height";
    dialogConfig.width = "window.screen.height";
    dialogConfig.data = cat;
    this.matDialog.open(FullScreenComponent, dialogConfig);
  }

}
