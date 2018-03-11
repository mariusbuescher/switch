import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MarketplacePage} from "../marketplace/marketplace";

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  constructor(public navCtrl: NavController) {
  }
  goToMarketplace(params){
    if (!params) params = {};
    this.navCtrl.push(MarketplacePage);
  }

  goToRoot(params) {
    this.navCtrl.pop({});
  }
}
