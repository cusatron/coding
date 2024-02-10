
let dp ={};
var uniqueParts = function(m, n) {
 if(m === 0){
        return 1;
    }
     
   else if(m <0 || n === 0){
        return 0;
    }
    else {
        dp[m] = dp[m] ? dp[m] : {};
        if( dp[m][n] !== undefined && dp[m][n] !== null){
            return dp[m][n];
        }
            dp[m][n] = uniqueParts(m-n,n)+uniqueParts(m,n-1);
                return dp[m][n];åå
        

    }
    
  
    
};
console.log(uniqueParts(7,3));