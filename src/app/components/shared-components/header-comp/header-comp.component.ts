import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header-comp',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    NgFor,
    ReactiveFormsModule,
    AsyncPipe,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatGridListModule,
    NgxMatSelectSearchModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.scss'],
})
export class HeaderCompComponent implements OnInit {
  myControl1 = new FormControl('');
  myControl2 = new FormControl('');
  myControl3 = new FormControl('');

  options1: string[] = [
    'Batch 1K2125:No.1',
    'Batch 4D4127:No.2',
    'Batch 12F4155:No.3',
    'Batch 5A2463:No.4',
  ];

  options2: string[] = [
    'Program 1D2125:data science',
    'Program 1f215 :web development',
    'Program 2E218 :mysql',
    'Program 2E2124 :php',
    'Program 3F2126 :bi',
  ];

  options3: string[] = [
    'course 1c4575:php basics',
    'course 4D124:xml',
    'course 5a7845:error handling',
    'course 2z1247 :data visualization',
  ];

  filteredOptions1: Observable<string[]> | undefined;
  filteredOptions2: Observable<string[]> | undefined;
  filteredOptions3: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions1 = this.myControl1.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value, this.options1))
    );

    this.filteredOptions2 = this.myControl2.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value, this.options2))
    );

    this.filteredOptions3 = this.myControl3.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value, this.options3))
    );
  }

  private _filter(value: string | null, options: string[]): string[] {
    const filterValue = (value || '').toLowerCase();
    return options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
