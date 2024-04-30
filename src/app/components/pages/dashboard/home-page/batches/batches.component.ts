import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { Observable, of } from 'rxjs';
import { BatchesandPrograms } from 'src/app/data-model/data-model.module';
import { BatchesandprogramsService } from 'src/app/services/batchesandprograms.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-batches',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule,MatGridListModule,BatchDetailsComponent],
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.scss']
})
export class BatchesComponent implements OnInit{
  batchNames: string[] = [];
  programs: string[] = [];
  courses: string[] = [];
  constructor(private courseService: CourseService) { }
  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses) => {
      courses.map((course) => this.batchNames.push(course.BatchName));
    });
    console.log(this.batchNames);
  }
  
  selectedBatch: string|undefined;
  isBatchSelected: boolean = false;
  selectedDate: string|undefined;
  isDateSelected: boolean = false;
  selectedProgram: string | undefined;
  isProgramSelected: boolean = false;

  onBatchChange() {
    this.isBatchSelected = !!this.selectedBatch;
    console.log(this.selectedBatch)
      if(this.selectedBatch){
        this.courseService.getCourses().subscribe((courses) => {
          courses.map((course) => {
            if (course.BatchName === this.selectedBatch) {
              course.programs.map(
                (program) =>
                  (this.programs = this.programs.concat(program['ProgramName']))
              );
              console.log(this.programs);
            }
          });
        });
      }

  }

  onDateChange() {
    this.isDateSelected = !!this.selectedDate;
  }

  onProgramChange() {
    this.isProgramSelected = !!this.selectedProgram;
  }
  
}
