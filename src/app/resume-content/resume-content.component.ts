import { Component, ElementRef, ViewChild } from '@angular/core';
import { DownloadService } from '../download.service';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resume-content',
  templateUrl: './resume-content.component.html',
  styleUrls: ['./resume-content.component.css']
})
export class ResumeContentComponent {
  constructor(private downloadService: DownloadService) {}
  @ViewChild('contentToDownload',{static:false}) el!: ElementRef;
//myDictionary: any;
// myDictionary: { [key: string]: any } = {
//   'Name': '',
//   'Surname': '',
//   'Phonenumber': '',
//   'Email': '',
//   'Place': '',
//   'Bachelor Degree':'',
//   'University': '',
//   'Percentage':''
// };
skills:string[]=[];
skill:string='';
dob:any;
Name:any;

addSkill(){
  this.skills.push(this.skill);
  this.skill='';
  console.log("skills");
  console.log(this.skill);
  console.log(this.skills);
  console.log(this.dob);
}
onSubmit(){
  debugger
  //this.downloadPDF()
  this.makePDF();
}

// downloadPDF(): void {
//   // Replace 'contentToDownload' with the ID of the HTML content you want to download
//   this.downloadService.downloadAsPDF('contentToDownload');
// }
makePDF(){
  let pdf = new jsPDF('p','pt','a4');
  pdf.html(this.el.nativeElement,{
    callback:(pdf)=>{
      pdf.save("Resume.pdf");
    }
  })
}
resumeData(data:any){

}
}

