import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BatchesandPrograms } from '../data-model/data-model.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatchesandprogramsService {
constructor(private http:HttpClient) { }
batchesandprograms!: Observable<BatchesandPrograms[]>
baseUrl: string = "http://localhost:3000/"
getBatchesandPrograms(): Observable<BatchesandPrograms[]> {
  return this.http.get<BatchesandPrograms[]>(`${this.baseUrl}courses`);
}
}
