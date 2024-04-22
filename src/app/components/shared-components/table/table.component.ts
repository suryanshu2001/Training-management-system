import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  studentMarks = [
    { student: 'John', marks: 85 },
    { student: 'Alice', marks: 90 },
    { student: 'Bob', marks: 75 },
    { student: ' tob', marks: 75 },
    { student: 'dob', marks: 55 },
  ];
}
