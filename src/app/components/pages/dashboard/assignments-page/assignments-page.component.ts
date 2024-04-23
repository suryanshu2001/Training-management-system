import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEntryComponent } from "../../../shared-components/data-entry/data-entry.component";
import { HeaderCompComponent } from 'src/app/components/shared-components/header-comp/header-comp.component';
import { FileUploadComponent } from 'src/app/components/shared-components/modals/file-upload/file-upload.component';
import { TableComponent } from 'src/app/components/shared-components/table/table.component';
@Component({
    selector: 'app-assignments-page',
    standalone: true,
    templateUrl: './assignments-page.component.html',
    styleUrls: ['./assignments-page.component.scss'],
    imports: [
        CommonModule,
        DataEntryComponent,
        HeaderCompComponent,
        FileUploadComponent,
        TableComponent
    ]
})
export class AssignmentsPageComponent {
    toggleShow: boolean = false;
    updateToggle(toggle:boolean){
        this.toggleShow = !this.toggleShow;
      }

      tableVisible: boolean = false;

  constructor() { }

  toggleTable() {
    this.tableVisible = !this.tableVisible;
  }
}
