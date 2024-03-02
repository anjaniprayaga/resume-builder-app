import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPopupContentComponent } from './login-popup-content/login-popup-content.component';
import { PopupService } from './popup.service';
import { MatDialog } from '@angular/material/dialog';
import { SignupPopupContentComponent } from './signup-popup-content/signup-popup-content.component';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialogRef: MatDialog){}
  title = 'resume-builder-app';

  openPopup():void {
    this.dialogRef.open(LoginPopupContentComponent);
  }
  openSignupPopup():void {
    this.dialogRef.open(SignupPopupContentComponent);
  }
  
}
