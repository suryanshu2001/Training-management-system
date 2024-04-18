import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';


@Component({
  selector: 'app-data-entry',
  standalone: true,
  imports: [CommonModule,MatDatepickerModule,MatInputModule,MatFormFieldModule,MatNativeDateModule,MatIconModule,MatButtonModule,FormsModule,MatTooltipModule,],
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.scss']
})
export class DataEntryComponent{
  showTableHeader = false;
  formdata={
    examName:'',
    totalMarks:'',
    datepick:'',
    time:''
  }


  onClick() {
    this.showTableHeader = !this.showTableHeader;
  }
  onSubmit(form:NgForm){
  }
  
  
  }

  // isValidTime(regex:string){
  //   const eregex = /^(1[012]|0[1-9]):[0-5][0-9] (AM|PM)$/;
  //   return eregex.test(this.formdata.time);
  //   }
