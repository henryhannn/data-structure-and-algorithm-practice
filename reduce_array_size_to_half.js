var minSetSize = function(arr) {
  var counter = 0;
  var hash = {};
  for (let i = 0; i < arr.length; i++) {
      (hash[arr[i]] !== undefined) ? hash[arr[i]] += 1 : hash[arr[i]] = 1;
  }
  var tempArr = Object.values(hash);
  tempArr.sort(function(a, b) { return a-b });
  var arrLength = arr.length;
  while (arrLength > arr.length / 2) {
      arrLength -= tempArr.pop();
      counter += 1;
  }
  return counter;
};