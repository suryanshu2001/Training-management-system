import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCompComponent } from '../../../shared-components/header-comp/header-comp.component';
import { TableComponent } from '../../../shared-components/table/table.component';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-exams-page',
  standalone: true,
  templateUrl: './exams-page.component.html',
  styleUrls: ['./exams-page.component.scss'],
  imports: [CommonModule, HeaderCompComponent, TableComponent],
})
export class ExamsPageComponent {
  toggleShow: boolean = false;
  constructor() {}
}
