import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from '../../services/rest.service';
import { ProdPage } from '../prod/prod.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
 productos : any[];

 constructor(public modalController: ModalController, 
  public restService: RestService,
  public router:Router) { 
    this.getProductos();
  }

  ngOnInit() {
  }

  getProductos(){
    this.restService.getProductos()
       .then((res: any) => {
         if(res.success){
         this.productos=res.data;
         console.log(this.productos);
       }
    },
    
      (error)=>{
        console.error(error);
      }
    );
  }

  async abrirModal(name, img, how_to_use) {
    const modal = await this.modalController.create({
      component: ProdPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'name': name,
        'img': img,
        'how_to_use': how_to_use,      
      }
    });
    return await modal.present();
  }

}
