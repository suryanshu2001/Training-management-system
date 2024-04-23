import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-batches',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule, MatSelectModule, NgFor, MatInputModule, FormsModule,MatGridListModule],
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.scss']
})
export class BatchesComponent {
  selectedBatch: string|undefined;
  isBatchSelected: boolean = false;
  selectedDate: string|undefined;
  isDateSelected: boolean = false;
  selectedProgram: string | undefined;
  isProgramSelected: boolean = false;

  onBatchChange() {
    this.isBatchSelected = !!this.selectedBatch;
  }

  onDateChange() {
    this.isDateSelected = !!this.selectedDate;
  }

  onProgramChange() {
    this.isProgramSelected = !!this.selectedProgram;
  }
}
