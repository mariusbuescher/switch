import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';

@Component({
  selector: 'page-todos2',
  templateUrl: 'todos2.html'
})
export class Todos2Page {

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {
    const toast = this.toastCtrl.create({
        message: 'Your "Cancel phone contract" is already done by 80%. How far are you?',
        showCloseButton: true,
        closeButtonText: 'Ok',
        duration: 30000
    });
    setTimeout(() => {
        toast.present({});
    }, 10000);
  }
  
}
