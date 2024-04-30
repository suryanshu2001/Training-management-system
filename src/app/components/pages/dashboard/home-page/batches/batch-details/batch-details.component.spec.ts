import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchDetailsComponent } from './batch-details.component';

describe('BatchDetailsComponent', () => {
  let component: BatchDetailsComponent;
  let fixture: ComponentFixture<BatchDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BatchDetailsComponent]
    });
    fixture = TestBed.createComponent(BatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should display table headers', () => {
  //   const compiled = fixture.nativeElement;
  //   const headers = compiled.querySelectorAll('th');
  //   expect(headers.length).toBe(5); 
  //   const expectedHeaders = ['Code', 'Course Name', 'Topics Completed', 'Topics in Progress', 'Course Completion Percentage'];
  //   headers.forEach((header: HTMLElement, index: number) => {
  //     const textContent = header.textContent;
  //     expect(textContent).toBeTruthy();
  //     if (textContent) {
  //       expect(textContent.trim()).toBe(expectedHeaders[index]);
  //     }
  //   });
  // });  
  
});
