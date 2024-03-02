import { ElementRef, Injectable, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import * as html2pdf from 'html2pdf.js';
import {jsPDF} from 'jspdf';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
 //pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
   providedIn: 'root'
 })
//declare var html2pdf: any;
export class DownloadService {
  @ViewChild('contentToDownload',{static:false}) el!: ElementRef;
  downloadAsPDF(elementId: string): void {
    const element = document.getElementById(elementId);

    if (element) {
      //pdfMake.createPdf(element)
      html2pdf.html2pdf(element);
    } else {
      console.error(`Element with id ${elementId} not found.`);
    }
  }

  makePDF(){
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("Resume.pdf");
      }
    })
}

}


