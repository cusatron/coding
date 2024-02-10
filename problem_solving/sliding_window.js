let ffindMaxSlidingWindow = function(arr, windowSize) {
    let result = [];
    
    if(arr.length == 0) {
      return result;
    }
    
    if (windowSize > arr.length) {
      return result;
    }
  
    let window_ = [];
    //find out max for first window
    for (let i = 0; i < windowSize; i++) {
        console.log("start",i,window_,arr[i] ,arr[window_[window_.length - 1]]);
      while (window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]) {
      console.log("before pop",i,window_,arr[i] ,arr[window_[window_.length - 1]]);
        window_.pop();
        console.log("after pop",i,window_,arr[i] ,arr[window_[window_.length - 1]]);
      } 
      window_.push(i);
      console.log("after push",i,window_,arr[i] ,arr[window_[window_.length - 1]]);
    
    }
    
    
    result.push(arr[window_[0]])
    
    for (let i = windowSize; i < arr.length; i++) {
      // remove all numbers that are smaller than current number
      // from the tail of list
    
      while (window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]) {
      
        window_.pop();
      
      }
      
      //remove first number if it doesn't fall in the window anymore
      if (window_.length > 0 && (window_[0] <= i - windowSize)) {
      
        window_.shift();
      
      }
    
      window_.push(i);
      result.push(arr[window_[0]]);
    
    } 
    return result;
  };

  let findMaxSlidingWindow = function(arr,windowsize){
    let maxarr=[];
    let window = [];
      for( let i =0;i <windowsize ;i++){
          while(window.length>0 &&  arr[i]>=arr[window[window.length-1]]){
              window.pop();
          }
          window.push(i);
      }
      maxarr.push(arr[window[0]]);
      for(let i = windowsize;i<arr.length ;i++){
        while(window.length>0 &&  arr[i]>=arr[window[window.length-1]]){
            window.pop();
        }
        window.push(i);
  
    if(window.length>0 && window[0] <= i - windowsize){
        window.shift();
    }
    maxarr.push(arr[window[0]]);
}
return maxarr;
  }
  
  //let array = [3, 1, 2, 0, 5, 6, 7, 8, 9, 10];
  //console.log("Array = " + array);
  //console.log("Max = " + ffindMaxSlidingWindow(array, 3));
  let array = [5, 4, 3, 2, 1, 6, 7, 8, 9, 10];
  //console.log("Array = " + array);
  console.log("Max = " + ffindMaxSlidingWindow(array, 3));
  console.log("Max = " + findMaxSlidingWindow(array, 3));

  //let array1 = [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67]  
  //console.log("Array = " + array1);
  //console.log("Max = " + ffindMaxSlidingWindow(array1, 3));