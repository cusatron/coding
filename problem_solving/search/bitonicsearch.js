var {find_max_in_bitonic_array} = require("./bitonicArray");
var {binary_search}=  require("./search");

const search_bitonic_array = function(arr, key) {
    // TODO: Write your code here
    let partion_index = find_max_in_bitonic_array(arr);
   
    let l1 = binary_search(arr.slice(0,partion_index+1),key);
    let l2 = binary_search(arr.slice(partion_index+1,arr.length),key);
   // console.log("l",partion_index,l1,l2);
if( l1 !== -1){
     return l1;
}

if( l2 !== -1){
    return l2+partion_index;
}


    
  };
  
  
  console.log(search_bitonic_array([1, 3, 8, 4, 3], 4))
  console.log(search_bitonic_array([3, 8, 3, 1], 8))
  console.log(search_bitonic_array([1, 3, 8, 12], 12))
  console.log(search_bitonic_array([10, 9, 8], 10))
  