const solveRodCutting = function(lengths, prices, n) {
    // TODO: Write your code here
    let dp ={};
    let helper = function(i,limit){
        console.log(dp);
      if(i >= prices.length || prices.length === 0 || limit <=0 || lengths.length !== prices.length) return 0
      dp[i] = dp[i] || {};
      if(dp[i][limit] !== undefined){
        return dp[i][limit];
      }
       let m1 =0;
      if(lengths[i] <= limit){
         m1 = prices[i] + helper(i,limit-lengths[i]);
      }
      let m2 = helper(i+1,limit);
      dp[i][limit] = Math.max(m1,m2);
    return dp[i][limit];
    }
  
    return helper(0,n);
  };
  
  const lengths = [1, 2, 3, 4, 5];
  const prices = [2, 6, 7, 10, 13];
  console.log(`Maximum profit: ---> ${solveRodCutting(lengths, prices, 5)}`);
  
  