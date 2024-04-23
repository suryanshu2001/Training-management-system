import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEntryComponent } from "../../../shared-components/data-entry/data-entry.component";
import { HeaderCompComponent } from 'src/app/components/shared-components/header-comp/header-comp.component';
import { FileUploadComponent } from 'src/app/components/shared-components/modals/file-upload/file-upload.component';
@Component({
    selector: 'app-assignments-page',
    standalone: true,
    templateUrl: './assignments-page.component.html',
    styleUrls: ['./assignments-page.component.scss'],
    imports: [
        CommonModule,
        DataEntryComponent,
        HeaderCompComponent,
        FileUploadComponent
    ]
})
export class AssignmentsPageComponent {
    
}
