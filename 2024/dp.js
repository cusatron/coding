function knapsack(w,v,capacity,n){

    const dp = Array.from({ length: n+1 }, () => Array.from({ length: capacity+1 }, () => -1));
   function solver(w,v,capacity,n){

    // console.log(capacity,n);
 

    if(n <=0 || capacity <=0){
        return 0;
    }
 
    if(dp[n][capacity] != -1){
        return dp[n][capacity];
    }
  

    // this is the main line beedu log
    if( w[n-1] > capacity){

    //     console.log("if");
    //    // console.log(capacity,n);
        dp[n][capacity] =  solver(w,v,capacity,n-1); 
    }
    else {
//         console.log("e");
// //console.log(capacity,n);
        dp[n][capacity]= Math.max(v[n-1]+solver(w,v,capacity-w[n-1],n-1), solver(w,v,capacity,n-1)); //
    }

  
    //console.log(n,capacity,dp);
    return dp[n][capacity];

}
//console.log(dp);
 return solver(w,v,capacity,n);
 console.log(dp);


}

function subsetSum(arr,total){

    const dp = Array.from({ length: arr.length+1}, () => Array.from({ length: total+1 }, () => -1));
   function solver(arr,total,n){

    console.log(arr,total,n,dp);
 

    if(total ==0){
        console.log("it was true");
        console.log(JSON.stringify(dp));
        return true;
    }
    if(n === 0 ){
        return false;
    }
 
    if(dp[n][total] != -1){
        return dp[n][total];
    }
  

    // this is the main line beedu log
    if( arr[n] > total){

    //     console.log("if");
    //    // console.log(capacity,n);
        dp[n][total] =  solver(arr,total,n-1); 
    }
    else {
//         console.log("e");
// //console.log(capacity,n);
        dp[n][total]= solver(arr,total,n-1 ) ||  solver(arr,total-arr[n],n-1 )
    }

  
    //console.log(n,capacity,dp);
    return dp[n][total];

}
//console.log(JSON.stringify(dp));
  return solver(arr,total,arr.length);
//  console.log(dp);


}

// let w = [1, 2, 3];
// let v = [22, 33, 44];
// let n =3;
// let capacity = 3;
// console.log(knapsack(w,v,capacity,n));



console.log(subsetSum([3, 4, 5, 2],9));