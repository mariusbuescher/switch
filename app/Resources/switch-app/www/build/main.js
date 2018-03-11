webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketplacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail2_detail2__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarketplacePage = (function () {
    function MarketplacePage(navCtrl, alertController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        var alert = this.alertController.create({
            title: 'Choose a task',
            message: 'Which task would you like to do in return for your "Cancel phone contract" task?',
            buttons: [
                {
                    text: 'No, thanks',
                    handler: function () {
                        _this.navCtrl.goToRoot({});
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
    MarketplacePage.prototype.goToDetail2Page = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail2_detail2__["a" /* Detail2Page */]);
    };
    MarketplacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-marketplace',template:/*ion-inline-start:"/Users/mbuescher/work/PLAYGROUND/servicejam/app/Resources/switch-app/src/pages/marketplace/marketplace.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Marketplace\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <ion-list id="marketplace-list2">\n    <ion-item color="none" id="marketplace-list-item3" (click)="goToDetail2Page()">\n      <ion-thumbnail item-left>\n        <img src="http://lorempixel.com/150/150/city/1/"/>\n      </ion-thumbnail>\n      <h2>\n        Fix my car\n      </h2>\n    </ion-item>\n    <ion-item color="none" id="marketplace-list-item4" (click)="goToDetail2Page()">\n      <ion-thumbnail item-left>\n        <img src="http://lorempixel.com/150/150/city/2/"/>\n      </ion-thumbnail>\n      <h2>\n        Income tax\n      </h2>\n    </ion-item>\n    <ion-item color="none" id="marketplace-list-item5" (click)="goToDetail2Page()">\n      <ion-thumbnail item-left>\n        <img src="http://lorempixel.com/150/150/city/3/"/>\n      </ion-thumbnail>\n      <h2>\n        item 2\n      </h2>\n    </ion-item>\n    <ion-item color="none" id="marketplace-list-item6" (click)="goToDetail2Page()">\n      <ion-thumbnail item-left>\n        <img src="http://lorempixel.com/150/150/city/4/"/>\n      </ion-thumbnail>\n      <h2>\n        Item 3\n      </h2>\n    </ion-item>\n    <ion-item color="none" id="marketplace-list-item7" (click)="goToDetail2Page()">\n      <ion-thumbnail item-left>\n        <img src="http://lorempixel.com/150/150/city/5/"/>\n      </ion-thumbnail>\n      <h2>\n        Item 4\n      </h2>\n    </ion-item>\n    <ion-item color="none" id="marketplace-list-item8" (click)="goToDetail2Page()">\n      <ion-thumbnail item-left>\n        <img src="http://lorempixel.com/150/150/city/6/"/>\n      </ion-thumbnail>\n      <h2>\n        item 5\n      </h2>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/mbuescher/work/PLAYGROUND/servicejam/app/Resources/switch-app/src/pages/marketplace/marketplace.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MarketplacePage);
    return MarketplacePage;
}());

//# sourceMappingURL=marketplace.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marketplace_marketplace__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailPage = (function () {
    function DetailPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DetailPage.prototype.goToMarketplace = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__marketplace_marketplace__["a" /* MarketplacePage */]);
    };
    DetailPage.prototype.goToRoot = function (params) {
        this.navCtrl.pop({});
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/Users/mbuescher/work/PLAYGROUND/servicejam/app/Resources/switch-app/src/pages/detail/detail.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Details\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <h1 id="detail-heading1" style="color:#000000;">\n    Cancel phone contract\n  </h1>\n  <p>When somebody else should do the task, you need to provide some more information.</p>\n  <div id="detail-markdown3" class="show-list-numbers-and-dots">\n    <textarea cols="30" rows="10"></textarea>\n  </div>\n  <button id="detail-button1" ion-button color="balanced" block icon-left on-click="goToMarketplace()">\n    <ion-icon name="checkmark-circle"></ion-icon>\n    submit\n  </button>\n  <button id="detail-button2" ion-button color="positive" block icon-left (click)="goToRoot()">\n    <ion-icon name="close-circle"></ion-icon>\n    nope, I do it myself\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/mbuescher/work/PLAYGROUND/servicejam/app/Resources/switch-app/src/pages/detail/detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Detail2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todos2_todos2__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Detail2Page = (function () {
    function Detail2Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Detail2Page.prototype.goToTodos2 = function (params) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__todos2_todos2__["a" /* Todos2Page */]);
    };
    Detail2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail2',template:/*ion-inline-start:"/Users/mbuescher/work/PLAYGROUND/servicejam/app/Resources/switch-app/src/pages/detail2/detail2.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Detail\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <h1 id="detail-heading1" style="color:#000000;">\n    Income tax\n  </h1>\n  <div id="detail-markdown3" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec hendrerit ipsum, et blandit nunc. Maecenas et magna ut arcu dapibus interdum at quis felis. Nulla lorem neque, dapibus eu arcu ut, sagittis bibendum leo. Morbi in hendrerit orci. Donec\n      ultricies ante id ex maximus, id sagittis est auctor. Aenean interdum magna nec libero ullamcorper ullamcorper. Mauris mollis ante iaculis faucibus ornare. Mauris viverra sapien nec tempus mattis.\n    </p>\n  </div>\n  <ion-list id="detail-list5">\n    <ion-item color="none" id="detail-list-item15">\n      steuerklasse 1\n    </ion-item>\n    <ion-item color="none" id="detail-list-item16">\n      34000 euros\n    </ion-item>\n  </ion-list>\n  <button id="detail-button1" ion-button color="balanced" block icon-left on-click="goToTodos2()">\n    <ion-icon name="checkmark-circle"></ion-icon>\n    Accept\n  </button>\n  <button id="detail-button2" ion-button color="positive" block icon-left (click)="goBack()">\n    <ion-icon name="close-circle"></ion-icon>\n    No\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/mbuescher/work/PLAYGROUND/servicejam/app/Resources/switch-app/src/pages/detail2/detail2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], Detail2Page);
    return Detail2Page;
}());

//# sourceMappingURL=detail2.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todos2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Todos2Page = (function () {
    function Todos2Page(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        var toast = this.toastCtrl.create({
            message: 'Your "Cancel phone contract" is already done by 80%. How far are you?',
            showCloseButton: true,
            closeButtonText: 'Ok',
            duration: 30000
        });
        setTimeout(function () {
            toast.present({});
        }, 10000);
    }
    Todos2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-todos2',template:/*ion-inline-start:"/Users/mbuescher/work/PLAYGROUND/servicejam/app/Resources/switch-app/src/pages/todos2/todos2.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      To-Dos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6">\n  <ion-list id="todos2-list6">\n    <ion-item id="todos2-checkbox13" class="red">\n      <ion-label>\n        Income tax\n      </ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n    <ion-item id="todos2-checkbox8">\n      <ion-label>\n        Laundry\n      </ion-label>\n      <ion-checkbox [checked]="true"></ion-checkbox>\n    </ion-item>\n    <ion-item id="todos2-checkbox11">\n      <ion-label>\n        Pick holliday\n      </ion-label>\n      <ion-checkbox [checked]="true"></ion-checkbox>\n    </ion-item>\n    <ion-item id="todos2-checkbox12" style="opacity: 0.7; background: lightseagreen">\n      <ion-label>\n        Cancel phone contract\n      </ion-label>\n      <ion-checkbox [disabled]="true"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/mbuescher/work/PLAYGROUND/servicejam/app/Resources/switch-app/src/pages/todos2/todos2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], Todos2Page);
    return Todos2Page;
}());

