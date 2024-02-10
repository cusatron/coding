function dp(n){

let memo =[];
    function fibo(n){
    if(memo[n] !== undefined){
        return memo[n];
    }
    if(n === 1){ return 1}
     memo[n]= n*fibo(n-1);
     return memo[n];
}
return fibo(n);
}
function fibo2(n){
 
    if(n === 1){ return 1}
    return n+fibo2(n-1);
    
}

console.time();
console.log(dp(200));
console.timeEnd();