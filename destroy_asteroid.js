/*
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Example: 
Input: asteroids = [1, 2, 3,-3,4,-2] 
Output = [1, 2, 4]
*/

/*
function destroyAsteroid (asteroids) {
  let asteroidArr = asteroids
  let stack = [];
  let tracker = false;

  while (tracker === false) {
    tracker = true;
    stack.push(asteroidArr[0]);
    for (let i = 1; i < asteroidArr.length; i++) {
      if (asteroidArr[i] < 0 && stack[stack.length - 1] > 0) {
        tracker = false;
        if (Math.abs(asteroidArr[i]) > Math.abs(stack[stack.length - 1])) {
          stack.pop();
          stack.push(asteroidArr[i]);
        } else if (Math.abs(asteroidArr[i]) === Math.abs(stack[stack.length - 1])) {
          stack.pop();
        }
      } else {
        stack.push(asteroidArr[i]);
      }
    }
    asteroidArr = stack;
    if (tracker === false) stack = [];
  }
  return stack;
}
*/

function destroyAsteroid (asteroids) {
  let stack = [];

  stack.push(asteroids[0]);
  for (let i = 1; i < asteroids.length; i++) {
    if (asteroids[i] < 0 && stack[stack.length - 1] > 0) {
      while (asteroids[i] < 0 && stack[stack.length - 1] > 0) {
        if (Math.abs(asteroids[i]) > Math.abs(stack[stack.length - 1])) {
          stack.pop();
          if (stack.length === 0 || (asteroids[i] < 0 && stack[stack.length - 1] < 0)) stack.push(asteroids[i]);
        } else if (Math.abs(asteroids[i]) === Math.abs(stack[stack.length - 1])) {
          stack.pop();
          break;
        } else if (Math.abs(asteroids[i]) < Math.abs(stack[stack.length - 1])) {
          break;
        }
      }
    } else {
      stack.push(asteroids[i]);
    }
    console.log(stack);
  }
  return stack;
}

console.log(destroyAsteroid([-2, 1, 1, -1]))