//# sourceMappingURL=todos2.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/mbuescher/work/PLAYGROUND/servicejam/app/Resources/switch-app/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <ion-list id="settings-list3">\n    <ion-item id="settings-list-item-container1">\n      <div id="settings-markdown2" class="show-list-numbers-and-dots">\n        <p style="margin-top:0px;color:#000000;">\n          Some friendly\n          <strong>\n            markdown\n          </strong>\n        </p>\n      </div>\n    </ion-item>\n  </ion-list>\n  <ion-list id="settings-list4">\n    <ion-item id="settings-textarea1">\n      <ion-label>\n        Text\n      </ion-label>\n      <ion-textarea placeholder=""></ion-textarea>\n    </ion-item>\n    <ion-item color="none" id="settings-list-item12">\n      Item 1\n    </ion-item>\n    <ion-item color="none" id="settings-list-item13">\n      Item 2\n    </ion-item>\n    <ion-item color="none" id="settings-list-item14">\n      Item 3\n    </ion-item>\n    <ion-item id="settings-toggle1">\n      <ion-label>\n        Toggle\n      </ion-label>\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item id="settings-toggle2">\n      <ion-label>\n        Toggle\n      </ion-label>\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item id="settings-select1">\n      <ion-label>\n        Select\n      </ion-label>\n      <ion-select name=""></ion-select>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/mbuescher/work/PLAYGROUND/servicejam/app/Resources/switch-app/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_marketplace_marketplace__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_todos_todos__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_todos2_todos2__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_detail2_detail2__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_marketplace_marketplace__["a" /* MarketplacePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_todos_todos__["a" /* TodosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_todos2_todos2__["a" /* Todos2Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detail2_detail2__["a" /* Detail2Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_marketplace_marketplace__["a" /* MarketplacePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_todos_todos__["a" /* TodosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_todos2_todos2__["a" /* Todos2Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detail2_detail2__["a" /* Detail2Page */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_todos_todos__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_detail_detail__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, alertController) {
        var _this = this;
        this.alertController = alertController;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_todos_todos__["a" /* TodosPage */];
        var alert = this.alertController.create({
            title: 'Task not fullfilled',
            message: 'Your task "Cancel phone contract" is not done for a week. Should someone else do that for your?',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_detail_detail__["a" /* DetailPage */]);
                    }
                },
                {
                    text: 'No, I will do it.',
                    role: 'cancel'
                }
            ]
        });
        setTimeout(function () {
            alert.present();
        }, 5000);
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mbuescher/work/PLAYGROUND/servicejam/app/Resources/switch-app/src/app/app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/mbuescher/work/PLAYGROUND/servicejam/app/Resources/switch-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todos_todos__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__marketplace_marketplace__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsControllerPage = (function () {
    function TabsControllerPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__todos_todos__["a" /* TodosPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__marketplace_marketplace__["a" /* MarketplacePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
    }
    TabsControllerPage.prototype.goToTodos = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__todos_todos__["a" /* TodosPage */]);
    };
    TabsControllerPage.prototype.goToSettings = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
    ], TabsControllerPage.prototype, "navCtrl", void 0);
    TabsControllerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs-controller',template:/*ion-inline-start:"/Users/mbuescher/work/PLAYGROUND/servicejam/app/Resources/switch-app/src/pages/tabs-controller/tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Todos" tabIcon="clock" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="market" tabIcon="analytics" id="tabsController-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="settings" tabIcon="settings" id="tabsController-tab3"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/mbuescher/work/PLAYGROUND/servicejam/app/Resources/switch-app/src/pages/tabs-controller/tabs-controller.html"*/
        })
    ], TabsControllerPage);
    return TabsControllerPage;
}());

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodosPage = (function () {
    function TodosPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TodosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-todos',template:/*ion-inline-start:"/Users/mbuescher/work/PLAYGROUND/servicejam/app/Resources/switch-app/src/pages/todos/todos.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      To-Dos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <ion-list id="todos-list1">\n    <ion-item id="todos-checkbox1">\n      <ion-label>\n        Laundry\n      </ion-label>\n      <ion-checkbox [checked]="true"></ion-checkbox>\n    </ion-item>\n    <ion-item id="todos-checkbox6">\n      <ion-label>\n        Pick holliday\n      </ion-label>\n      <ion-checkbox [checked]="true"></ion-checkbox>\n    </ion-item>\n    <ion-item id="todos-checkbox7">\n      <ion-label>\n        Cancel phone contract\n      </ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/mbuescher/work/PLAYGROUND/servicejam/app/Resources/switch-app/src/pages/todos/todos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TodosPage);
    return TodosPage;
}());

//# sourceMappingURL=todos.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map