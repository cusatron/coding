const binary_search = function(arr, key) {
    // TODO: Write your code here
    let found = -1;
   var helper = function (left,right){
     let mid = parseInt((left+right)/2);
     //console.log(left,right,mid);
     if(left <= right){
       if(arr[mid] === key){
        found = mid;
     }
     if( (key < arr[mid] && arr[arr.length-1] >arr[0] ) || (key > arr[mid] && arr[arr.length-1] < arr[0])){
        helper(left,mid-1);
     }
     else {
        helper(mid+1,right);
     }
  
   }
     }
      helper(0,arr.length-1);
     return found;
   
  };



module.exports = {binary_search};

  /*
  console.log(binary_search([4, 6, 10], 10))
  console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5))
  console.log(binary_search([10, 6, 4], 10))
  console.log(binary_search([10, 6, 4], 11))
  */