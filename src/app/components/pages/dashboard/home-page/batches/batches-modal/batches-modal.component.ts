import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-batches-modal',
  templateUrl: './batches-modal.component.html',
  styleUrls: ['./batches-modal.component.scss']
})
export class BatchesModalComponent {
  constructor(
    public dialogRef: MatDialogRef<BatchesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public topics: string[]
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
