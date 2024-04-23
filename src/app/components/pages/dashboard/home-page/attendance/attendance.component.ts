import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule,MatGridListModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatIconModule],
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {
  startDate = new Date(1990, 0, 1);
  selectedBatch: string | undefined;
  selectedDate: string | undefined;
  selectedProgram: string | undefined;
  selectedCourse: string | undefined;
  selectedAttendance: string | undefined;
  isDateSelected: boolean = false;
  isBatchSelected: boolean = false;
  isProgramSelected: boolean = false;
  isCourseSelected: boolean = false;
  isAttendanceSelected: boolean = false;

  onBatchChange() {
    this.isBatchSelected = !!this.selectedBatch;
  }
  onDateChange(){
    this.isDateSelected = !!this.selectedDate;
  }
  onProgramChange(){
    this.isProgramSelected = !!this.selectedProgram;
  }
  onCourseChange(){
    this.isCourseSelected = !!this.selectedCourse;
  }
  onAttendanceChange(){
    this.isAttendanceSelected = !!this.selectedAttendance;
  }
  sortTopicName() {
    console.log('Sorting by Topic Name');
  }
}
