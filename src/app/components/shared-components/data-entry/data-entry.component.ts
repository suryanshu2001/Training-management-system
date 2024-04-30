import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-data-entry',
    standalone: true,
    templateUrl: './data-entry.component.html',
    styleUrls: ['./data-entry.component.scss'],
    imports: [CommonModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatNativeDateModule, MatIconModule, MatButtonModule, FormsModule, MatTooltipModule, MatGridListModule, MatToolbarModule, HeaderCompComponent,FileUploadComponent]
})

export class DataEntryComponent{
  // showTableHeader = false;
  @Output() showTable: EventEmitter<void> = new EventEmitter<void>(); //
  
  showFirstSection: boolean = true;

    toggleSection() {            
        this.showFirstSection = !this.showFirstSection;
    }

    toEdit(){
      this.showFirstSection = true; //it enables edit operation when edit button is clicked
    }
  @Input() toggleShow: boolean = false;
  @Output() deleteClicked = new EventEmitter<void>();

  onDeleteButtonClick(): void {
    this.toggleShow=false;
    this.deleteClicked.emit();
  }

  clearForm(): void {
    this.formdata = {}; // reset all the input fields when clicked on crossmark
  }

  formdata:any={ }
 
    @Input() title!:string;
    @Input() marks!:string;
    @Input() dates!:string;
    @Input() times!:string;
    @Input() uploadFiles!:string;

  // onClick() {
  //   this.showTableHeader = !this.showTableHeader;
    
  // }
  onSubmit(form:NgForm){
  } 

    
  constructor(private http: HttpClient,public dialog: MatDialog) {}

    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
      this.dialog.open(FileUploadComponent, {
        height: 'auto',
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }

    toShow(){
      this.showTable.emit();
    }

    
    

  }

  // isValidTime(regex:string){
  //   const eregex = /^(1[012]|0[1-9]):[0-5][0-9] (AM|PM)$/;
  //   return eregex.test(this.formdata.time);
  //   }
