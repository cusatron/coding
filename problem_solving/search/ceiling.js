function search_ceiling_of_a_number(arr, key) {
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
          return mid;

      }
      else if(key < arr[0]){

        return 0;
      }
      else if(key > arr[arr.length-1]){
          return -1

    } else {
         return mid+1
    }

    }
  
  //  value greater than or equal to key
  console.log(search_ceiling_of_a_number([4, 6, 10], 6));
  console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12));
  console.log(search_ceiling_of_a_number([4, 6, 10], 8));
  console.log(search_ceiling_of_a_number([4, 6, 10], -1));