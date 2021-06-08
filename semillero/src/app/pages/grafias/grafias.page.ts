import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-grafias',
  templateUrl: './grafias.page.html',
  styleUrls: ['./grafias.page.scss'],
})
export class GrafiasPage implements AfterViewInit {
  plagues:any;
  filtroPlagas= 0;
  opinions=[];


  polarChart: any;
  meses:any;
  arrayMeses = ["Ene","Feb","Mar","Abr","May","Jun",
  "Jul","Ago","Sep","Oct","Nov","Dic"];
  contadorArrayMeses=0;
  contadorMes=0;
  nOpinions: any;
  date: any;
  filtroMeses=[];


  @ViewChild('grafico') public canvas: ElementRef

  constructor(
    public restService: RestService,
    public router:Router
    ) { 
      this.nOpinions=[0,0,0,0,0,0];
      this.meses=[0,0,0,0,0,0];
      this.date= new Date();
      let mes=this.date.getMonth();
      this.meses.forEach(() => {
        mes = mes-this.contadorMes;
        if( mes<=0 || mes<-2){
          mes=12;
          this.contadorMes=0;
        }
        this.meses[this.contadorArrayMeses] = mes;
        this.contadorArrayMeses+=1;
      });
      this.setMes();
      this.getPlagues();
      this.getOpinions();
    }

  ngOnInit() {}

  onChange(event: number){
    this.filtroPlagas = event;
    this.getOpinions();
    this.getPlagues();
  }

  

  getOpinions(){
    this.nOpinions = [0,0,0,0,0,0];
    this.opinions = null;
    this.restService.getOpinions().then(
      (res:any) => {
        if(res.success){
          this.opinions=res.data;

          this.opinions.forEach((o) => {
              if (this.filtroPlagas == o.plague_id || this.filtroPlagas==0){
                
              var monthOpinion= new Date(o.created_at).getMonth();          
                for(let i=0; i<this.meses.length; i++){
                  if(this.meses[i]==monthOpinion){
                    this.nOpinions[i]=this.nOpinions[i]+1; 
                  }}
                }
                
            }); 
            console.log(this.opinions)      
        this.ngAfterViewInit();
      }
      return true;
      },
    (err) =>{
      console.error(err);
      return false;
    }
    );  
  }

  getPlagues(){
    this.restService.getPlagues()
       .then((res: any) => {
         if(res.success){
         this.plagues=res.data;
         console.log(this.plagues);
       }
    },
    
      (error)=>{
        console.error(error);
      }
    );
  }

  setMes(){

    this.meses=this.meses.reverse();
    for(let i=0; i<this.meses.length; i++){
      this.filtroMeses[i]=this.arrayMeses[i];
      this.filtroMeses;
      this.meses[i]=i;
    }
 
  }

   ngAfterViewInit(){
    this.generarGrafico();
  };


  generarGrafico() {
    this.polarChart = new Chart(this.canvas.nativeElement, {
      type: 'polarArea',
      data: {
        labels: this.filtroMeses,
        datasets: [{
          label: 'Opiniones',
          data: this.nOpinions,
          backgroundColor: [
            'red',
            'green',
            'orange',
            'blue',
            'yellow',
            'pink'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true, 
        plugins : {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Grafico realizado con Chart.js para Raul Reyes'
          }
        }
      }
    });
  }

  // hacer npm i -S chart.js@^2
  

}
