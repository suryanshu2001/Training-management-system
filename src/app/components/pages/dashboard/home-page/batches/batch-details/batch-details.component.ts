import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip'; // Import MatTooltipModule

@Component({
  selector: 'app-batch-details',
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.scss']
})
export class BatchDetailsComponent {
  dataSource: any[] = [
    { 
      code: 234, 
      name: 'Course 1', 
      topicsCompleted: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 5','Topic 6', 'Topic 7', 'Topic 8', 'Topic 9', 'Topic 10'], 
      topicsInProgress: 'Topic 2', 
      completionPercentage: '60%' 
    },
    { 
      code: 235, 
      name: 'Course 2', 
      topicsCompleted: ['Topic 6', 'Topic 7', 'Topic 8', 'Topic 9', 'Topic 10'], 
      topicsInProgress: 'Topic 3', 
      completionPercentage: '70%' 
    },
    { 
      code: 236, 
      name: 'Course 3', 
      topicsCompleted: ['Topic 1', 'Topic 2'], 
      topicsInProgress: 'Topic 2', 
      completionPercentage: '80%' 
    },
    { 
      code: 238, 
      name: 'Course 3', 
      topicsCompleted: ['Topic 1'], 
      topicsInProgress: 'Topic 2', 
      completionPercentage: '80%' 
    }
  ];

  maxTopicsDisplayed: number = 1;
  truncateTopics(course: any): string {
    if (course.topicsCompleted.length > this.maxTopicsDisplayed) {
      const additionalTopics = course.topicsCompleted.slice(this.maxTopicsDisplayed);
      return course.topicsCompleted.slice(0, this.maxTopicsDisplayed).join(', ') + ` +${additionalTopics.length} more`;
    } else {
      return course.topicsCompleted.join(', ');
    }
  }
  
}
