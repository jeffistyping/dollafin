import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

// salary const gonna get from backend
const SALARY = 20;

// event constants
const DEATH = 0.0125;
const BAD = 0.175;
const SALE = 0.45;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string;
  money: number;
  salary: number;
  log: string;
  
  items: any[] = [];
  categories: string[] = [];
  game;

  src: String;

  ngOnInit() : void {
    this.salary = SALARY;
    this.money = 0;
    this.title = "GAME";
    this.src = "assets/banknocoin.png";
    this.log = "";

    for (let i = 0; i < 10; i++) {
      this.items.push({
        'name': 'item' + i,
        'cost': Math.random() * 100,
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
  }


  onHover = function(){
    this.src = 'assets/bank.png';
  };

  offHover = function(){
    this.src = 'assets/banknocoin.png';
  };

  onClickPig = function(){
    this.src = 'assets/moneypig.png';
  };

}