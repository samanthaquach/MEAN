import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  // casino: number[] = [];
  // cave: number[] = [];
  // farm: number[] = [];
  // house: number[] = [];
  goldcount: number =  0;

  constructor() { }
  
  retrieveGoldCount():number{
    return this.goldcount;
  }

  addCasino() {
    console.log("at casino");
    let amount = Math.floor(Math.random() * 100) + 1
    let winLose = Math.floor(Math.random() * 2)
    if (winLose == 1) {
      this.goldcount += amount;
    } else {
      this.goldcount -= amount;
    }
    console.log(this.goldcount);

  }
  addCave() {
    console.log("at cave");
    let amount = Math.floor(Math.random() * 5) + 5
    this.goldcount += amount;
    console.log(this.goldcount);
    // this.goldcount.push(cave);
  }
  addFarm() {
    console.log("at farm");
    let amount = Math.floor(Math.random() * 5) + 1
    this.goldcount += amount;
    console.log(this.goldcount);
    // this.goldcount.push(farm);
  }
  addHouse() {
    console.log("at house");
    let amount = Math.floor(Math.random() * 9) + 7
    this.goldcount += amount;
    console.log(this.goldcount);
    // this.goldcount.push(house);
  }

}
