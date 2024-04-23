import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

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

  constructor(private cdr: ChangeDetectorRef) {}
  @Input() toggle: boolean = false;
  @Output() newToggle = new EventEmitter<boolean>();

  myControl1 = new FormControl('');
  myControl2 = new FormControl({ value: '', disabled: true }); // Initially disabled
  myControl3 = new FormControl({ value: '', disabled: true }); // Initially disabled

  buttonActive: boolean = true;

  batchCodeLabel: string = 'Batch Code:Batch Name';
  programCodeLabel: string = 'Program code:program Name';
  courseCodeLabel: string = 'Course code:code name';
  updateDynamicTitles() {
    this.myControl1.valueChanges.subscribe((value) => {
      this.batchCodeLabel = value ? value : 'Batch Code:Batch Name';
    });

    this.myControl2.valueChanges.subscribe((value) => {
      this.programCodeLabel = value ? value : 'Program code:program Name';
    });

    this.myControl3.valueChanges.subscribe((value) => {
      this.courseCodeLabel = value ? value : 'Course code:code name';
    });
  }

 
  filteredOptions1: Observable<string[]> | undefined;
  filteredOptions2: Observable<string[]> | undefined;
  filteredOptions3: Observable<string[]> | undefined;


  ngOnInit() {
    this.updateDynamicTitles();

    this.filteredOptions1 = this.myControl1.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value, this.options1))
    );

    // Subscribe to changes in myControl1 to enable/disable myControl2
    this.myControl1.valueChanges.subscribe((value) => {
      if (value) {
        this.myControl2.enable(); // Enable myControl2
        this.myControl2.reset(); // Reset its value
      } else {
        this.myControl2.setValue(''); // Reset its value
        this.myControl2.disable(); // Disable myControl2
        this.myControl3.setValue(''); // Reset and disable myControl3
        this.myControl3.disable();
      }
    });

    this.filteredOptions2 = this.myControl2.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value, this.options2))
    );

    // Subscribe to changes in myControl2 to enable/disable myControl3
    this.myControl2.valueChanges.subscribe((value) => {
      if (value) {
        this.myControl3.enable(); // Enable myControl3
        this.myControl3.reset(); // Reset its value
      } else {
        this.myControl3.setValue(''); // Reset its value
        this.myControl3.disable(); // Disable myControl3
      }
    });

    this.filteredOptions3 = this.myControl3.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value, this.options3))
    );
  }
  updateButtonState() {
    throw new Error('Method not implemented.');
  }

  private _filter(value: string | null, options: string[]): string[] {
    const filterValue = (value || '').toLowerCase();
    return options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onCreateExam() {
    this.toggle = true;
    this.newToggle.emit(this.toggle);
    this.cdr.detectChanges();
    console.log(this.toggle);
  }
}
