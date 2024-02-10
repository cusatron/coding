const max_sub_array_of_size_k = function(k, arr) {
    // TODO: Write your code here
    let window=[];
    let max_sum=0;
    for(let j=0; j <k;j++){
      window.push(arr[j]);
      max_sum = max_sum+arr[j];
    }

   
    let nextsum = max_sum;
    for(let i =k ; i<arr.length;i++){
        nextsum = nextsum + arr[i] - window[0];
        max_sum = Math.max(nextsum,max_sum);
        window.shift();
        window.push(arr[i]);
        console.log("i",i ,window,max_sum);

    }
    return max_sum;
}
     

console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);

 
  
  