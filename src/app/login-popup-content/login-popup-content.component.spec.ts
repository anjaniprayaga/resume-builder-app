import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPopupContentComponent } from './login-popup-content.component';

describe('LoginPopupContentComponent', () => {
  let component: LoginPopupContentComponent;
  let fixture: ComponentFixture<LoginPopupContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPopupContentComponent]
    });
    fixture = TestBed.createComponent(LoginPopupContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
