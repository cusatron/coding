var minSubArrayLen = function(target, nums) {
    var window =[];
    var min_num= Infinity;
    var sum=0;
    let i=0;
    console.log()
    for(let i =0; i < nums.length; i++){     
        sum = sum+nums[i];  
        window.push(nums[i]);
       // console.log(i,"start",sum,min_num,window);
          while(sum >= target && window.length>0){
                if(min_num > window.length){
                    min_num = window.length;
                }
                sum= sum - window[0];        
                window.shift();  //n operation
            }          
         
        
           }
        
      //console.log(sum,min_num,window);
    
    if(min_num === Infinity){
        return 0;
    }
    else {
        return min_num;
    }
 
    
};

let k =11;
let arr =[1,2,3,4,5];


console.log(minSubArrayLen(k,arr))