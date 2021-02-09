var isValid = function(s) {
  arr = s.split('');
  result = []; 
  for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
          result.push(arr[i]);
          continue;
      }
      if (arr[i] === ')') {
          if (result.pop() !== '(') return false;
          continue;
      } else if (arr[i] === ']') {
          if (result.pop() !== '[') return false;
          continue;
      } else if (arr[i] === '}') {
          if (result.pop() !== '{') return false;
          continue;
      }
      result.push(arr[i]);
  }
  return result.length === 0;
};