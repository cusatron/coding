/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let profit = 0;
    let lngth = prices.length;
    let first =prices[0];
    for(i=1;i<lngth;i++){
       if(prices[i]>first){
            if(profit < prices[i]-first)
            profit = prices[i]-first;
        }else {
            first = prices[i]
        }
        
        console.log(profit);
    }
    //console.log("final",profit);
    return profit
    
};

let arr = [7,1,4,3,2,9];
console.log(maxProfit(arr));