const myfindLCSLength = function(s1, s2) { //brute force but totally done by me 
    let dp ={};
    var helper = function(i,j,count){
       console.log(i,j);
        if(i === s1.length || j === s2.length) return count;
        dp[i] =  dp[i] ?  dp[i] :{};
        dp[i][j] =  dp[i][j] ?  dp[i][j] :{};
        if(dp[i][j[count]] !== undefined){
            return dp[i][j];
        }
        if(s1[i] === s2[j]){
            count =  helper(i+1,j+1,count+1);  
          return count;
        }
       const  c1=  helper(i,j+1,0);
        const c2= helper(i+1,j,0)
        dp[i][j][count] = Math.max(count,Math.max(c1,c2));
        return dp[i][j][count];
    }
    return helper(0,0,0);
  
  };
  
  const findLCSLength = function(s1, s2) {  /// official way
    function findLCSLengthRecursive(s1, s2, i1, i2, count) {
      if (i1 === s1.length || i2 === s2.length) return count;
  
      if (s1[i1] === s2[i2]) {
        count = findLCSLengthRecursive(s1, s2, i1 + 1, i2 + 1, count + 1);
      }
  
      const c1 = findLCSLengthRecursive(s1, s2, i1, i2 + 1, 0);
      const c2 = findLCSLengthRecursive(s1, s2, i1 + 1, i2, 0);
  
      return Math.max(count, Math.max(c1, c2));
    }
    return findLCSLengthRecursive(s1, s2, 0, 0, 0);
  };

  const tabfindLCSLength = function(s1, s2) {
    const dp = Array(s1.length + 1)
      .fill(0)
      .map(() => Array(s2.length + 1).fill(0));
  
    let maxLength = 0;
    for (let i = 1; i <= s1.length; i++) {
      for (let j = 1; j <= s2.length; j++) {
        if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
          dp[i][j] = 1 + dp[i - 1][j - 1];
          maxLength = Math.max(maxLength, dp[i][j]);
        }
      }
    }
    return maxLength;
  };
  
  console.log(`Length of Longest Common Substring: ---> ${findLCSLength('abdca', 'cbda')}`);
  //console.log(`Length of Longest Common Substring: ---> ${findLCSLength('passport', 'ppsspt')}`);
  
  
  console.log(`Length of Longest Common Substring: ---> ${myfindLCSLength('abdca', 'cbda')}`);
  //console.log(`Length of Longest Common Substring: ---> ${findLCSLength('passport', 'ppsspt')}`);
   