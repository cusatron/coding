var {MaxHeap} = require("../../dsalgo/heap2");
const find_Kth_smallest_number = function(nums, k) {
    let maxHeap = new MaxHeap();
    for(let i=0; i < k ;i++){
        maxHeap.insert(nums[i]);
    }
    for(let i =k ; i <nums.length ;i++){
        if(nums[i]< maxHeap.peak()){
           
            maxHeap.insert(nums[i]);
            maxHeap.extractMax();
        }
    }
    // TODO: Write your code here
    return maxHeap.peak();
  };
  
  
  console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 3)}`)
  // since there are two 5s in the input array, our 3rd and 4th smallest numbers should be a '5'
  console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 4)}`)
  console.log(`Kth smallest number is: ${find_Kth_smallest_number([5, 12, 11, -1, 12], 3)}`)
  