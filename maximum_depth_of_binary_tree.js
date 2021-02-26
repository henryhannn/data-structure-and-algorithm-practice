var maxDepth = function(root) {
  let maxDep = 0;
  
  function depthFirstSearch(depth, root) {
      if (root === null) {
          maxDep = Math.max(maxDep, depth);
          return;
      }
      depthFirstSearch(depth + 1, root.left);
      depthFirstSearch(depth + 1, root.right);
  }
  
  depthFirstSearch(maxDep, root);
  
  return maxDep;
}