import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CourseDetails} from '../data-model/data-model.module';

@Injectable({
  providedIn: 'root'
})
export class BatchesDetailsService {

  constructor(private http:HttpClient) { }
  courseDetails!: Observable<CourseDetails[]>
  baseUrl: string = "http://localhost:3000/"
  getBatchesandPrograms(): Observable<CourseDetails[]> {
    return this.http.get<CourseDetails[]>(`${this.baseUrl}courseDetails`);
  }
}
