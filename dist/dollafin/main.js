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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n\t<button class = \"btn btn-primary text-center\" routerLink=\"/login\">Start</button>\n    <router-outlet></router-outlet>\n</div>\t"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/login/login.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game/game.component */ "./src/game/game.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'game', component: _game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)
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

/***/ "./src/game/game.component.css":
/*!*************************************!*\
  !*** ./src/game/game.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*td,th {*/\n    /*padding: 10px;*/\n    /*}*/\n    #categoryDoughnut {\n    max-width: 45vw;\n    max-height: 45vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXO0lBQ1Asa0JBQWtCO0lBQ3RCLEtBQUs7SUFFTDtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyp0ZCx0aCB7Ki9cbiAgICAvKnBhZGRpbmc6IDEwcHg7Ki9cbi8qfSovXG5cbiNjYXRlZ29yeURvdWdobnV0IHtcbiAgICBtYXgtd2lkdGg6IDQ1dnc7XG4gICAgbWF4LWhlaWdodDogNDV2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/game/game.component.html":
/*!**************************************!*\
  !*** ./src/game/game.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light bg-success\" style=\"height:5vh;box-shadow: 0 0px 10px 1px rgba(0,0,0,1)\">\n    <span style=\"font-family: 'Comfortaa', cursive;\" class=\"text-white\"><h5>Dollafin</h5></span>\n</nav>\n\n<div class=\"container-fluid\">\n    <div class=\"row bg-light\">\n        <div class=\"col-md-3 bg-white\" style=\"height: 100vh; position: fixed\">\n            <img src=\"{{src}}\" style=\"width:80%\" (mousedown)=\"onClickPig();\" (mouseup)=\"onHover();\" (mouseenter)=\"onHover();\" (mouseleave)=\"offHover();\" class=\"mx-auto d-block mt-5 pt-5\" (click)=\"addMoney()\"/>\n            <h1 class=\"text-center pt-2 text-success\">Balance: ${{ money | number : '1.2-2' }}</h1>\n        </div>\n        <div class=\"col-6 offset-3 mt-4 pt-4\" style=\"max-height: 100vh; position: fixed\">\n            <div class=\"container\">\n                <canvas id=\"purchaseChart\" width=\"100vw\" height=\"40vh\"></canvas>\n                <canvas id=\"categoryDoughnut\"></canvas>\n            </div>\n        </div>\n        <div class=\"col-md-3 mt-4 pt-4 mb-3 pb-1 offset-9 bg-dark\" style=\"min-height: 120vh;  overflow: auto box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\">\n            <table class=\"table table-striped table-dark table-hover\">\n                <thead>\n                <th>Item</th>\n                <th>Cost</th>\n                <th>Category</th>\n                <th>Status</th>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of items\">\n                    <td>{{ item.name }}</td>\n                    <td>${{ item.cost | number : '1.2-2' }}</td>\n                    <td>{{ item.category }}</td>\n                    <td><a (click)=\"buy(item)\" class=\"btn btn-success\">Buy</a></td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n\n    </div>\n\n    <div class=\"row text-white fixed-bottom\" style=\"height:5vh; background-color: #212529\">\n    <span style=\"margin:auto\">\n        {{ log }}\n    </span>>\n    </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/game/game.component.ts":
/*!************************************!*\
  !*** ./src/game/game.component.ts ***!
  \************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../script.js */ "./src/script.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// salary const gonna get from backend
