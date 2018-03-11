import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Detail2Page} from "../detail2/detail2";

@Component({
  selector: 'page-marketplace',
  templateUrl: 'marketplace.html'
})
export class MarketplacePage {

  constructor(public navCtrl: NavController) {
  }

  public goToDetail2Page() {
    this.navCtrl.push(Detail2Page);
  }
}
