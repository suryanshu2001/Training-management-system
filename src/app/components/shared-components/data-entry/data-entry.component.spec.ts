import { ComponentFixture, TestBed,  waitForAsync } from '@angular/core/testing';

import { DataEntryComponent } from './data-entry.component';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DataEntryComponent', () => {
  let component: DataEntryComponent;
  let fixture: ComponentFixture<DataEntryComponent>;
  let dialog: MatDialog;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DataEntryComponent],
      imports: [FormsModule, MatIconModule, MatButtonModule, HttpClientTestingModule, BrowserAnimationsModule],
      providers: [MatDialog]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEntryComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit showTable event', () => {
    spyOn(component.showTable, 'emit');
    component.toShow();
    expect(component.showTable.emit).toHaveBeenCalled();
  });

  it('should emit deleteClicked event', () => {
    spyOn(component.deleteClicked, 'emit');
    component.onDeleteButtonClick();
    expect(component.deleteClicked.emit).toHaveBeenCalled();
  });

  it('should toggle section', () => {
    const initialSectionState = component.showFirstSection;
    component.toggleSection();
    expect(component.showFirstSection).toEqual(!initialSectionState);
  });

  it('should reset formdata object', () => {
    component.formdata = { title: 'Title', marks: 'Marks', dates: 'Dates', times: 'Times', uploadFiles: 'Files' };
    component.clearForm();
    expect(component.formdata).toEqual({});
  });

  it('should open dialog', () => {
    spyOn(dialog, 'open');
    component.openDialog('100ms', '200ms');
    expect(dialog.open).toHaveBeenCalled();
  });
});
