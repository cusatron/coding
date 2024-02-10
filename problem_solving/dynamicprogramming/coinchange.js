let countChange = function(denominations, total) {
    // TODO: Write your code here
    dp ={};
    var helper = function(i,t){
      if(t === 0){
        return 1;
      }
      if(i >= denominations.length || t <0) return 0;
      dp[i] = dp[i] || {};
      if( dp[i][t] !== undefined ){
        return dp[i][t];
      }
      let a=0;
      if(denominations[i] <= t){
       a= helper(i,t-denominations[i]);
      }
     let b =  helper(i+1,t);
     dp[i][t] = a+b;
     return dp[i][t];
    }
  return helper(0,total);
  };
 //


 // minimum number pf coin needed to make the totall
/*
Denominations: {1,2,3}
Total amount: 5
Output: 2
Explanation: We need a minimum of two coins {2,3} to make a total of '5'



*/
 let minCountChange = function(denominations, total) {
    // TODO: Write your code here
    dp ={};
    var helper = function(i,t){
      if(t === 0){

        return 1;
      }
      if(i >= denominations.length || t <0) return 0;
      dp[i] = dp[i] || {};
      if( dp[i][t] !== undefined ){
        return dp[i][t];
      }
      let a=0;
      if(denominations[i] <= t){
       a= helper(i,t-denominations[i]);
      }
     let b =  helper(i+1,t);
     dp[i][t] = Math.min(a,b);
     return dp[i][t];
    }
  return helper(0,total);
  };
 //

  
  
  console.log(`Number of ways to make change: ---> ${countChange([1, 3, 4], 5)}`);
  console.log(`minimum number of coins needed to make the change ---> ${minCountChange([1, 2, 3], 5)}`);
 