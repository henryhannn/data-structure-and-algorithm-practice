function maxProfit(costPerCut, salePrice, lengths) {
  var arr = lengths.sort(function(a, b) {return a - b});
  var profit = 0;
  var rodLength;
  var numOfRods = 0;
  var numOfCuts = 0;
  // starting from 1 until the smallest length of the rod, check the profit
  for (let i = 1; i <= arr[0]; i++) {
      rodLength = i;
      for (let j = 0; j < arr.length; j++) {
          // i need to check how many cuts are made here
          // just dividing the length by i does not get you the number of cuts, there could be
          // remainders  
          numOfRods += Math.floor(arr[j] / i);
          Math.floor(arr[j] / i) !== arr[j] / i ? numOfCuts += Math.floor(arr[j] / i) : numOfCuts += (arr[j] / i - 1)
      }
      // will check for profits in here
      if (profit < numOfRods * rodLength * salePrice - numOfCuts * costPerCut) {
          profit = numOfRods * rodLength * salePrice - numOfCuts * costPerCut;
      }
      numOfCuts = 0;
      numOfRods = 0;
  }
  return profit;
}

200
10
8
25
50
75
100
125
150
175
200
// 5600

100
10
3
26
103
59
// 1230

1000
1
11
200
200
200
400
200
200
200
200
200
200
200
// 2000

25
10
10
31
73
127
179
181
191
283
353
359
1019
// 25145