class Ledger {
  constructor() {
    this.nums = [];
  }

  add(newNum, ...arg) {
    this.nums.push(newNum);
    if (arg.length !== 0) {
      for (let i = 0; i < arg.length; i++) {
        this.nums.push(arg[i]);
      }
    }
  }

  mean() {
    if (this.nums.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < this.nums.length; i++) {
      sum += this.nums[i];
    }
    return sum / this.nums.length;
  }

  median() {
    if (this.nums.length % 2 === 0) {
      return this.nums[this.nums.length / 2 - 1];
    } else {
      return this.nums[Math.floor(this.nums.length / 2)];
    }
  }

  mode() {
    let counter = 1;
    let maxCounter = 1;
    let mode = this.nums[0];
    for (let i = 0; i < this.nums.length - 1; i++) {
      for (let j = i + 1; j < this.nums.length; j++) {
        if (this.nums[i] === this.nums[j]) counter += 1;
      }
      if (counter > maxCounter) {
        maxCounter = counter;
        mode = this.nums[i];
      }
    }
    return mode;
  }
}

let newLedger = new Ledger;
newLedger.add(1, 2, 3, 4, 5, 5, 6, 3, 3, 3, 3, 3, 3, 3);
console.log(newLedger.mean());
console.log(newLedger.median());
console.log(newLedger.mode());