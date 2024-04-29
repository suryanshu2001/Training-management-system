import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesModalComponent } from './batches-modal.component';

describe('BatchesModalComponent', () => {
  let component: BatchesModalComponent;
  let fixture: ComponentFixture<BatchesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchesModalComponent]
    });
    fixture = TestBed.createComponent(BatchesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
