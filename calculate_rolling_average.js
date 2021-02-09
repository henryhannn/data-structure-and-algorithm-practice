class Ledger {
  constructor() {
    // create the array to keep track of all numbers
    this.nums = [];
  }

  // can take in 1 number or multiple numbers
  add(newNum, ...arg) {
    // put the first number into the array
    this.nums.push(newNum);
    // check to see if there are any more inputs
    if (arg.length !== 0) {
      // put the extra inputs into the nums array
      for (let i = 0; i < arg.length; i++) {
        this.nums.push(arg[i]);
      }
    }
  }

  mean() {
    // dunno if this is necessary but just making sure if there are no inputs, it doesnt return undefined.
    if (this.nums.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < this.nums.length; i++) {
      sum += this.nums[i];
    }
    return sum / this.nums.length;
  }

  median() {
    if (this.nums.length === 0) return 0;
    if (this.nums.length % 2 === 0) {
      return this.nums[this.nums.length / 2 - 1];
    } else {
      // i believe Math.floor(n) rounds n down
      return this.nums[Math.floor(this.nums.length / 2)];
    }
  }

  mode() {
    if (this.nums.length === 0) return 0;
    let counter = 1;
    let maxCounter = 1;
    let mode = this.nums[0];
    // check how many times each number appears
    for (let i = 0; i < this.nums.length; i++) {
      // make sure second iteration doesnt happen if i reaches the end of the array
      if (i !== this.nums.length - 1) {
        for (let j = i + 1; j < this.nums.length; j++) {
          if (this.nums[i] === this.nums[j]) counter += 1;
        }
      }
      // compare the counters and set new mode if necessary
      if (counter > maxCounter) {
        maxCounter = counter;
        mode = this.nums[i];
      }
      // reset counter
      counter = 1;
    }
    return mode;
  }
}

let newLedger = new Ledger;
newLedger.add(1, 2, 3, 4, 5, 5, 6, 3, 3, 3, 3, 3, 3, 3);
console.log(newLedger.mean());
console.log(newLedger.median());
console.log(newLedger.mode());