import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.page.html',
  styleUrls: ['./prod.page.scss'],
})
export class ProdPage implements OnInit {

  @Input() name: any;
  @Input() img: any;
  @Input() how_to_use: any;
  

  constructor(public modalCtrl: ModalController,
    public restService: RestService,
    public router:Router ) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
