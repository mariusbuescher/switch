import { Component, ViewChild } from '@angular/core';
import {Platform, Nav, AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TodosPage} from "../pages/todos/todos";
import {TabsControllerPage} from "../pages/tabs-controller/tabs-controller";
import {DetailPage} from "../pages/detail/detail";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) public navCtrl: Nav;
    rootPage:any = TodosPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private alertController: AlertController) {
      const alert = this.alertController.create({
          title: 'Task not fullfilled',
          message: 'Your task "Do income tax" is not done for a week. Should someone else do that for your?',
          buttons: [
              {
                  text: 'Yes',
                  handler: () => {
                      this.navCtrl.push(DetailPage);
                  }
              },
              {
                  text: 'No, I will do it.',
                  role: 'cancel'
              }
          ]
      });

      setTimeout(() => {
          alert.present();
      }, 5000);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
}
