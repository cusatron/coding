/**
 * @param {number[]} nums
 * @return {boolean}
 * official answer
 */  
 let canPartitionMain = function(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) sum += num[i];
  
    // if 'sum' is a an odd number, we can't have two subsets with equal sum
    if (sum % 2 !== 0) return false;
  
    const dp = {};
    return canPartitionRecursive(dp, num, sum / 2, 0);
  };
  
  function canPartitionRecursive(dp, num, sum, currentIndex) {
    // base check
    console.log(currentIndex,num[currentIndex],sum);
    if (sum === 0) return true;
  
    if (num.length === 0 || currentIndex >= num.length) return false;
  
    dp[currentIndex] = dp[currentIndex] || {};
    // if we have not already processed a similar problem
    if (typeof dp[currentIndex][sum] === 'undefined') {
      // recursive call after choosing the number at the currentIndex
      // if the number at currentIndex exceeds the sum, we shouldn't process this
      if (num[currentIndex] <= sum) {
        if (canPartitionRecursive(dp, num, sum - num[currentIndex], currentIndex + 1)) {
          dp[currentIndex][sum] = true;
          return true;
        }
      }
  
      // recursive call after excluding the number at the currentIndex
      dp[currentIndex][sum] = canPartitionRecursive(dp, num, sum, currentIndex + 1);
    }
    console.log(dp);
    return dp[currentIndex][sum];
  }

  //

 var canPartition = function(nums) {
    let sum = nums.reduce((sum,i) => sum+i);
    let halfsum = sum/2;
    let isEqual = false;
    let dp ={};
    
 
    if(halfsum !== parseInt(halfsum)){
        return false;
    }
    var helper = function(hsum,i){
        console.log("inside",i,nums[i],hsum);
        if(hsum === 0 ){
            return true;
        }
        if(dp[i] === undefined){
            dp[i] = {};
        }
         if(dp[i][hsum] !== undefined ){
            return dp[i][hsum];
        }
        
      
       if( nums.length === 0 || i >= nums.length) return false;
        if(nums[i] <= hsum){
       
            dp[i][hsum] =  helper(hsum-nums[i],i+1);
           if(dp[i][hsum]) return true;
            
        }
            //console.log("inside",hsum,i,nums[i]);
            dp[i][hsum] =  helper(hsum,i+1);
            //console.log("left");
            console.log("dp",dp);
            return  dp[i][hsum];
        
    }
 
    return helper(halfsum,0);
    
};
let arr = [1,2,3,4,5,6,7];
let arr1 = [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,99,97]
console.log(canPartition(arr));