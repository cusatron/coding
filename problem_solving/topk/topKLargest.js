var {MinHeap} = require("../../dsalgo/heap2");
const find_k_largest_numbers = function(nums, k) {
    result = []
    // TODO: Write your code here
     const minheap = new MinHeap();

    for (let i=0;i<k;i++){
        minheap.insert(nums[i]);
    }
   for (let i=k;i<nums.length;i++){
       if(nums[i] > minheap.peak()){
        minheap.insert(nums[i]);
        minheap.extractMin();
     
       }
   }

    return minheap.data;
  };
  
  
  console.log(`Here are the top K numbers: ${find_k_largest_numbers([3, 1, 5, 12, 2, 11], 3)}`)
  console.log(`Here are the top K numbers: ${find_k_largest_numbers([5, 12, 11, -1, 12,12,12], 3)}`)
  