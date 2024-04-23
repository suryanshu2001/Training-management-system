import { Component, Input } from '@angular/core';
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
    templateUrl: './header-comp.component.html',
    styleUrls: ['./header-comp.component.scss'],
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
    ]
})
export class HeaderCompComponent implements OnInit {
  @Input() heading!:string;

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
