import { Injectable } from '@angular/core';
import { Course } from '../data-model/data-model.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http:HttpClient) { }
  courses!: Observable<Course[]>

  baseUrl: string = "http://localhost:3000/"

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}courses`);
  }
}
