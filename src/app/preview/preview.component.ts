import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FullScreenComponent } from '../full-screen/full-screen.component';
import { LikesService } from '../likes.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewComponent {

  @Input() cat!: string;

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
