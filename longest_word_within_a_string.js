function longest_word(str) {
  var arr = str.match(/\w[a-z]{0,}/gi);
  var result = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (result.length < arr[i].length) {
      result = arr[i];
    }
  }
  return result;
}