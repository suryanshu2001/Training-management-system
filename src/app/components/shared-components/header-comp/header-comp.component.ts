import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-comp',
  standalone: true,
  imports: [
    CommonModule,
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
export class HeaderCompComponent {}
