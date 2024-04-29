import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-attendance-details',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './attendance-details.component.html',
  styleUrls: ['./attendance-details.component.scss']
})
export class AttendanceDetailsComponent {
  dataSource = [
    { actions: '', topicName: 'Mark', topicCompletion: '60%' },
    { actions: '', topicName: 'Jacob', topicCompletion: '70%' },
    { actions: '', topicName: 'Larry', topicCompletion: '25%' }
  ];
}
