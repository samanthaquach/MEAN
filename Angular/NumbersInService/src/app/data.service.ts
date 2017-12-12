import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  set1: number[] = [1];
  set2: number[] = [2];
  set3: number[] = [];
  constructor() { }

  retrieveSet1(): number[] {
    return this.set1;
  }
  retrieveSet2(): number[] {
    return this.set2;
  }
  retrieveSet3(): number[] {
    return this.set3;
  }

  addSet1(num: number) {
    this.set1.push(num);
  }
  addSet2(num: number) {
    this.set2.push(num);
  }
  addSet3() {
    const getSum = (sum, currentValue) => sum + currentValue;
    let set1Total = this.set1.reduce(getSum);
    let set2Total = this.set2.reduce(getSum);
    this.set3.push(set1Total - set2Total);
  }
}
