import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {Detail2Page} from "../detail2/detail2";
import {DetailPage} from "../detail/detail";

@Component({
  selector: 'page-marketplace',
  templateUrl: 'marketplace.html'
})
export class MarketplacePage {

  constructor(public navCtrl: NavController, private alertController: AlertController) {
      const alert = this.alertController.create({
          title: 'Choose a task',
          message: 'Which task would you like to do in return for your "Cancel phone contract" task?',
          buttons: [
              {
                  text: 'No, thanks',
                  handler: () => {
                      this.navCtrl.goToRoot({});
                  }
              },
              {
                  text: 'Ok, understood',
                  role: 'cancel'
              },
          ]
      });
      alert.present();
  }

  public goToDetail2Page() {
    this.navCtrl.push(Detail2Page);
  }
}
