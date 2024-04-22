import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEntryComponent } from "../../../shared-components/data-entry/data-entry.component";
// import { DataEntryComponent } from '../../shared-components/data-entry/data-entry.component';
// import { DataEntryComponent_1 as DataEntryComponent } from "../../../shared-components/data-entry/data-entry.component";

@Component({
    selector: 'app-assignments-page',
    standalone: true,
    templateUrl: './assignments-page.component.html',
    styleUrls: ['./assignments-page.component.scss'],
    imports: [
        CommonModule,
        DataEntryComponent
    ]
})
export class AssignmentsPageComponent {

}
