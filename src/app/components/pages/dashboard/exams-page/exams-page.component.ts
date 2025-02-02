import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCompComponent } from '../../../shared-components/header-comp/header-comp.component';
import { TableComponent } from '../../../shared-components/table/table.component';
import { CourseService } from 'src/app/services/course.service';
import { DataEntryComponent } from 'src/app/components/shared-components/data-entry/data-entry.component';

@Component({
  selector: 'app-exams-page',
  standalone: true,
  templateUrl: './exams-page.component.html',
  styleUrls: ['./exams-page.component.scss'],
  imports: [
    CommonModule,
    HeaderCompComponent,
    TableComponent,
    DataEntryComponent,
  ],
})
export class ExamsPageComponent implements OnInit {
  toggleShow: boolean = false;
  constructor(private courseService: CourseService) {}
  batchNames: string[] = [];
  searchBatch: string = '';
  programs: string[] = [];
  courses: string[] = [];

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses) => {
      courses.map((course) => this.batchNames.push(course.BatchName));
    });
    console.log('Batch names:', this.batchNames);
    this.getPrograms('Batch 1K2125:No.1');
    this.getCourses('Batch 1K2125:No.1', 'Program 1D2125:data science');
  }

  getPrograms(selectedBatch: string) {
    this.courseService.getCourses().subscribe((courses) => {
      courses.map((course) => {
        if (course.BatchName === selectedBatch) {
          course.programs.map(
            (program) =>
              (this.programs = this.programs.concat(program['ProgramName']))
          );
          console.log('programs', this.programs);
        }
      });
    });
  }

  getCourses(selectedBatch: string, selectedProgram: string): void {
    this.courseService.getCourses().subscribe((courses) => {
      courses.map((course) => {
        if (course.BatchName === selectedBatch) {
          course.programs.forEach((program) => {
            if (program['ProgramName'].toString() === selectedProgram) {
              if (selectedProgram.includes(program['ProgramName'].toString())) {
                program['Courses'].map((course) => {
                  this.courses.push(course);
                });
              }
            }
          });
        }
      });
    });
    console.log('Courses', this.courses);
  }

  updateToggle(toggle: boolean) {
    this.toggleShow = toggle;
  }

  tableVisible: boolean = false;
  toggleTable() {
    this.tableVisible = !this.tableVisible;
  }
}
