import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentPageComponent } from './assignment-page.component';

describe('AssignmentPageComponent', () => {
  let component: AssignmentPageComponent;
  let fixture: ComponentFixture<AssignmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentPageComponent]
    });
    fixture = TestBed.createComponent(AssignmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
