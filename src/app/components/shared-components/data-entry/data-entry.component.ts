import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import { NgModel } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderCompComponent } from "../header-comp/header-comp.component";
import { FileUploadComponent } from '../modals/file-upload/file-upload.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
    selector: 'app-data-entry',
    standalone: true,
    templateUrl: './data-entry.component.html',
    styleUrls: ['./data-entry.component.scss'],
    imports: [CommonModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatNativeDateModule, MatIconModule, MatButtonModule, FormsModule, MatTooltipModule, MatGridListModule, MatToolbarModule, HeaderCompComponent,FileUploadComponent]
})

export class DataEntryComponent{
  showTableHeader = false;
  formdata={
    examName:'',
    totalMarks:'',
    datepick:'',
    time:''
  }
 
    @Input() title!:string;
    @Input() toggle :boolean= false;

  onClick() {
    this.showTableHeader = !this.showTableHeader;
    
  }
  onSubmit(form:NgForm){
  }
  
  
  constructor(public dialog: MatDialog) {}

    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
      this.dialog.open(FileUploadComponent, {
        height: 'auto',
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }


  }

  // isValidTime(regex:string){
  //   const eregex = /^(1[012]|0[1-9]):[0-5][0-9] (AM|PM)$/;
  //   return eregex.test(this.formdata.time);
  //   }
