import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    { student: 'paaji', marks: 100 },
  ];

  @Input() visible!: boolean;

  constructor() { }
}
