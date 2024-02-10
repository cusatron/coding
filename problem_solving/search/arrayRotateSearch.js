var {find_max_in_bitonic_array} = require("./bitonicArray");
var {binary_search}=  require("./search");

const search_rotated_array = function(arr, key) {
    // TODO: Write your code here
   let max = findMaxInRotatingArray(arr);
   // max  =4;
    let l1 = binary_search(arr.slice(0,max+1),key);
    let l2 = binary_search(arr.slice(max+1,arr.length),key);
    console.log("l",4,l1,l2);
    if( l1 !== -1){
        return l1;
   }
   
   if( l2 !== -1){
       return l2+(max+1);
   }
   
  }

  function findMaxInRotatingArray(arr){
      let mid;
      var helper =  function(start,end){
          mid = parseInt((start+end)/2);
          console.log(start,end,mid);
        if(start <= end ){
          if(start === end) return start;
            if(arr[mid] >  arr[mid+1] && arr[mid] > arr[mid-1]){
            return mid;
            }
               if(arr[start] < arr[mid]){
                return helper(mid+1,end);

              }else {

                return helper(start,mid-1);
              }
            }
            

      }
      return helper(0,arr.length-1);



  }
  
  console.log(findMaxInRotatingArray([ 2,3,4,6, 7,9, 10, -1,0,1]));
  //console.log(search_rotated_array([10, 15, 1, 3, 8], 3))
  //console.log(search_rotated_array([4, 5, 7, 9, 10, -1, 2], -1))
  


