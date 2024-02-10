var find_max_in_bitonic_array = require("./bitonicArray");
function binarySearch(arry,a){
    let len = arry.length;
    let first =0;
    let last =len-1;
    let mid = parseInt(first+last/2);
    if(a ==arr[0]){
        return 0;
    }
    else if(a ==arr[len-1]) {
        return len-1;
    }
    else {
        while (a !== arr[mid] && first < last){
            console.log(first, last, mid);
            if(a>arr[mid]){
      
                first =mid+1;
                mid = parseInt((first +last)/2);
            }
            else {
                
                last=mid-1;
                mid = parseInt((first +last)/2);
            }
            
    
        }
        if(first >= last){
            return -1;
        }
        else {
            return mid;
        }
        
    }
    
    


}
let arr =[1,3,5,7,8,9,12,19,21,26,29,31,49,58,89,90,93,99]
console.log(binarySearch(arr,-21));