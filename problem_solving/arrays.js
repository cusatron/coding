

/*
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

/// double pointer questions  ..same as set 
var removeDuplicates = function(nums) {
    let j=0;
    for(i=1 ; i<nums.length ;i++){
        if(nums[j] !== nums[i]){
            j++;
            nums[j] = nums[i];
            
        }
    }
        console.log(nums);
        return j
        
    
};
console.time();
console.log(new Set([0,0,1,1,1,2,2,3,3,4,4,4]));
console.timeEnd();
console.time();
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4,4,4]));
console.timeEnd();



 function custumSum(A, B){
        let  sum =0,result =0;
        let l = A.length-1;
           for (let i =0 ;i<B ;i++){
            sum = sum +A[i];
           }
           result =sum;
          for (let i =0 ;i<B ;i++){
              sum = sum - A[B-i-1] + A[l-i];
              result = Math.max(result,sum);

          }
       return result;
       }
       let test =[ -533, -666, -500, 169, 724, 478, 358, -38, -536, 705, -855, 281, -173, 961, -509, -5, 942, -173, 436, -609, -396, 902, -847, -708, -618, 421, -284, 718, 895, 447, 726, -229, 538, 869, 912, 667, -701, 35, 894, -297, 811, 322, -667, 673, -336, 141, 711, -747, -132, 547, 644, -338, -243, -963, -141, -277, 741, 529, -222, -684, 35 ]
       
   console.log(custumSum(test,48));
   