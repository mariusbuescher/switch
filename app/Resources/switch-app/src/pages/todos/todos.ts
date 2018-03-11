import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {DetailPage} from "../detail/detail";

@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html'
})
export class TodosPage {

  constructor(public navCtrl: NavController) {
  }
}
