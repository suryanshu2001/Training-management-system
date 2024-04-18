import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEntryComponent } from '../../shared-components/data-entry/data-entry.component';

@Component({
  selector: 'app-assignments-page',
  standalone: true,
  imports: [
    CommonModule,
    DataEntryComponent
  ],
  templateUrl: './assignments-page.component.html',
  styleUrls: ['./assignments-page.component.scss']
})
export class AssignmentsPageComponent {

}
