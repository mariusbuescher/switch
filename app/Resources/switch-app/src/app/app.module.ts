import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SettingsPage } from '../pages/settings/settings';
import { MarketplacePage } from '../pages/marketplace/marketplace';
import { TodosPage } from '../pages/todos/todos';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {DetailPage} from "../pages/detail/detail";
import {Todos2Page} from "../pages/todos2/todos2";
import {Detail2Page} from "../pages/detail2/detail2";

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    MarketplacePage,
    TodosPage,
    TabsControllerPage,
    DetailPage,
    Todos2Page,
    Detail2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    MarketplacePage,
    TodosPage,
    TabsControllerPage,
    DetailPage,
    Todos2Page,
    Detail2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}