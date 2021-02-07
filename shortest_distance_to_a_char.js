var shortestToChar = function(S, C) {
  let reverse = S.split("").reverse();
  return S.split("").map((char, i) => {
      return Math.min(
          Math.abs(i - S.indexOf(C, i)),
          Math.abs(S.length - 1 - i - reverse.indexOf(C, S.length - 1 - i)),
      )
  });
};