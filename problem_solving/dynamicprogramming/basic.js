
var knapsackRecursive =  function(profits,weights,capacity){
    let dp =[];
    function helper(capacity,i){
        if(dp[i] !== null && dp[i] !== undefined){
            if(dp[i][capacity] !== null  && dp[i][capacity] !== undefined){
            return  dp[capacity][i];
            }
            else {
                dp[i][capacity] =0;
        }
        }
        else {
            dp[i] =[];
        }

        if(capacity <= 0  || i >= profits.length){
            return 0;
        }
        let profits1 =0;
        console.log(i,weights[i],profits[i],capacity,profits1);
        if(weights[i] <= capacity){
         
            profits1 =  profits[i] + helper(capacity - weights[i],i+1);
            console.log("profit1",i,profits1,profits1[i]);
        }
       let profits2 =  helper(capacity,i+1);
       console.log("profit2",i,profits2,profits1[i]);
    
        dp[i][capacity] =  Math.max(profits1,profits2);
        return dp[i][capacity];
    }
    return helper(capacity,0);
   
}


var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${knapsackRecursive(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${knapsackRecursive(profits, weights, 6)}`);