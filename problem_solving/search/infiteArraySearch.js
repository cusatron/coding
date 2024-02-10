class ArrayReader {

    constructor(arr) {
      this.arr = arr;
    }
  
    get(index) {
      if (index >= this.arr.length)
        return Number.MAX_SAFE_INTEGER;
      return this.arr[index]
    }
  };
  
  
  const search_in_infinite_array = function(reader, key) {
    let start =0;
    let found =-1;
    let end = 2;
    if(reader)
    while (key > reader.get(end)){
        start = end;
        end= end*2;

    }
console.log("s/e",start, end );
    var helper =  function (left,right){
       
        let mid = parseInt((left+right)/2);
        //console.log(left,right);
        if(left <= right){
            if(reader.get(mid) === key){
                found = mid;
            }
            else if( key < reader.get(mid) ){
                helper(left,mid-1);
            }
            else {helper(mid+1,right);
                
            }
        }
    }

    helper(start,end);
    return found;
   
  };
  
  var reader = new ArrayReader([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]);
  console.log(search_in_infinite_array(reader, 16))
  console.log(search_in_infinite_array(reader, 11))
  reader = new ArrayReader([1, 3, 8, 10, 15])
  console.log(search_in_infinite_array(reader, 15))
  console.log(search_in_infinite_array(reader, 200))
  