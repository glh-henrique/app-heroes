import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GenerateUrlImageService } from 'src/shared/services/generate-url-image.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  defaultDescription: string;
  constructor(
    public generateUrlImageService: GenerateUrlImageService,
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public hero: any
  ) {
    this.defaultDescription =
      'This hero\'s story was lost when Thanos attacked Xandar';
  }
  ngOnInit() {
    console.log(this.hero);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
