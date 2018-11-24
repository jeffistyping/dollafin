(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td,th {\n    padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZCx0aCB7XG4gICAgcGFkZGluZzogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light bg-success\" style=\"box-shadow: 0 0px 10px 1px rgba(0,0,0,1)\">\n    <span class=\"navbar-text text-light\"><h3>dolla dolla bills</h3></span>\n</nav>\n\n<div class=\"row bg-light\">\n\n    <div class=\"col-md-4\" style=\"height: 100vh; position: fixed\">\n\n        <img src=\"{{src}}\" style=\"width:80%\" (mousedown)=\"onClickPig();\" (mouseup)=\"onHover();\" (mouseenter)=\"onHover();\" (mouseleave)=\"offHover();\" class=\"mx-auto d-block mt-5 pt-5\" (click)=\"addMoney()\"/>\n        <h1 class=\"text-center pt-2 text-success\">Balance: ${{ money | number : '1.2-2' }}</h1>\n\n    </div>\n    <div class=\"col-md-5 offset-4\" style=\"height: 100vh; position: fixed\">\n\n    </div>\n    <div class=\"col-md-3 mt-5 pt-4 mb-3 pb-1 offset-9\" style=\"min-height: 90vh;  overflow: auto\">\n        <table class=\"table table-striped table-dark table-hover\">\n            <thead>\n                <th>Item</th>\n                <th>Cost</th>\n                <th>Category</th>\n                <th>Status</th>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of items\">\n                    <td>{{ item.name }}</td>\n                    <td>${{ item.cost | number : '1.2-2' }}</td>\n                    <td>{{ item.category }}</td>\n                    <td><a (click)=\"buy(item)\" class=\"btn btn-success\">Buy</a></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n</div>\n\n<div class=\"row bg-dark text-white fixed-bottom\" style=\"height:6vh\">\n    <span style=\"margin:auto\">\n        {{ log }}\n    </span>>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// salary const gonna get from backend
var SALARY = 20;
// event constants
var DEATH = 0.0125;
var BAD = 0.175;
var SALE = 0.45;
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.items = [];
        this.categories = [];
        this.addMoney = function () {
            this.money += this.salary;
        };
        this.buy = function (item) {
            if (this.money < item.cost) {
                return;
            }
            console.log("bought " + item.name + " for " + item.cost);
            this.money -= item.cost;
        };
        this.onHover = function () {
            this.src = 'assets/bank.png';
        };
        this.offHover = function () {
            this.src = 'assets/banknocoin.png';
        };
        this.onClickPig = function () {
            this.src = 'assets/moneypig.png';
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.salary = SALARY;
        this.money = 0;
        this.title = "GAME";
        this.src = "assets/banknocoin.png";
        this.log = "";
        for (var i = 0; i < 10; i++) {
            this.items.push({
                'name': 'item' + i,
                'cost': Math.random() * 100,
                'category': 'category' + (i % 3)
            });
        }
        this.game = setInterval(function () {
            var r = Math.random();
            if (r < DEATH) {
                alert("You died");
                window.location.reload(false);
            }
            else if (r < BAD) {
                _this.log = "Something bad happened. You lost $" + Math.floor(Math.random() * 1000);
            }
            else if (r < SALE) {
                // reduce the cost for now and increase it back in 1s
                var i_1 = _this.items[Math.floor(Math.random() * _this.items.length)];
                var sale_1 = 0.5 + (Math.random() * 0.4);
                i_1.cost *= sale_1;
                setTimeout(function () { return i_1.cost /= sale_1; }, 1000);
                _this.log = "Item \"" + i_1.name + "\" is on sale";
            }
            else {
                _this.log = '';
                console.log("But nothing happened!");
            }
        }, 1000);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jf/github/dollafin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map