const findLCSLength = function(s1, s2) {
    // TODO: Write your code here
   let  dp ={};
    var helper = function(i,j){
      if(i === s1.length || j === s2.length){
        return 0;
      }
       dp[i] = dp[i] ? dp[i] : {};
       if(dp[i][j] !== undefined){
         return dp[i][j];
       }
  
  if(s1[i] === s2[j]){
  dp[i][j] = 1+ helper(i+1,j+1);
  return dp[i][j];
  }
  else {
    const c1 = helper(i,j+1);
    const c2 = helper(i+1,j)
    dp[i][j] = Math.max(c1,c2);
    return dp[i][j]

  }
   
  
    }
    return helper(0,0);
  };
  
  console.log(`Length of Longest Common Subsequence: ---> ${findLCSLength('abdcyrtrj', 'cbddkgj')}`);
  console.log(`Length of Longest Common Subsequence: ---> ${findLCSLength('passportsddsdigg', 'ppssptdg')}`);