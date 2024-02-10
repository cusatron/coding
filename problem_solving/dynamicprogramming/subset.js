/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
   
     let subset =[[]];
    let set =[]
       for (let i =0 ; i < nums.length ;i++){

        //subset.push([nums[i]]);
        let n = subset.length;
       // console.log("i",i,subset);
           for (let k =0 ; k < n ;k++){
               console.log(subset);
               console.log("x",subset[k].slice(0).length === subset[k].length,subset[k].slice(0),"between",subset[k]);
               set = subset[k].slice(0);
             //  console.log("before",i,k,"set",set,"mainser",subset);
                set.push(nums[i]);
                subset.push(set);
               
               
              // console.log("after","set",set,"mainser",subset);
           } 
       }
     
     return subset;
};

//console.log(subsets([1, 2, 3]));
let canPartitionDP = function(num) {
  // TODO: Write your code here
  let mastersum= num.reduce((s,i) => s+i);
  let min = mastersum;
  let a=0;
  let b =0;
  let diff=0;
  var dp ={};
  
  var helper = function (sum,i){
   console.log(i,"dp",dp);
   if(dp[i] === undefined){
    dp[i] = {};
}
 if(dp[i][sum] !== undefined ){
    return dp[i][sum];
}
 
  if(i === num.length-1){
    dp[i][sum] = Math.abs(((2 * sum) - mastersum));
   // console.log(sum,i ,"diff", diff,min);
    return dp[i][sum];
  }
   
    a = helper(sum-num[i],i+1,);
    b = helper(sum,i+1);
    dp[i][sum] =  Math.min(a,b);
    
    return dp[i][sum];
    


  }
  console.log("dp last",dp);
 return helper(mastersum,0);

};


/**
 * @param {number[]} stones
 * @return {number}
 */
 var canPartition = function(num) {
  let mastersum= num.reduce((s,i) => s+i);
let min = mastersum;
let a=0;
let b =0;
let diff=0;

var helper = function (sum,i){
  console.log(sum,i);
if(i < num.length ){
  diff = Math.abs(((2 * sum) - mastersum));
  console.log(sum,i ,"diff", diff,min);
  if(min > diff){
    min = diff;
  }
  helper(sum-num[i],i+1,);
  helper(sum,i+1);
  

}

}
helper(mastersum,0);
return min;
  
};


var canPartitionDp2 = function(num) {
  let mastersum= num.reduce((s,i) => s+i);
let min = mastersum;
let a=0;
let b =0;
let diff=0;
let dp ={};

var helper = function (sum,i){
  console.log(sum,i);
  if(dp[i] === undefined){
    dp[i] = {};
}
 if(dp[i][sum] === undefined ){
if(i < num.length ){
  diff = Math.abs(((2 * sum) - mastersum));
  console.log(sum,i ,"diff", diff,min);
  if(min > diff){
    min = diff;
  }
  dp[i][sum] = min;
  helper(sum-num[i],i+1);
  helper(sum,i+1);
  

}

}
}
helper(mastersum,0);
return min;
  
};
console.log(`Minimum subset difference is: ---> ${canPartitionDp2([1, 2, 3, 9])}`);
console.log(`Minimum subset difference is: ---> ${canPartitionDp2([1, 2, 7, 1, 5])}`);
console.log(`Minimum subset difference is: ---> ${canPartitionDp2([1, 3, 100, 4])}`);

