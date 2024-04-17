import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCComponent } from './shared-c.component';

describe('SharedCComponent', () => {
  let component: SharedCComponent;
  let fixture: ComponentFixture<SharedCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedCComponent]
    });
    fixture = TestBed.createComponent(SharedCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
