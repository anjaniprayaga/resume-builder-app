import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbCarouselModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPopupContentComponent } from 'src/app/login-popup-content/login-popup-content.component';
import { SignupPopupContentComponent } from 'src/app/signup-popup-content/signup-popup-content.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private dialog: MatDialog, private router: Router){}
  openPopup():void {
    this.dialog.open(LoginPopupContentComponent,{
      width: '500px',
      height: '400px',
  });
  }

  openSignupPopup():void {
    this.dialog.open(SignupPopupContentComponent,{
      width: '500px',
      height: '400px',
  });
  }

  navigateToAnotherComponent() {
    this.router.navigate(['/app-resume-content']);
  }
}
// var parent = document.getElementsByTagName("app-resume-content");
// var child = document.getElementsByTagName("ng-component");
// parent[0].removeChild(child[0]);
