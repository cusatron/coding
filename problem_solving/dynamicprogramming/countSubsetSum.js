


const countSubsets = function(num, sum) {
    //TODO: Write - Your - Code
    const dp={};
    var helper =function (s,i){
        console.log(dp);
      if(s === 0){
        return 1;
      }
    if(num.length === 0|| i >= num.length) return 0;
    dp[i] = dp[i] || {};
    if(dp[i][s] !== undefined){
      return dp[i][s];
    }
    let a=0;
    if(num[i] <= s) {
    a = helper(s-num[i],i+1);
    }
    const b = helper(s,i+1);
    dp[i][s] = a+b;
      return dp[i][s];
    }
    return helper(sum,0);
  
  
  };


  const countSubsets2 = function(num, sum) {
    const dp = [];
  
    function countSubsetsRecursive(num, sum, currentIndex) {
      // base checks
      if (sum === 0) {
        return 1;
      }
  
      if (num.length === 0 || currentIndex >= num.length) {
        return 0;
      }
  
      dp[currentIndex] = dp[currentIndex] || [];
      // check if we have not already processed a similar problem
      if (typeof dp[currentIndex][sum] === 'undefined') {
        // recursive call after choosing the number at the currentIndex
        // if the number at currentIndex exceeds the sum, we shouldn't process this
        let sum1 = 0;
        if (num[currentIndex] <= sum) {
          sum1 = countSubsetsRecursive(num, sum - num[currentIndex], currentIndex + 1);
        }
  
        // recursive call after excluding the number at the currentIndex
        const sum2 = countSubsetsRecursive(num, sum, currentIndex + 1);
  
        dp[currentIndex][sum] = sum1 + sum2;
      }
  
      return dp[currentIndex][sum];
    }
  
    return countSubsetsRecursive(num, sum, 0);
  };
  
  //console.log(`Count of subset sum is: ---> ${countSubsets([1, 1, 2, 3], 4)}`);
  //console.log(`Count of subset sum is: ---> ${countSubsets([1, 2, 7, 1, 5], 9)}`);

  console.log(`Count of subset sum is: ---> ${countSubsets2([1, 1, 2, 3], 4)}`);
console.log(`Count of subset sum is: ---> ${countSubsets([1, 2, 7, 1, 5], 9)}`);