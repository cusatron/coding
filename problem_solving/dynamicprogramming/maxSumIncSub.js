const findMSIS = function(nums) {
    // TODO: Write your code here
    let dp ={};
    let rc=0;
    let d=0;
    var helper = function (prev,current,sum){
        
            rc++;
            console.log(rc,d, prev,current,"sum",sum);
            if(current === nums.length){
                return sum;

            }
          
            dp[prev] =  dp[prev] ? dp[prev] : {};
            dp[prev][current] =  dp[prev][current] ? dp[prev][current] : {};
            if(dp[prev][current][sum] !== undefined){
                d++;
             
                 return dp[prev][current][sum];
            }
            
            let sum1=sum;
        if(prev === -1 || nums[prev] < nums[current]){
            sum1 =  helper(current,current+1,sum+nums[current]);

        }
      
          let sum2 = helper(prev,current+1, sum);

        dp[prev][current][sum] =  Math.max(sum1,sum2);
       // console.log(rc, dp);
        return dp[prev][current][sum]
        
        
    }
    return helper(0,-1,0);

    
  };
  
  console.log(`Maximum Sum Increasing Subsequence is: ---> ${findMSIS([4, 1, 2, 6, 10, 1, 12])}`);
console.log(`Maximum Sum Increasing Subsequence is: ---> ${findMSIS([-4, 10, 3, 7, 15])}`);
console.log('Maximum Sum Increasing Subsequence is: ---> ' +findMSIS([1, 3, 8, 4, 14, 6, 14, 1, 9, 4, 13, 3, 11, 17, 29]));