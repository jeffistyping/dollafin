import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { buy, draw, gainMoney } from '../script.js';
import { DataService } from '../data.service';

// salary const gonna get from backend
const SALARY = 20;

// event constants
const DEATH = 0;
const BAD = 0.175;
const SALE = 0.45;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  title: string;
  money: number;
  salary: number;
  log: string;
  clicks: number;
  items: any[] = [];
  categories: string[] = [];
  itemBought: string = '';
  game;
  _data: any[];

  src: String;
  name: string;
  data: any;
  age: number;

  constructor(service: DataService) {
    this.data = service;
  }
  ngOnInit(): void {
    this._data = this.data.DATA;
    draw();

    for (let i = 0; i < this._data.length; i++) {
      switch (this._data[i].name) {
        case 'Name':
          this.name = this._data[i].value;
          break;
        case 'Age':
          this.age = this._data[i].value;
          break;
        case 'pn1':
          if (this.items.length >= 1) {
            this.items[0].name = this._data[i].value;
          } else {
            this.items.push({'name': this._data[i].value});
          }
          break;
        case 'pn2':
          if (this.items.length >= 2) {
            this.items[1].name = this._data[i].value;
          }else {
            this.items.push({'name': this._data[i].value});
          }
          break;
        case 'pn3':
          if (this.items.length >= 3) {
            this.items[2].name = this._data[i].value;
          }else {
            this.items.push({'name': this._data[i].value});
          }
          break;
        case 'pn4':
          if (this.items.length >= 4) {
            this.items[3].name = this._data[i].value;
          }else {
            this.items.push({'name': this._data[i].value});
          }
          break;
        case 'pn5':
          if (this.items.length >= 5) {
            this.items[4].name = this._data[i].value;
          }else {
            this.items.push({'name': this._data[i].value});
          }
          break;
        case 'pn6':
          if (this.items.length >= 6) {
            this.items[5].name = this._data[i].value;
          }else {
            this.items.push({'name': this._data[i].value});
          }
          break;
        case 'pn7':
          if (this.items.length >= 7) {
            this.items[6].name = this._data[i].value;
          }else {
            this.items.push({'name': this._data[i].value});
          }
          break;
        case 'pn8':
          if (this.items.length >= 8) {
            this.items[7].name = this._data[i].value;
          }else {
            this.items.push({'name': this._data[i].value});
          }
          break;
        case 'pn9':
          if (this.items.length >= 9) {
            this.items[8].name = this._data[i].value;
          }else {
            this.items.push({'name': this._data[i].value});
          }
          break;
        case 'pn10':
          if (this.items.length >= 10) {
            this.items[9].name = this._data[i].value;
          }else {
            this.items.push({'name': this._data[i].value});
          }
          break;
        case 'pc1':
          if (this.items.length >= 1) {
            this.items[0].category = this._data[i].value;
          }else {
            this.items.push({'category': this._data[i].value});
          }
          break;
          case 'pc2':
          if (this.items.length >= 2) {
            this.items[1].category = this._data[i].value;
          }else {
            this.items.push({'category': this._data[i].value});
          }
          break;
          case 'pc3':
          if (this.items.length >= 3) {
            this.items[2].category = this._data[i].value;
          }else {
            this.items.push({'category': this._data[i].value});
          }
          break;
          case 'pc4':
          if (this.items.length >= 4) {
            this.items[3].category = this._data[i].value;
          }else {
            this.items.push({'category': this._data[i].value});
          }
          break;
          case 'pc5':
          if (this.items.length >= 5) {
            this.items[4].category = this._data[i].value;
          }else {
            this.items.push({'category': this._data[i].value});
          }
          break;
          case 'pc6':
          if (this.items.length >= 6) {
            this.items[5].category = this._data[i].value;
          }else {
            this.items.push({'category': this._data[i].value});
          }
          break;
          case 'pc7':
          if (this.items.length >= 7) {
            this.items[6].category = this._data[i].value;
          }else {
            this.items.push({'category': this._data[i].value});
          }
          break;
          case 'pc8':
          if (this.items.length >= 8) {
            this.items[7].category = this._data[i].value;
          }else {
            this.items.push({'category': this._data[i].value});
          }
          break;
        case 'pc9':
          if (this.items.length >= 9) {
            this.items[8].category = this._data[i].value;
          }else {
            this.items.push({'category': this._data[i].value});
          }
          break;
        case 'pc10':
          if (this.items.length >= 10) {
            this.items[9].category = this._data[i].value;
          }else {
            this.items.push({'category': this._data[i].value});
          }
          break;
        case 'pp1':
          if (this.items.length >= 1) {
            this.items[0].cost = parseFloat(this._data[i].value);
          }else {
            this.items.push({'cost': parseFloat(this._data[i].value)});
          }
          break;
        case 'pp2':
          if (this.items.length >= 2) {
            this.items[1].cost = parseFloat(this._data[i].value);
          }else {
            this.items.push({'cost': parseFloat(this._data[i].value)});
          }
          break;
        case 'pp3':
          if (this.items.length >= 3) {
            this.items[2].cost = parseFloat(this._data[i].value);
          }else {
            this.items.push({'cost': parseFloat(this._data[i].value)});
          }
          break;
        case 'pp4':
          if (this.items.length >= 4) {
            this.items[3].cost = parseFloat(this._data[i].value);
          }else {
            this.items.push({'cost': parseFloat(this._data[i].value)});
          }
          break;
        case 'pp5':
          if (this.items.length >= 5) {
            this.items[4].cost = parseFloat(this._data[i].value);
          }else {
            this.items.push({'cost': parseFloat(this._data[i].value)});
          }
          break;
        case 'pp6':
          if (this.items.length >= 6) {
            this.items[5].cost = parseFloat(this._data[i].value);
          }else {
            this.items.push({'cost': parseFloat(this._data[i].value)});
          }
          break;
        case 'pp7':
          if (this.items.length >= 7) {
            this.items[6].cost = parseFloat(this._data[i].value);
          }else {
            this.items.push({'cost': parseFloat(this._data[i].value)});
          }
          break;
        case 'pp8':
          if (this.items.length >= 8) {
            this.items[7].cost = parseFloat(this._data[i].value);
          }else {
            this.items.push({'cost': parseFloat(this._data[i].value)});
          }
          break;
        case 'pp9':
          if (this.items.length >= 9) {
            this.items[8].cost = parseFloat(this._data[i].value);
          }else {
            this.items.push({'cost': parseFloat(this._data[i].value)});
          }
          break;
        case 'pp10':
          if (this.items.length >= 10) {
            this.items[9].cost = parseFloat(this._data[i].value);
          }else {
            this.items.push({'cost': parseFloat(this._data[i].value)});
          }
          break;
      }
    }

    console.log(this.items);

    this.salary = SALARY;
    this.money = 0;
    this.clicks = 0;
    this.title = 'GAME';
    this.src = '../assets/banknocoin.png';
    this.log = '';

    this.game = setInterval(() => {
      const r = Math.random();

      if (r < DEATH) {
        alert('You died');
        window.location.reload();
      } else if (r < BAD) {
        this.log = 'Something bad happened. You lost $' + Math.floor(Math.random() * 1000);
      } else if (r < SALE) {
        // reduce the cost for now and increase it back in 1s
        // const i = this.items[Math.floor(Math.random() * this.items.length)];
        // const sale = 0.5 + (Math.random() * 0.4);
        // i.cost *= sale;
        // setTimeout(() => i.cost /= sale, 1000);
        // this.log = 'Item "' + i.name + '" is on sale';
      } else {
        this.log = '';
        console.log('But nothing happened!');
      }
    }, 1000);
  }

  addMoney = function (item) {
    this.money += this.salary;
    this.clicks += 1;
    if (this.clicks % 10 == 0) {
      gainMoney(this.money, this.clicks, this.itemBought);
      this.itemBought = '';
      return;
    }
  };

  buyItem = function (item) {
    console.log(item);
    if (this.money < item.cost) {
      return;
    }
    console.log('bought ' + item.name + ' for ' + item.cost);
    this.money -= item.cost;
    if (this.itemBought === '') {
      this.itemBought += item.name;
    } else if (!this.itemBought.includes(item.name)) {
      this.itemBought += ',' + item.name;
    }
    buy(item.cost, item.category);
  };


  onHover = function () {
    this.src = '../assets/bank.png';
  };

  offHover = function () {
    this.src = '../assets/banknocoin.png';
  };

  onClickPig = function () {
    this.src = '../assets/moneypig.png';

  };

}
