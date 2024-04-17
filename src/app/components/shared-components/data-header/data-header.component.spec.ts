import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataHeaderComponent } from './data-header.component';

describe('DataHeaderComponent', () => {
  let component: DataHeaderComponent;
  let fixture: ComponentFixture<DataHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataHeaderComponent]
    });
    fixture = TestBed.createComponent(DataHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
