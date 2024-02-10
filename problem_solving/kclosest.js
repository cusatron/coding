/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findIndex= function(arr,x){
    let index;
    if(x >= arr[arr.index-1]){
        return arr.index;
    }
    else if (x <= arr[0]){
        return 0;
    }
    else {
        helper(0,arr.length-1);
        return index;

    }
    function helper(s,l){
        let mid = parseInt((s+l)/2);
        console.log("midde",arr[mid],mid);
        if(mid >0 && mid < arr.length-1 )
        {
            index = (x- arr[mid-1]) <= (arr[mid] -x) ? mid-1 : ((x- arr[mid]) <= (arr[mid+1] -x) ? mid : mid+1);
        }
       if(index === undefined){
           index =mid;
       }
        
    if(arr[mid] === x){
        index =  mid;
    }
        if( s<l){
     
     if( x < arr[mid]){
        helper(s,mid);
    }
    else  if( x > arr[mid]){
        helper(mid+1,l);
    }   
     }
     
      
    }
  
}
var findClosestElements = function(arr, k, x) {
    let index = findIndex(arr,x);
    console.log("finding",x, "k",k,"middle value",arr[index],"idex",index);
    let leftIndex =index;
    let rightIndex =index;
    let output =[arr[index]];
    while(k >1){
        if(leftIndex >0 && rightIndex <arr.length-1){
        if((x-arr[leftIndex-1]) <= (arr[rightIndex+1] - x)){
            leftIndex--;
            output.push(arr[leftIndex]);
        }
        else{
            rightIndex++;
             output.push(arr[rightIndex]);
        }
        }
        else if (leftIndex <=0 && rightIndex < arr.length-1){
            rightIndex++;
                  output.push(arr[rightIndex]);
        }
             else if (leftIndex > 0 && rightIndex >= arr.length-1){
            
            leftIndex--;
                  output.push(arr[leftIndex]);
        }
        k--;
    }
    return output.sort((a,b) => a-b);
    
    
};

console.log(findClosestElements([1,3],
    1,
    2));
