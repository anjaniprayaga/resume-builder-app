import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPopupContentComponent } from './signup-popup-content.component';

describe('SignupPopupContentComponent', () => {
  let component: SignupPopupContentComponent;
  let fixture: ComponentFixture<SignupPopupContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupPopupContentComponent]
    });
    fixture = TestBed.createComponent(SignupPopupContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
