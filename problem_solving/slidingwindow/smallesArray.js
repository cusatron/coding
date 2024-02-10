const smallest_subarray_with_given_sum = function (s, arr) {
  let window = [];
  let len = Infinity;
  let temp = 0;
  let i = 0;
for(let i =0 ;i <arr.length ; i++){
    temp = temp + arr[i];
      window.push(arr[i]);
      i++;
    while (temp >= s) {
      if (window.length < len) {
        len = window.length;
      }
      temp = temp - window[0];
      window.shift();
    
  }
}
  if (len === Infinity) {
    return -1;
  } else {
    return len;
  }
};

console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [2, 1, 5, 2, 3, 2]
  )}`
);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])}`);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])}`);
