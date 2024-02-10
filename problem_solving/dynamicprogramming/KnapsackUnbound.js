//  each item can be selected multiple times - hence unbounded

let solveKnapsack = function(profits, weights, capacity) {
    const dp = [];
  
    function knapsackRecursive(profits, weights, capacity, currentIndex) {
      // base checks
      if (
        capacity <= 0 ||
        profits.length == 0 ||
        weights.length != profits.length ||
        currentIndex >= profits.lengths
      ) {
        return 0;
      }
  
      dp[currentIndex] = dp[currentIndex] || [];
      // check if we have not already processed a similar sub-problem
      if (typeof dp[currentIndex][capacity] !== 'undefined') return dp[currentIndex][capacity];
  
      // recursive call after choosing the items at the currentIndex, note that we recursive call on all
      // items as we did not increment currentIndex
      let profit1 = 0;
      if (weights[currentIndex] <= capacity) {
        profit1 =
          profits[currentIndex] +
          knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex); /// this code is different
      }
  
      // recursive call after excluding the element at the currentIndex
      const profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1);
  
      dp[currentIndex][capacity] = Math.max(profit1, profit2);
      return dp[currentIndex][capacity];
    }
  
    return knapsackRecursive(profits, weights, capacity, 0);
  };
  
  var profits = [1, 6, 10, 16];
  var weights = [1, 2, 3, 5];
  console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
  console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);