function mostVolume(arr) {
  var maxarea = 0;
  for (var i = 0; i < height.length; i++)
      for (var j = i + 1; j < height.length; j++)
          maxarea = Math.max(maxarea, Math.min(height[i], height[j]) * (j - i));
  return maxarea;
}