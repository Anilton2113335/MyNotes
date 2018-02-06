webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__textEditor_textEditor__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classOfArray_ArrayHolder__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewEdit_viewEdit__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, holder) {
        this.navCtrl = navCtrl;
        this.holder = holder;
        this.items = new Array();
        this.items = holder.getArray();
    }
    HomePage.prototype.addItem = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__textEditor_textEditor__["a" /* textEditorPage */]);
        //this.itemems.length+=1;
        //console.log('ll', this.items.length);
        /**
        this.item = ['Title 1','Ang alamat bow','timeSaved'];
        this.items.push(this.item);
        console.log('b4', this.items);
    
        this.items[0][0] = "Title 2";
        console.log('aftr', this.items);
        **/
    };
    HomePage.prototype.viewNote = function (title, descp, date) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__viewEdit_viewEdit__["a" /* ViewEditPage */], {
            title: title,
            descp: descp,
            date: date
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Doraemon\Notes\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      MY NOTES\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n			 <div style="background-color:#5E815B;" *ngFor="let item of items" detail-none (click)="viewNote(item[0],item[1],item[2])">\n		        <ion-item text-wrap text-center class="article" style="width: 100%; height: 20%; background-color: #4b8c61;">\n		        <div text-color="secondary"><b style="font-size: 20px">{{item[0] | uppercase}}</b></div>\n		        <br>\n		        <p color="#">{{item[2]}}</p>\n		    	</ion-item>\n    		</div>\n	<ion-navbar color="secondary" style="width: 100%; height: 100%; min-height: 100%; min-width: 100%">\n	</ion-navbar>\n	<ion-fab bottom right style="margin-right: 30px; margin-bottom: 30px">\n            <button ion-fab class="pop-in" (click)="addItem()"><img src="../assets/icon/plus.png"></button>\n    </ion-fab>\n</ion-content>	'/*ion-inline-end:"C:\Users\Doraemon\Notes\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__classOfArray_ArrayHolder__["a" /* ArrayHolder */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return textEditorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classOfArray_ArrayHolder__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var textEditorPage = (function () {
    function textEditorPage(navCtrl, holder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.holder = holder;
        this.alertCtrl = alertCtrl;
        this.data = new Array();
        this.todo = { title: "", disp: "Content here.." };
    }
    textEditorPage.prototype.test = function () {
        if (this.todo.disp && this.todo.title != '') {
            var date = new Date().toLocaleDateString();
            var title = JSON.stringify(this.todo.title);
            var desc = JSON.stringify(this.todo.disp);
            this.data.push(title.substring(1, title.length - 1), desc.substring(1, desc.length - 1), date);
            console.log(this.data);
            this.holder.pushArrayWith(this.data);
            this.navCtrl.pop();
        }
        else {
            if (this.todo.title == '') {
                var alert = this.alertCtrl.create({
                    title: 'No Title',
                    subTitle: 'Fill up title field.',
                    buttons: ['Ok']
                });
                alert.present();
            }
            else {
                var alert = this.alertCtrl.create({
                    title: 'No Content',
                    subTitle: 'Fill up Contet field.',
                    buttons: ['Ok']
                });
                alert.present();
            }
        }
    };
    textEditorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editor',template:/*ion-inline-start:"C:\Users\Doraemon\Notes\src\pages\textEditor\textEditor.html"*/'<ion-header>\n\n	<ion-navbar text-center color="primary">\n\n		<ion-title>Write Note</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n	<div>\n\n		<table style="width: 100%">\n\n			<tr style="border: solid 0.8px">\n\n				<th><b style="width: 10%; height: 12%;">Title :</b></th>\n\n				<th><input  [(ngModel)]="todo.title" value="tyss" type= "text" style="height: 12%; width: 100%; color: #7FA1BA; border: solid 0.8px "></th>\n\n			</tr>\n\n		</table>\n\n	</div>\n\n	<textarea [(ngModel)]="todo.disp" maxLength="500" style="width: 100%; height: 96%; min-height: 96%; color: #07395C; background-color: #5FA259" ></textarea>\n\n</ion-content>\n\n<ion-footer>\n\n	<ion-navbar text-center color="primary">\n\n			<button (click)=test() style="height: 100%; width:100%; background-color: #38AA2E;">	\n\n				<h3><b>SUBMIT</b></h3>\n\n			</button>\n\n	</ion-navbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Doraemon\Notes\src\pages\textEditor\textEditor.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__classOfArray_ArrayHolder__["a" /* ArrayHolder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__classOfArray_ArrayHolder__["a" /* ArrayHolder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
    ], textEditorPage);
    return textEditorPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=textEditor.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classOfArray_ArrayHolder__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewEditPage = (function () {
    function ViewEditPage(navCtrl, navParams, holder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.holder = holder;
        this.isEditable = false;
        this.title = this.navParams.get('title');
        this.descp = this.navParams.get('descp');
        this.date = this.navParams.get('date');
        this.newDesc = this.navParams.get('descp');
        //console.log('test', viewDecoder(this.newDesc)); 
    }
    ViewEditPage.prototype.viewDecoder = function (crypt) {
        var newline = String.fromCharCode(13, 10);
        return crypt.replaceAll('\\n', newline);
    };
    ViewEditPage.prototype.delete = function () {
        this.holder.popArrayDataInIndex(this.title, this.descp, this.date);
        this.navCtrl.pop();
    };
    ViewEditPage.prototype.edit = function () {
        this.isEditable = true;
    };
    ViewEditPage.prototype.save = function () {
        var x = JSON.stringify(this.newDesc);
        console.log(x);
        this.holder.updateIndexDescOf(this.title, this.descp, this.date, x.substring(1, x.length - 1));
        this.navCtrl.pop();
    };
    ViewEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewEdit',template:/*ion-inline-start:"C:\Users\Doraemon\Notes\src\pages\viewEdit\viewEdit.html"*/'<ion-header>\n\n	<ion-navbar text-center color="primary">\n\n		<ion-title>{{title | uppercase}}</ion-title>	\n\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n	<div>\n\n		<table style="width: 100%">\n\n			<tr style="border: solid 0.8px">\n\n			</tr>\n\n		</table>\n\n	</div>\n\n	<div style="float: right; background-color: #2A7B23">	\n\n		<tr>\n\n			<th>\n\n				<button style="height: 10%; min-height: 10%;" (click)="edit()" *ngIf = "!isEditable">\n\n					<p>Edit</p>\n\n				</button>\n\n				<button style="height: 10%; min-height: 10%;" (click)="save()" *ngIf = "isEditable">\n\n					<p>save</p>\n\n				</button>\n\n			</th>\n\n			<th>\n\n				<button style="height: 10%; min-height: 10%;" (click)="delete()">\n\n					<p>Delete</p>\n\n				</button>\n\n			</th>\n\n		</tr>\n\n	</div>\n\n	<b><textarea maxLength="500" style="width: 100%; height: 92%; min-height: 92%; color: #07395C; background-color: #5FA259" readonly="true" *ngIf = "!isEditable">{{descp}}</textarea></b>\n\n	<b><textarea maxLength="500" [(ngModel)]="newDesc" style="width: 100%; height: 92%; min-height: 92%; color: #07395C; background-color: #5FA259" *ngIf = "isEditable">{{newDesc}}</textarea></b>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Doraemon\Notes\src\pages\viewEdit\viewEdit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__classOfArray_ArrayHolder__["a" /* ArrayHolder */]])
    ], ViewEditPage);
    return ViewEditPage;
}());

