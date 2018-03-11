import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Todos2Page } from '../todos2/todos2';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  constructor(public navCtrl: NavController) {
  }
  goToTodos2(params){
    if (!params) params = {};
    this.navCtrl.push(Todos2Page);
  }
}
