import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Plague } from '../../models/plague.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plague',
  templateUrl: './plague.page.html',
  styleUrls: ['./plague.page.scss'],
})
export class PlaguePage implements OnInit {

  plagues: Plague[];
  textoBuscador = '';

  constructor( 
    public restService: RestService,
    public router:Router) { 
      this.getPlagues();
    }

  ngOnInit() {
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

  buscarPlaga(event) {
    const plaga = event.target.value;
    this.textoBuscador = plaga;
  }

}
