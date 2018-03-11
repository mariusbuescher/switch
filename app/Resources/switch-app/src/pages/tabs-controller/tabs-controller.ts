import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodosPage } from '../todos/todos';
import { SettingsPage } from '../settings/settings';
import { TodosPage } from '../todos/todos';
import { MarketplacePage } from '../marketplace/marketplace';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = TodosPage;
  tab2Root: any = MarketplacePage;
  tab3Root: any = SettingsPage;
  constructor(public navCtrl: NavController) {
  }
  goToTodos(params){
    if (!params) params = {};
    this.navCtrl.push(TodosPage);
  }goToSettings(params){
    if (!params) params = {};
    this.navCtrl.push(SettingsPage);
  }
}
