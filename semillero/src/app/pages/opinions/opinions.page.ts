import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from '../../services/rest.service';
import { OpiPage } from '../opi/opi.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.page.html',
  styleUrls: ['./opinions.page.scss'],
})
export class OpinionsPage implements OnInit {
  @Input() opinion_id: any;

  opinions: any[];
  like=false;
  //cont=0;
  //token: any;

  constructor(public modalController: ModalController, 
    public restService: RestService,
    public router:Router) { 
      this.getOpinions();
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

  giveLike($dato: any){
    this.restService.setOpinionId($dato);
    this.restService.giveLike($dato, this.restService.getUserId());
  }

  async abrirModal(headline, description, num_likes, create_at) {
    const modal = await this.modalController.create({
      component: OpiPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'headline': headline,
        'description': description,
        'num_likes': num_likes,
        'create_at': create_at,        
      }
    });
    return await modal.present();
  }

}
