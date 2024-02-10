const search_next_letter = function(letters, key) {
    let found = false;
    let mid;
    var helper = function (left,right){
       mid = parseInt((left+right)/2);
      //console.log(left,right,mid);
      if(left <= right){
        if(letters[mid] === key){
         found = true;
      }
      if( key < letters[mid]){
         helper(left,mid-1);
      }
      else {
         helper(mid+1,right);
      }
   
    }
      }
       helper(0,letters.length-1);
       if(key < letters[0]){

        return letters[0];
      }
      else if(key > letters[letters.length-1]){
          return letters[0];

    } else {
         return letters[mid+1];
    }

    }
  
  console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f'))
  console.log(search_next_letter(['a', 'c', 'f', 'h'], 'b'))
  console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm'))
  