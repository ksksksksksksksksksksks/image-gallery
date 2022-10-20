import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.scss']
})
export class FullScreenComponent {

  public cat: string = '';

  constructor(public dialogRef: MatDialogRef<FullScreenComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.cat = this.data;
  }

  public close() {
    this.dialogRef.close();
  }

}