//# sourceMappingURL=viewEdit.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);



window["$"] = __WEBPACK_IMPORTED_MODULE_2_jquery__;
window["jQuery"] = __WEBPACK_IMPORTED_MODULE_2_jquery__;
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_textEditor_textEditor__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_classOfArray_ArrayHolder__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_viewEdit_viewEdit__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_froala_editor_js_froala_editor_pkgd_min_js__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_froala_editor_js_froala_editor_pkgd_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_froala_editor_js_froala_editor_pkgd_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_froala_wysiwyg__ = __webpack_require__(280);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_textEditor_textEditor__["a" /* textEditorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_viewEdit_viewEdit__["a" /* ViewEditPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_textEditor_textEditor__["a" /* textEditorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_viewEdit_viewEdit__["a" /* ViewEditPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__pages_classOfArray_ArrayHolder__["a" /* ArrayHolder */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Doraemon\Notes\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Doraemon\Notes\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayHolder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArrayHolder = (function () {
    function ArrayHolder() {
        this.item = new Array();
    }
    ArrayHolder.prototype.pushArrayWith = function (data1) {
        this.item.push(data1);
    };
    ArrayHolder.prototype.popArrayDataInIndex = function (title, desc, date) {
        for (var i = 0; i < this.item.length; i++) {
            if (title == this.item[i][0] && desc == this.item[i][1] && date == this.item[i][2]) {
                this.item.splice(i, 1);
            }
        }
    };
    ArrayHolder.prototype.getArray = function () {
        return this.item;
    };
    ArrayHolder.prototype.updateIndexDescOf = function (oldTitle, oldDesc, oldDate, newDesc) {
        var date = new Date().toLocaleDateString();
        for (var i = 0; i < this.item.length; i++) {
            if (oldTitle == this.item[i][0] && oldDesc == this.item[i][1] && oldDate == this.item[i][2]) {
                this.item[i][1] = newDesc;
                this.item[i][2] = date;
            }
        }
    };
    ArrayHolder = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ArrayHolder);
    return ArrayHolder;
}());

//# sourceMappingURL=ArrayHolder.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map