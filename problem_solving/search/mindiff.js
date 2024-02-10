const search_min_diff_element = function(arr, key) {
    // TODO: Write your code here
    let found = false;
    let mid;
    var helper = function (left,right){
       mid = parseInt((left+right)/2);
      //console.log(left,right,mid);
      if(left <= right){
        if(arr[mid] === key){
         found = true;
      }
      if( key < arr[mid]){
         helper(left,mid-1);
      }
      else {
         helper(mid+1,right);
      }
   
    }
      }
       helper(0,arr.length-1);
      if(found){
          return arr[mid];

      }
      else if(key < arr[0]){

        return arr[0];
      }
      else if(key > arr[arr.length-1]){
          return arr[arr.length-1];

    } else {
        let closest = (Math.abs(key -arr[mid]) < Math.abs(arr[mid+1])) ? arr[mid] : arr[mid+1];
         return closest
    }

    
  
  };
  
  
  console.log(search_min_diff_element([4, 6, 10], 7))
  console.log(search_min_diff_element([4, 6, 10], 4))
  console.log(search_min_diff_element([1, 3, 8, 10, 15], 12))
  console.log(search_min_diff_element([4, 6, 10], 17));