import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { BatchesComponent } from './batches/batches.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,MatGridListModule,MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule,NgxMatSelectSearchModule,BatchesComponent,MatGridListModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
    tabName: string = 'batchProgram';

    onToggle(tab:string){
      console.log(tab,'selected');
      this.tabName = tab;
    }
}
