import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { DownloadService } from '../download.service';
import html2canvas from 'html2canvas';
import {HttpClient} from '@angular/common/http';
import { placements } from '@popperjs/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-theme1',
  templateUrl: './theme1.component.html',
  styleUrls: ['./theme1.component.css']
})
export class Theme1Component {
  constructor(private downloadService:DownloadService, private http: HttpClient){}
  @ViewChild('contentToDownload',{static:false}) el!: ElementRef;
  FullName:any;
  Address:any;
  Place:any;
  Phone:any;
  email:any;
  twitterurl:any;
  linkedinurl:any;
  skills:string[]=[];
  skill:string='';
  experienceArr:any=[];
  designation:any;
  Profile:any;
  start:any;
  end:any;
  jobno:number=1;
  Experience:any;
  totalExperience:any=[];
  isDisabled:boolean=true;
  addSkills(){
    this.skills.push(this.skill);
    console.log(this.skills);
    this.skill='';
  }
  addExp(){
    const experience={
      startdate: this.start,
      end: this.end,
      jobdescription: this.Experience
    }
    this.totalExperience.push(experience);
    const oldjobno=this.jobno;
    this.jobno+=1;
    console.log(this.totalExperience);
    this.experienceArr.push(experience);
    console.log("experienceArr")
    console.log(this.experienceArr);
    this.start= '';
    this.end='';
    this.Experience='';
  }
  remove(num:any){
    this.experienceArr.splice(num,1);
    console.log('After remove');
    console.log(this.experienceArr);
  }
  removeskill(index:any){
    this.skills.splice(index,1);
  }
  getNumberOfRange():number[]{
    return Array.from({ length: this.jobno }, (_, index) => index + 1);
  
  }
  editExp(num:any){
    this.start=this.totalExperience[num].startdate;
    this.end=this.totalExperience[num].end;
    this.Experience= this.totalExperience[num].jobdescription;
  }
  updateExp(num:any, newValue:any){
    this.experienceArr[num].startdate= newValue.startdate;
    this.experienceArr[num].end= newValue.end;
    this.experienceArr[num].jobdescription= newValue.jobdescription;
  }
  onSubmit(){
    const data={
      experience: this.experienceArr,
      skills: this.skills,
      profile: this.Profile,
      address: this.Address,
      place: this.Place,
      phone: this.Phone,
      email: this.email,
      twitterurl: this.twitterurl,
      linkedinUrl: this.linkedinurl,
      FullName: this.FullName,
      designation: this.designation
    }
    console.log(data);
    // data.push(this.experienceArr);
    // data.push(this.skills);
    // data.push(this.Profile);
    // data.push(this.Address);
    // data.push(this.Place);
    // data.push(this.Phone);
    // data.push(this.email);
    // data.push(this.twitterurl);
    // data.push(this.linkedinurl);
    // data.push(this.FullN ame);
    // data.push(this.designation);
    //this.sendDataToApi(data).subscribe();
    //this.makePdf();
  }
  sendDataToApi(data:any){
    return this.http.post<any>('https://localhost:7041/Resume/CreateResume', data);
  }
//   makePdf(){
//     let pdf = new jsPDF('p','pt','a4');
//     const container=this.el.nativeElement;
//     container.style.width = '500%';
//     container.style.height = '100%';
//     pdf.html(container,{
//       callback:(pdf)=>{
//         pdf.save("Resume.pdf");
//       }
//     })
// }
makePdf() {
  let pdf = new jsPDF('p', 'pt', 'a4',true);
  const container = this.el.nativeElement;
  // container.style.width = '600%';
  // container.style.height = '400%';

  html2canvas(container, { useCORS: true }).then((canvas) => {
    const imageData = canvas.toDataURL('image/png');
    //pdf.addImage(imageData, 'PNG', 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);
    // pdf.addImage(imageData, 'PDF', 0, 0, 700, 700);
    pdf.addImage(imageData, 'PDF', 0, 0, 1000, 400);
    pdf.save("Resume.pdf");
  });
}
resumeData(data: NgForm){
  let allData: any;
  allData+= data;
  allData+=this.skills;
  console.log("Resume data: " + JSON.stringify(allData.value));
}

}
