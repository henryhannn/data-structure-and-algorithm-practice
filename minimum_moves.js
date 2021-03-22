function minimumMoves(arr1, arr2) {
  let total = 0;
  for (let i = 0; i < arr1.length; i++) {
      let ele1 = arr1[i].toString().split('');
      let ele2 = arr2[i].toString().split('');
      for (let j = 0; j < ele1.length; j++) {
          total += Math.abs(parseInt(ele1[j]) - parseInt(ele2[j]));
      }
  }
  return total;
}