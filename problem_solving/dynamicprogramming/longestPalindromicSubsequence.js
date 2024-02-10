let findLPSLength = function(st) {
     let dp  ={};
   var helper =  function (i,j){
       if(i === st.length || j === -1) return 0;
       dp[i] =  dp[i] ? dp[i] : {};
       if(dp[i][j] !== undefined){
            return dp[i][j];
       }

       if(st[i] == st[j]){
           dp[i][j]= 1+ helper(i+1,j-1);
           return dp[i][j];
       }
       const a = helper(i,j-1);
       const b = helper(i+1,j);
       dp[i][j] =  Math.max(a,b);
       return dp[i][j];

   }
   return helper(0,st.length-1);

  }

  let findMinimumDeletions = function(st) {
    let dp  ={};
    var helper =  function (i,j){
        if(i === st.length || j === -1) return 0;
        dp[i] =  dp[i] ? dp[i] : {};
        if(dp[i][j] !== undefined){
             return dp[i][j];
        }
 
        if(st[i] == st[j]){
            dp[i][j]= 1+ helper(i+1,j-1);
            return dp[i][j];
        }
        const a = helper(i,j-1);
        const b = helper(i+1,j);
        dp[i][j] =  Math.max(a,b);
        return dp[i][j];
 
    }
    const c =  helper(0,st.length-1);
    return st.length-c;


  }
  
  console.log("Length of LPS ---> " + findLPSLength("abdbca"));
  console.log("Length of LPS ---> " + findLPSLength("cddpd"));
  console.log("Length of LPS ---> " + findLPSLength("pqr"));


  console.log('Minimum number of deletions required ---> ' + findMinimumDeletions('abdbca'));
console.log('Minimum number of deletions required ---> ' + findMinimumDeletions('cddpd'));
console.log('Minimum number of deletions required ---> ' + findMinimumDeletions('pqr'));
