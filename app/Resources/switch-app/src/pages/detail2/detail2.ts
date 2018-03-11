import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Todos2Page } from '../todos2/todos2';
import {TabsControllerPage} from "../tabs-controller/tabs-controller";

@Component({
  selector: 'page-detail2',
  templateUrl: 'detail2.html'
})
export class Detail2Page {

  constructor(public navCtrl: NavController) {
  }
  goToTodos2(params){
    this.navCtrl.setRoot(Todos2Page);
  }
}
