import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-attendance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.scss']
})
export class StudentAttendanceComponent {
  studentNames = ['Marie', 'Jacob', 'John']; 

  selectAllStudents(event: any) {
    const allStudentsCheckbox = document.getElementById('allStudentsCheckbox') as HTMLInputElement;
    const allStudentsChecked = allStudentsCheckbox.checked;
    this.studentNames.forEach(student => {
      const studentCheckbox = document.getElementById(`${student}Checkbox`) as HTMLInputElement;
      studentCheckbox.checked = allStudentsChecked;
    });
  }
  checkSingleStudent(event: any) {
    const studentCheckbox = event.target as HTMLInputElement;
    const studentName = studentCheckbox.id.replace('Checkbox', '');
    const allStudentsCheckbox = document.getElementById('allStudentsCheckbox') as HTMLInputElement;
    const allStudentsChecked = allStudentsCheckbox.checked;
    if (!studentCheckbox.checked && allStudentsChecked) {
      allStudentsCheckbox.checked = false;
    } else if (studentCheckbox.checked && !this.studentNames.some(student => {
      const studentCheckbox = document.getElementById(`${student}Checkbox`) as HTMLInputElement;
      return !studentCheckbox.checked;
    })) {
      allStudentsCheckbox.checked = true;
    }
  }
}
