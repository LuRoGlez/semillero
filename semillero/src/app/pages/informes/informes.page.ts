import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { jsPDF } from "jspdf";




@Component({
  selector: 'app-informes',
  templateUrl: './informes.page.html',
  styleUrls: ['./informes.page.scss'],
})
export class InformesPage implements OnInit {
  opinions: any[];
  vista = false;
  
  fecha1 : any;
  fecha2 : any;

  constructor(
    public restService: RestService,
    public router:Router
    ) { 
     this.getOpinions()
    }

  ngOnInit() {
  }

  getOpinions(){
    this.restService.getOpinions()
       .then((res: any) => {
         if(res.success){
         this.opinions=res.data;
         console.log(this.opinions);
       }
    },
    
      (error)=>{
        console.error(error);
      }
    );
  }

  descargarPDF(){
    this.getOpinions()
    let fechaInicio : Date = this.fecha1;
    let fechaFin : Date = this.fecha2;

    let  text : string;

    var doc = new jsPDF({ orientation: 'l', format: 'a4' });

    doc.html(document.getElementById('pdf'), {
           callback: function (doc) {
               doc.addPage('a4', 'p');
               doc.html(document.getElementById('pdf'), {
                   callback: function (doc) {
                       doc.output('dataurlnewwindow');
                   }
               });
           }
       });     
    doc.save("informe.pdf")
    
    
    
  }

  previa(){
    this.vista=true;
  }

}