var SALARY = 20;
// event constants
var DEATH = 0;
var BAD = 0.175;
var SALE = 0.45;
var GameComponent = /** @class */ (function () {
    function GameComponent() {
        this.items = [];
        this.categories = [];
        this.addMoney = function (item) {
            this.money += this.salary;
            this.clicks += 1;
            if (this.clicks % 10 == 0) {
                Object(_script_js__WEBPACK_IMPORTED_MODULE_1__["gainMoney"])(this.money, this.clicks, this.itemBought);
                this.itemBought = "";
                return;
            }
        };
        this.buy = function (item) {
            if (this.money < item.cost) {
                return;
            }
            console.log("bought " + item.name + " for " + item.cost);
            this.money -= item.cost;
            if (this.itemBought == "") {
                this.itemBought += item.name;
            }
            else if (!this.itemBought.includes(item.name)) {
                this.itemBought += "," + item.name;
            }
            Object(_script_js__WEBPACK_IMPORTED_MODULE_1__["buy"])(item.cost, item.category);
        };
        this.onHover = function () {
            this.src = '../assets/bank.png';
        };
        this.offHover = function () {
            this.src = '../assets/banknocoin.png';
        };
        this.onClickPig = function () {
            this.src = '../assets/moneypig.png';
        };
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(_script_js__WEBPACK_IMPORTED_MODULE_1__["draw"])();
        this.salary = SALARY;
        this.money = 0;
        this.clicks = 0;
        this.title = "GAME";
        this.src = "../assets/banknocoin.png";
        this.log = "";
        for (var i = 0; i < 10; i++) {
            this.items.push({
                'name': 'item' + i,
                'cost': parseFloat((Math.random() * 100).toFixed(2)),
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
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/game/game.component.css")]
        })
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/login/login.component.css":
/*!***************************************!*\
  !*** ./src/login/login.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/login/login.component.html":
/*!****************************************!*\
  !*** ./src/login/login.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav class=\"navbar fixed-top navbar-light bg-success\" style=\"box-shadow: 0 0px 10px 1px rgba(0,0,0,1)\">\n        <span style=\"font-family: 'Comfortaa', cursive;\" class=\"navbar-text text-light\">Dollafin</span>\n    </nav>\n\n    <div class=\"div mt-5 pt-5\">\n    </div>\n\n    <form class=\"card mb-5\">\n        <div class=\"card-header\">\n            <h4>Input Information</h4>\n        </div>\n        <div class=\"card-body\">\n\n            <h5 class=\"pb-2\">Basic Information</h5>\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-2 col-form-label\">Name</label>\n                <div class=\"col-10\">\n                    <input class=\"form-control\" type=\"text\" value=\"Kartik Raj\" id=\"example-text-input\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"example-number-input\" class=\"col-2 col-form-label\">Age</label>\n                <div class=\"col-10\">\n                    <input class=\"form-control\" type=\"number\" value=\"14\" id=\"example-number-input\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-2 col-form-label\">Financial Institution</label>\n                <div class=\"col-10\">\n                    <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" id=\"financial-institution\">\n                        <option selected>Choose...</option>\n                        <option value=\"RBC\">RBC</option>\n                        <option value=\"Scotiabank\">Scotiabank</option>\n                        <option value=\"TD\">TD</option>\n                        <option value=\"CIBC\">CIBC</option>\n                        <option value=\"BMO\">BMO</option>\n                    </select>\n                </div>\n            </div>\n            <hr />\n\n            <h5 class=\"pb-2\">Top 3 Financial Goals</h5>\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Item 1</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"text\" value=\"Car\" id=\"item-name-1\">\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label text-right\">Price $</label>\n                <div class=\"col-2\">\n                    <input class=\"form-control\" type=\"number\" value=\"27563\" id=\"item-value-1\">\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-2 col-form-label text-right\">Get by age</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"number\" value=\"20\" id=\"item-age-1\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Item 2</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"text\" value=\"Condo\" id=\"item-name-2\">\n                </div>\n\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label text-right\">Price $</label>\n                <div class=\"col-2\">\n                    <input class=\"form-control\" type=\"number\" value=\"495100\" id=\"item-value-2\">\n                </div>\n\n\n                <label for=\"example-text-input\" class=\"col-2 col-form-label text-right\">Get by age</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"number\" value=\"24\" id=\"item-age-2\">\n                </div>\n\n\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Item 3</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"text\" value=\"House\" id=\"item-name-3\">\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label text-right\">Price $</label>\n                <div class=\"col-2\">\n                    <input class=\"form-control\" type=\"number\" value=\"782129\" id=\"item-value-3\">\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-2 col-form-label text-right\">Get by age</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"number\" value=\"30\" id=\"item-age-3\">\n                </div>\n            </div>\n\n            <hr />\n\n            <h5 class=\"pb-2\">10 Most Recent Purchases</h5>\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Item 1</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"text\" value=\"Ultraboosts\" id=\"purchase-name-1\">\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Group</label>\n                <div class=\"col-3\">\n                    <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" id=\"purchase-category-1\">\n                        <option>Choose...</option>\n                        <option value=\"Education\">Education</option>\n                        <option value=\"Food\">Food</option>\n                        <option value=\"Clothing\" selected>Clothing</option>\n                        <option value=\"Entertainment\">Entertainment</option>\n                        <option value=\"Gifts\">Gifts</option>\n                        <option value=\"Other\">Other</option>\n                    </select>\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Price $</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"number\" value=\"250.0\" id=\"purchase-price-1\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Item 2</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"text\" value=\"Pizza\" id=\"purchase-name-2\">\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Group</label>\n                <div class=\"col-3\">\n                    <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" id=\"purchase-category-2\">\n                        <option>Choose...</option>\n                        <option value=\"Education\">Education</option>\n                        <option value=\"Food\" selected>Food</option>\n                        <option value=\"Clothing\">Clothing</option>\n                        <option value=\"Entertainment\">Entertainment</option>\n                        <option value=\"Gifts\">Gifts</option>\n                        <option value=\"Other\">Other</option>\n                    </select>\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Price $</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"number\" value=\"6.99\" id=\"purchase-price-2\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Item 3</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"text\" value=\"Coffee\" id=\"purchase-name-3\">\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Group</label>\n                <div class=\"col-3\">\n                    <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" id=\"purchase-category-3\">\n                        <option>Choose...</option>\n                        <option value=\"Education\">Education</option>\n                        <option value=\"Food\" selected>Food</option>\n                        <option value=\"Clothing\">Clothing</option>\n                        <option value=\"Entertainment\">Entertainment</option>\n                        <option value=\"Gifts\">Gifts</option>\n                        <option value=\"Other\">Other</option>\n                    </select>\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Price $</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"number\" value=\"1.75\" id=\"purchase-price-3\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Item 4</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"text\" value=\"Nintendo Switch\" id=\"purchase-name-4\">\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Group</label>\n                <div class=\"col-3\">\n                    <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" id=\"purchase-category-4\">\n                        <option>Choose...</option>\n                        <option value=\"Education\">Education</option>\n                        <option value=\"Food\">Food</option>\n                        <option value=\"Clothing\">Clothing</option>\n                        <option value=\"Entertainment\" selected>Entertainment</option>\n                        <option value=\"Gifts\">Gifts</option>\n                        <option value=\"Other\">Other</option>\n                    </select>\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Price $</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"number\" value=\"379.99\" id=\"purchase-price-4\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Item 5</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"text\" value=\"Rocket League\" id=\"purchase-name-5\">\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Group</label>\n                <div class=\"col-3\">\n                    <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" id=\"purchase-category-5\">\n                        <option>Choose...</option>\n                        <option value=\"Education\">Education</option>\n                        <option value=\"Food\">Food</option>\n                        <option value=\"Clothing\">Clothing</option>\n                        <option value=\"Entertainment\" selected>Entertainment</option>\n                        <option value=\"Gifts\">Gifts</option>\n                        <option value=\"Other\">Other</option>\n                    </select>\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Price $</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"number\" value=\"21.99\" id=\"purchase-price-5\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Item 6</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"text\" value=\"Physics Textbook\" id=\"purchase-name-6\">\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Group</label>\n                <div class=\"col-3\">\n                    <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" id=\"purchase-category-6\">\n                        <option>Choose...</option>\n                        <option value=\"Education\" selected>Education</option>\n                        <option value=\"Food\">Food</option>\n                        <option value=\"Clothing\">Clothing</option>\n                        <option value=\"Entertainment\">Entertainment</option>\n                        <option value=\"Gifts\">Gifts</option>\n                        <option value=\"Other\">Other</option>\n                    </select>\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Price $</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"number\" value=\"309.80\" id=\"purchase-price-6\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Item 7</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"text\" value=\"Toque\" id=\"purchase-name-7\">\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Group</label>\n                <div class=\"col-3\">\n                    <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" id=\"purchase-category-7\">\n                        <option>Choose...</option>\n                        <option value=\"Education\">Education</option>\n                        <option value=\"Food\">Food</option>\n                        <option value=\"Clothing\">Clothing</option>\n                        <option value=\"Entertainment\">Entertainment</option>\n                        <option value=\"Gifts\" selected>Gifts</option>\n                        <option value=\"Other\">Other</option>\n                    </select>\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Price $</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"number\" value=\"21.99\" id=\"purchase-price-7\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Item 8</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"text\" value=\"Toothbrush\" id=\"purchase-name-8\">\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Group</label>\n                <div class=\"col-3\">\n                    <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" id=\"purchase-category-8\">\n                        <option>Choose...</option>\n                        <option value=\"Education\">Education</option>\n                        <option value=\"Food\">Food</option>\n                        <option value=\"Clothing\">Clothing</option>\n                        <option value=\"Entertainment\">Entertainment</option>\n                        <option value=\"Gifts\">Gifts</option>\n                        <option value=\"Other\" selected>Other</option>\n                    </select>\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Price $</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"number\" value=\"3.99\" id=\"purchase-price-8\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Item 9</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"text\" value=\"Hoodie\" id=\"purchase-name-9\">\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Group</label>\n                <div class=\"col-3\">\n                    <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" id=\"purchase-category-9\">\n                        <option>Choose...</option>\n                        <option value=\"Education\">Education</option>\n                        <option value=\"Food\">Food</option>\n                        <option value=\"Clothing\" selected>Clothing</option>\n                        <option value=\"Entertainment\">Entertainment</option>\n                        <option value=\"Gifts\">Gifts</option>\n                        <option value=\"Other\">Other</option>\n                    </select>\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Price $</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"number\" value=\"39.99\" id=\"purchase-price-9\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Item 10</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"text\" value=\"Burrito\" id=\"purchase-name-10\">\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Group</label>\n                <div class=\"col-3\">\n                    <select class=\"custom-select mb-2 mr-sm-2 mb-sm-0\" id=\"purchase-category-10\">\n                        <option>Choose...</option>\n                        <option value=\"Education\">Education</option>\n                        <option value=\"Food\" selected>Food</option>\n                        <option value=\"Clothing\">Clothing</option>\n                        <option value=\"Entertainment\">Entertainment</option>\n                        <option value=\"Gifts\">Gifts</option>\n                        <option value=\"Other\">Other</option>\n                    </select>\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Price $</label>\n                <div class=\"col-3\">\n                    <input class=\"form-control\" type=\"number\" value=\"8.99\" id=\"purchase-price-10\">\n                </div>\n            </div>\n\n\n\n\n\n        </div>\n        <button routerLink=\"/game\" class=\"btn btn-primary\">Submit</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/login/login.component.ts":
/*!**************************************!*\
  !*** ./src/login/login.component.ts ***!
  \**************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



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

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! exports provided: gainMoney, buy, draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gainMoney", function() { return gainMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buy", function() { return buy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
var days = [];
// For drawing the lines

var NetBalance = [];

var moneySpent = [];

var itemBought = [];

var itemCategory = [];

var items = [];
var itemsValue = [];
var hidden = [];

var doughnutty;
var lineChart;

let day = 0;

function updateText(chart) {
  chart.options.elements.center.text = getSum();
  chart.update();
}

function updateLine(chart) {
  chart.update();
}

let getSum = function () {
  let sum = 0;
  for (let i = 0; i < itemsValue.length; i++) {
    if (!hidden.includes(items[i])) {
      sum += parseFloat(itemsValue[i].toFixed(2));
    }
  }
  return '$' + parseFloat(sum.toFixed(2));
}

function gainMoney(balance, clicks, name) {
  day += 0.5;
  days.push(day);
  itemBought.push(name);
  NetBalance.push(balance);
  console.log(days);
  console.log(itemBought);
  console.log(NetBalance);
  updateLine(lineChart);
}

function buy(cost, category) {
  let c = category.trim();
  let i = items.indexOf(c);
  if (i == -1) {
    items.push(c)
    itemsValue.push(parseFloat(cost.toFixed(2)));
  } else {
    itemsValue[i] = parseFloat((itemsValue[i] + cost).toFixed(2));
  }

  updateText(doughnutty);
}

// Our labels along the x-axis
function draw() {

  for (let i = 0; i < days.length; i++) {
    if (moneySpent[i + 1] < 0) {
      if (!items.includes(itemCategory[i + 1])) {
        items.push(itemCategory[i + 1]);
        itemsValue.push(parseFloat(moneySpent[i + 1] * -1).toFixed(2));
      } else {
        itemsValue[items.indexOf(itemCategory[i + 1])] = (itemsValue[items.indexOf(itemCategory[i + 1])] + (moneySpent[i + 1] * -1)).toFixed(2);
      }
    }
  }

  var ctx = document.getElementById("purchaseChart");
  lineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: days,
      datasets: [{
          data: NetBalance,
          label: "Net Balance",
          borderColor: "#EBBB32",
          backgroundColor: "#EBBB32",
          fill: false
        },
        {
          data: [],
          label: "Net Income",
          borderColor: "#0fa91b",
          backgroundColor: "#0fa91b",
          fill: false
        }
      ],
    },

    options: {
      title: {
        display: true,
        text: "Net Balance Growth in a Month"
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Net Balance ($)"
          }
        }],
        xAxes: [{
          ticks:{
            stepSize: 1
          },
          scaleLabel: {
            display: true,
            labelString: "Day"
          }
        }]
      },
      plugins: {
        datalabels: {
          color: 'black',
          color: function (context) {
            // Change the label text color based on our new `hovered` context value.
            return context.hovered ? "blue" : "black";
          },
          font: function (context) {
            // Change the label text color based on our new `hovered` context value.
            return context.hovered ? {
              weight: 'bold',
              size: 12
            } : {
              weight: 'bold',
              size: 11
            };
          },
          anchor: "end",
          align: "90",
          offset: function (context) {
            if (context.dataIndex % 2) {
              return "0"
            }
            return "6";
          },
          formatter: function (value, context) {
            if ((NetBalance[context.dataIndex + 1] - NetBalance[context.dataIndex]) < 0 && context.dataset.label == "Net Balance") {
              return context.hovered ? itemBought[context.dataIndex + 1] : "$" + parseFloat((NetBalance[context.dataIndex + 1] - NetBalance[context.dataIndex]).toFixed(2));
            }
            return null;
          },
          listeners: {
            enter: function (context) {

              context.hovered = true;
              return true;
            },
            leave: function (context) {
              // Receives `leave` events for any labels of any dataset.
              context.hovered = false;
              return true;
            }
          }
        }
      }
    }
  });

  var draw = {
    beforeDraw: function (chart) {
      if (chart.config.options.elements.center) {
        var ctx = chart.chart.ctx;

        var centerConfig = chart.config.options.elements.center;
        var fontStyle = centerConfig.fontStyle || 'Arial';
        var txt = centerConfig.text;
        var color = centerConfig.color || '#000';
        var sidePadding = centerConfig.sidePadding || 20;
        var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
        ctx.font = "30px " + fontStyle;

        var stringWidth = ctx.measureText(txt).width;
        var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

        var widthRatio = elementWidth / stringWidth;
        var newFontSize = Math.floor(30 * widthRatio);
        var elementHeight = (chart.innerRadius * 2);

        var fontSizeToUse = Math.min(newFontSize, elementHeight);

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
        var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
        ctx.font = fontSizeToUse + "px " + fontStyle;
        ctx.fillStyle = color;

        ctx.fillText(txt, centerX, centerY);
      }
    }
  };

  Chart.pluginService.register(draw);

  var original = Chart.defaults.doughnut.legend.onClick;
  Chart.defaults.doughnut.legend.onClick = function (e, legendItem) {
    if (hidden.includes(legendItem.text)) {
      hidden.splice(hidden.indexOf(legendItem.text));
    } else {
      hidden.push(legendItem.text);
    }
    original.call(this, e, legendItem);
    updateText(doughnutty);
  };

  doughnutty = new Chart(document.getElementById("categoryDoughnut"), {
    type: 'doughnut',
    data: {
      labels: items,
      datasets: [{
        label: "Purchases by Category ($)",
        //"#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"
        backgroundColor: ["#ffcdb2", "#ffb4a2", "#e5989b", "#b5838d", "#87838e", "#afacb3", "#c9c8cc"],
        data: itemsValue
      }]
    },
    options: {
      legend: {
        position: "bottom"
      },
      title: {
        display: true,
        text: 'Purchases by Category ($)'
      },
      plugins: {
        datalabels: {
          color: 'black',
          anchor: "end",
          align: "end",
          offset: "-5",
          font: {
            size: 10
          },
          formatter: function (value) {
            return value;
          }
        }
      },
      elements: {
        center: {
          text: getSum(),
          color: '#FF6384', // Default is #000000
          fontStyle: 'Arial', // Default is Arial
          sidePadding: 34 // Defualt is 20 (as a percentage)
        }
      }
    }
  });
};

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