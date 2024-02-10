const find_max_in_bitonic_array = function(arr) {
  let mid =0;
  let found =-1;
  var helper = function(left,right){
    
       mid = parseInt((left+right)/2);
      //console.log(left,right);
      if(left < right){      
        if(arr[mid] >  arr[mid+1] && arr[mid] > arr[mid-1]){
          found = mid;
        }
         if(arr[mid] < arr[mid+1]){
          helper(mid+1,right);
        }
        else {
          helper(left,mid-1);
        }
        
  
      }
      
  }
  helper(0,arr.length-1);
  if(typeof(found) !== undefined && found !== -1){
    
      return found;
   
  }
  return mid;
};
module.exports = { find_max_in_bitonic_array };

/*
console.log(find_max_in_bitonic_array([1, 3, 8, 12, 4, 2]))
console.log(find_max_in_bitonic_array([3, 8, 3, 1]))
console.log(find_max_in_bitonic_array([1, 3, 8, 12]))
console.log(find_max_in_bitonic_array([10, 9, 8]))
*/

