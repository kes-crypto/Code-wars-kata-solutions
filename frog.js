/*
Story
Imagine a frog sitting on the top of a staircase which has steps number of steps in it.
A frog can jump down over the staircase and at 1 single jump it can go from 1 to maxJumpLength steps down.
Task
Your task is to write a function which will calculate the total amount of all possible ways that the frog can go from top to the bottom.

Example
For staircase with steps=3 and maxJumpLength=3 a frog can jump steps like:
1-1-1 or 1-2 or 2-1 or 3. Which gives 4 possible jump ways.
And for staircase with steps=4 and maxJumpLength=3 a frog can jump steps like:
1-1-1-1 or 1-1-2 or 1-2-1 or 2-1-1 or 2-2 or 3-1 or 1-3. Which gives 7 possible jump ways.

Function type
Function will receive as parameters:
steps a number from 1 to 200 : amount of steps in a staircase.
maxJumpLength a number from 1 to 200 : top limit of how many steps a frog can jump down at 1 time.
Function should return a number - BigInt (because some results can be really big) of all possible ways the frog can go down the staircase.
All inputs will be valid. maxJumpLength can be bigger than steps but you should consider the real amount of steps passed over.
Good luck!
*/
//sol1
const getNumberOfWays = (steps, maxJumpLength) => {

  let n = steps;
  let ways = Array.from({ length: maxJumpLength }, (_, i) => BigInt(2 ** i));

  while (ways.length < n) {
    ways.push(ways.reduce((a, b) => a + b));
    ways.shift();
    n--;
  }
  
  return ways[n - 1];
  
}
//sol2
const getNumberOfWays = (steps, maxJumpLength) => {
  // This array represents the number of ways the frog can reach each step from the top.
  // Initially, it is filled with zeros, but as the algorithm progresses, we will replace those zeros with other integers.
  const numberOfWays = Array(steps + 1).fill(BigInt(0));

  // Base case: The frog is already at the top (step 0).
  // If we are at the top, there is nowhere to jump from, and the only way to reach the top from the top is to simply stay in place.
  // Hence, we set the number of ways at the top to 1.
  numberOfWays[0] = BigInt(1);

  // Now, we will simulate the frog jumping from each step, starting from the top and going downwards.
  for (let currentStep = 1; currentStep < numberOfWays.length; currentStep++) {
    // Within this loop, we consider all the possible jump lengths for the frog (from 1 to maxJumpLength).
    for (let jumpLength = 1; jumpLength <= maxJumpLength; jumpLength++) {
      // We calculate the number of ways the frog can reach the current step by summing up the ways it can reach from each possible jump length.
      // However, we need to ensure that the frog doesn't attempt to jump beyond the bottom step.
      if (currentStep - jumpLength >= BigInt(0)) {
        numberOfWays[currentStep] += numberOfWays[currentStep - jumpLength];
      }
    }
  }

  // Finally, we return the number of ways the frog can reach the bottom step of the staircase,
  // which is represented by the last element of the array.
  return numberOfWays.pop();
};
//sol3
const getNumberOfWays = (steps, maxJumpLength) => {
  const ways = Array(steps + 1).fill(BigInt(0));
  ways[0] = BigInt(1);

  for (let i = 1; i <= steps; i++) {
    for (let j = 1; j <= maxJumpLength && j <= i; j++) {
      ways[i] += ways[i - j];
    }
  }

  return ways[steps];
};
