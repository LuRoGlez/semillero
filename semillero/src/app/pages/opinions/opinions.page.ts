import { Component, OnInit } from '@angular/core';
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

  opinions: any;
  cont=0;

  constructor(public modalController: ModalController, 
    public restService: RestService,
    public router:Router) { 
      this.getOpinions
    }

  ngOnInit() {
  }

  getOpinions(){
    this.cont=0;
    this.restService.getOpinions()
    .then((res: any) => {
      console.log("OBTENGO CICLOS");
      this.opinions=res.data;
      console.log(this.opinions);
    })
  }

  async presentModal(headline, description, num_likes, create_at) {
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
