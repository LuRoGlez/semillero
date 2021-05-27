import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { Time } from '@angular/common';
import { IonDatetime } from '@ionic/angular';



@Component({
  selector: 'app-informes',
  templateUrl: './informes.page.html',
  styleUrls: ['./informes.page.scss'],
})
export class InformesPage implements OnInit {
  opinions: any[];
  
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

  verID(){
    this.getOpinions()
    let fechaInicio : Date = this.fecha1;
    let fechaFin : Date = this.fecha2;
      this.opinions.forEach(function(e){
        if(e.created_at >= fechaInicio && e.created_at <= fechaFin){
          console.log(e.id)
        }
    
    });
    
    
  }

}
