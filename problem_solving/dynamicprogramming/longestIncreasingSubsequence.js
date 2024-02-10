const findLISLength = function(nums) {
    // TODO: Write your code here
    var master =[];
    let a=0;
    let b=0;
    let dp ={};
    var helper = function helper (previous,current){
      console.log(previous,current);
      if(current === nums.length){
        return 0;
      }
       dp[current] = dp[current] ? dp[current] : {};
      if(dp[current][previous+1] !== undefined){
          return dp[current][previous+1];

      }
      let a=0;
        if(previous === -1 || nums[current] > nums[previous]) {
            a = 1 +  helper(current,current+1);
          }
          b = helper(previous,current+1);
          dp[current][previous+1] = Math.max(a,b);
        return dp[current][previous+1];
    }
   
    return helper(-1,0);
     
   };
   console.log(
    `Length of Longest Increasing Subsequence: ---> ${findLISLength([-4, 10, 3, 7, 15])}`
  );