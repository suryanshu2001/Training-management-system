import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MatDialogModule,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    FormsModule
  ],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  
  trackByFn(index: number, item: any) {
    return index; // or item.id if you have unique identifiers
  }
  

  //code for file upload
  selectedFileNames: { name: string, size: number }[] = [];

  openFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
    console.log('file open')
  }
  
  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;
    // Do something with the selected file(s)
  }

  // handleFileChange(event: Event) {
  //   const fileList = (event.target as HTMLInputElement).files;
  //   if (fileList) {
  //     for (let i = 0; i < fileList.length; i++) {
  //       this.selectedFileNames.push({
  //         name: fileList[i].name,
  //         size: fileList[i].size
  //       });
  //     }
  //   }
  // }

  formatFileSize(size: number): string {
    const units = ['B', 'KB', 'MB', 'GB'];
    let index = 0;
    while (size >= 1024 && index < units.length - 1) {
      size /= 1024;
      index++;
    }
    return `${size.toFixed(2)} ${units[index]}`;
  }

  removeFile(index: number) {
    this.selectedFileNames.splice(index, 1);
  }
}
