import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opi',
  templateUrl: './opi.page.html',
  styleUrls: ['./opi.page.scss'],
})
export class OpiPage implements OnInit {

  @Input() headline: any;
  @Input() description: any;
  @Input() num_likes: any;
  @Input() create_at: any;

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
