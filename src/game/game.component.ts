import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { buy as script_buy, draw } from '../script.js';

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
  
  items: any[] = [];
  categories: string[] = [];
  game;

  src: String;

  ngOnInit() : void {

    draw();

    this.salary = SALARY;
    this.money = 0;
    this.title = "GAME";
    this.src = "../assets/banknocoin.png";
    this.log = "";

    for (let i = 0; i < 10; i++) {
      this.items.push({
        'name': 'item' + i,
        'cost': parseFloat((Math.random()*100).toFixed(2)),
        'category': 'category' + (i%3)
      });
    }

    this.game = setInterval(() => {
      let r = Math.random();
      
      if (r < DEATH) {
        alert("You died");
        window.location.reload(false);
      } 
      
      else if (r < BAD) {
        this.log = "Something bad happened. You lost $" + Math.floor(Math.random() * 1000);
      }
      
      else if (r < SALE) {
        // reduce the cost for now and increase it back in 1s
        let i = this.items[Math.floor(Math.random()*this.items.length)];
        let sale = 0.5 + (Math.random()*0.4);
        i.cost *= sale;
        setTimeout(() => i.cost /= sale, 1000);
        this.log = "Item \"" + i.name + "\" is on sale";
      }
      
      else {
        this.log = ''
        console.log("But nothing happened!");
      }
    }, 1000);
  }

  addMoney = function() {
    this.money += this.salary;
  };

  buy = function(item) {
    if (this.money < item.cost) {
      return;
    }
    console.log("bought " + item.name + " for " + item.cost);
    this.money -= item.cost;

    script_buy(item.cost, item.category);
  }


  onHover = function(){
    this.src = '../assets/bank.png';
  };

  offHover = function(){
    this.src = '../assets/banknocoin.png';
  };

  onClickPig = function(){
    this.src = '../assets/moneypig.png';

  };

}