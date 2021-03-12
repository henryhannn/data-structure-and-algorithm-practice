var maxIncreaseKeepingSkyline = function(grid) {
  const sideView = [];
  for (let i = 0; i < grid.length; i++) {
      let currentMax = grid[i][0];
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] > currentMax) currentMax = grid[i][j];
      }
      sideView.push(currentMax);
  }
  console.log(sideView);
  
  const topView = [];
  for (let i = 0; i < grid[0].length; i++) {
      let currentMax = grid[0][i];
      for (let j = 0; j < grid.length; j++) {
          if (grid[j][i] > currentMax) currentMax = grid[j][i];
      }
      topView.push(currentMax);
  }
  console.log(topView);
  
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          result += Math.min(sideView[i], topView[j]) - grid[i][j];
      }
  }
  
  return result;
};