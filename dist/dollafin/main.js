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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'main', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { path: '**',
        redirectTo: '/main',
        pathMatch: 'full'
    }
];
// ngModule has to be at the end 
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*td,th {*/\n    /*padding: 10px;*/\n    /*}*/\n    #categoryDoughnut {\n    max-width: 45vw;\n    max-height: 45vh;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVztJQUNQLGtCQUFrQjtJQUN0QixLQUFLO0lBRUw7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKnRkLHRoIHsqL1xuICAgIC8qcGFkZGluZzogMTBweDsqL1xuLyp9Ki9cblxuI2NhdGVnb3J5RG91Z2hudXQge1xuICAgIG1heC13aWR0aDogNDV2dztcbiAgICBtYXgtaGVpZ2h0OiA0NXZoO1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light bg-success\" style=\"height:5vh;box-shadow: 0 0px 10px 1px rgba(0,0,0,1)\">\n    <span class=\"text-white\"><h5>dolla dolla bills</h5></span>\n</nav>\n\n<div class=\"container-fluid\">\n    <div class=\"row bg-light\">\n        <div class=\"col-md-3 bg-white\" style=\"height: 100vh; position: fixed\">\n            <img src=\"{{src}}\" style=\"width:80%\" (mousedown)=\"onClickPig();\" (mouseup)=\"onHover();\" (mouseenter)=\"onHover();\" (mouseleave)=\"offHover();\" class=\"mx-auto d-block mt-5 pt-5\" (click)=\"addMoney()\"/>\n            <h1 class=\"text-center pt-2 text-success\">Balance: ${{ money | number : '1.2-2' }}</h1>\n        </div>\n        <div class=\"col-6 offset-3 mt-4 pt-4\" style=\"max-height: 100vh; position: fixed\">\n            <div class=\"container\">\n                <canvas id=\"purchaseChart\" width=\"100vw\" height=\"40vh\"></canvas>\n                <canvas id=\"categoryDoughnut\"></canvas>\n            </div>\n        </div>\n        <div class=\"col-md-3 mt-4 pt-4 mb-3 pb-1 offset-9 bg-dark\" style=\"min-height: 120vh;  overflow: auto\">\n            <table class=\"table table-striped table-dark table-hover\">\n                <thead>\n                <th>Item</th>\n                <th>Cost</th>\n                <th>Category</th>\n                <th>Status</th>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of items\">\n                    <td>{{ item.name }}</td>\n                    <td>${{ item.cost | number : '1.2-2' }}</td>\n                    <td>{{ item.category }}</td>\n                    <td><a (click)=\"buy(item)\" class=\"btn btn-success\">Buy</a></td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n\n    </div>\n\n    <div class=\"row text-white fixed-bottom\" style=\"height:5vh; background-color: #212529\">\n    <span style=\"margin:auto\">\n        {{ log }}\n    </span>>\n    </div>\n\n</div>\n\n\n"

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
        Object(_script_js__WEBPACK_IMPORTED_MODULE_1__["draw"])();
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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
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

module.exports = "<div class=\"container\">\n    <nav class=\"navbar fixed-top navbar-light bg-success\" style=\"box-shadow: 0 0px 10px 1px rgba(0,0,0,1)\">\n        <span class=\"navbar-text text-light\">dolla dolla bills - Registration</span>\n    </nav>\n\n    <div class=\"div mt-5 pt-5\">\n    </div>\n\n    <form class=\"card\">\n        <div class=\"card-header\">\n            <h4>Input Information</h4>\n        </div>\n        <div class=\"card-body\">\n\n            <h5 class=\"pb-2\">Basic Information</h5>\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-2 col-form-label\">Name</label>\n                <div class=\"col-10\">\n                    <input class=\"form-control\" type=\"text\" value=\"\" id=\"example-text-input\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"example-number-input\" class=\"col-2 col-form-label\">Age</label>\n                <div class=\"col-10\">\n                    <input class=\"form-control\" type=\"number\" value=\"0\" id=\"example-number-input\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-2 col-form-label\">Financial Institution</label>\n                <div class=\"col-10\">\n                    <input class=\"form-control\" type=\"text\" value=\"\" id=\"financial-institution\">\n                </div>\n            </div>\n            <hr />\n\n            <h5 class=\"pb-2\">Top 5 Financial Goals</h5>\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Item 1</label>\n                <div class=\"col-5\">\n                    <input class=\"form-control\" type=\"text\" value=\"\" id=\"item-name-1\">\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-2 col-form-label text-right\">Get by age</label>\n                <div class=\"col-4\">\n                    <input class=\"form-control\" type=\"number\" value=\"0\" id=\"item-age-1\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Item 2</label>\n                <div class=\"col-5\">\n                    <input class=\"form-control\" type=\"text\" value=\"\" id=\"item-name-2\">\n                </div>\n                <label for=\"example-text-input\" class=\"col-2 col-form-label text-right\">Get by age</label>\n                <div class=\"col-4\">\n                    <input class=\"form-control\" type=\"number\" value=\"0\" id=\"item-age-2\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Item 3</label>\n                <div class=\"col-5\">\n                    <input class=\"form-control\" type=\"text\" value=\"\" id=\"item-name-3\">\n                </div>\n\n                <label for=\"example-text-input\" class=\"col-2 col-form-label text-right\">Get by age</label>\n                <div class=\"col-4\">\n                    <input class=\"form-control\" type=\"number\" value=\"0\" id=\"item-age-3\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Item 4</label>\n                <div class=\"col-5\">\n                    <input class=\"form-control\" type=\"text\" value=\"\" id=\"item-name-4\">\n                </div>\n                <label for=\"example-text-input\" class=\"col-2 col-form-label text-right\">Get by age</label>\n                <div class=\"col-4\">\n                    <input class=\"form-control\" type=\"number\" value=\"0\" id=\"item-age-4\">\n                </div>\n            </div>\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Item 5</label>\n                <div class=\"col-5\">\n                    <input class=\"form-control\" type=\"text\" value=\"\" id=\"item-name-5\">\n                </div>\n                <label for=\"example-text-input\" class=\"col-2 col-form-label text-right\">Get by age</label>\n                <div class=\"col-4\">\n                    <input class=\"form-control\" type=\"number\" value=\"0\" id=\"item-age-5\">\n                </div>\n            </div>\n\n            <hr />\n\n            <h5 class=\"pb-2\">10 Most Recent Purchases</h5>\n\n            <div class=\"form-group row\">\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Item 1</label>\n                <label for=\"example-text-input\" class=\"col-1 col-form-label\">Category</label>\n            </div>\n        </div>\n        <button class=\"btn btn-primary\">Submit</button>\n    </form>\n</div>"

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
/*! exports provided: draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
// Our labels along the x-axis
function draw() {
  var days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, ""];
  // For drawing the lines

  var NetBalance = [
    20, 30, 60, 80, 65
    , 43, 80, 110, 130, 142
    , 150, 180, 210, 160, 180
    , 211, 312, 325, 360, 391,
    412, 423, 444, 234, 12,
    30, 70, 120
  ];

  var moneySpent = [
    20, 10, 30, 20, -15,
    -12, 37, 30, 20, 12,
    8, 30, 30, -50, 20,
    31, 101, 13, 35, 31,
    21, 11, 21, -210, -222,
    18, 40, 50
  ];

  var itemBought = [
    "", "", "", "", "Bubble Tea",
    "Chipotle", "", "", "", "",
    "", "", "", "Textbook", "",
    "", "", "", "", "",
    "", "", "", "Shoes", "Hoodie",
    "", "", ""
  ];

  var itemCategory = [
    "", "", "", "", "Foods",
    "Food", "", "", "", "",
    "", "", "", "School", "",
    "", "", "", "", "",
    "", "", "", "Clothing", "Clothings",
    "", "", ""
  ];

  var items = [];
  var itemsValue = [];
  var hidden = [];

  for (let i = 0; i < days.length; i++) {
    if (moneySpent[i + 1] < 0) {
      if (!items.includes(itemCategory[i + 1])) {
        items.push(itemCategory[i + 1]);
        itemsValue.push(moneySpent[i + 1] * -1);
      } else {
        itemsValue[items.indexOf(itemCategory[i + 1])] += moneySpent[i + 1] * -1;
      }
    }
  }

  var ctx = document.getElementById("purchaseChart");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: days,
      datasets: [
        {
          data: NetBalance,
          label: "Net Balance",
          borderColor: "#EBBB32",
          backgroundColor: "#EBBB32",
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
            return context.hovered ? { weight: 'bold', size: 12} : { weight: 'bold', size: 11};
          },
          anchor: "end",
          align: "270",
          offset: function(context){
            if (context.dataIndex % 2){
              return "6"
            }
           return "0";
          },
          formatter: function (value, context) {
            if (moneySpent[context.dataIndex + 1] < 0) {
              return context.hovered ? itemBought[context.dataIndex + 1] : "$" + moneySpent[context.dataIndex + 1];
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
    }
    else {
      hidden.push(legendItem.text);
    }
    original.call(this, e, legendItem);
    updateText(doughnutty);
  };

  function updateText(chart) {
    chart.options.elements.center.text = getSum();
    chart.update();
  }

  let getSum = function () {
    let sum = 0;
    for (let i = 0; i < itemsValue.length; i++) {
      if (!hidden.includes(items[i])) {
        sum += itemsValue[i];
      }
    }
    return "$" + sum;
  }

  var doughnutty = new Chart(document.getElementById("categoryDoughnut"), {
    type: 'doughnut',
    data: {
      labels: items,
      datasets: [
        {
          label: "Purchases by Category ($)",
          //"#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"
          backgroundColor: ["#ffcdb2", "#ffb4a2", "#e5989b", "#b5838d", "#87838e", "#afacb3", "#c9c8cc"],
          data: itemsValue
        }
      ]
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
          font:{
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