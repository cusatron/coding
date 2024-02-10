let dp ={};
var uniquePaths = function(m, n) {
    if(m >0 && n >0){
        if(m === 1 || n === 1){
        return 1;
    }
    
    dp[m] = dp[m] ? dp[m] : {};
    if( dp[m][n] !== undefined && dp[m][n] !== null){
        return dp[m][n];
    }
    dp[m][n] =  uniquePaths(m-1,n) + uniquePaths(m,n-1);
    return dp[m][n];
    }
    
};
console.log(uniquePaths(3,70));
