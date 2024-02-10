var findMedianSortedArrays = function(nums1, nums2) {
    var arr = [...num2,...num2];
   

    
};

function  findPivot(arr,f,l){
    len = arr.length;
    for (i in arr){
        if(f <= parseInt(len/2)){
            if(arr[f]>arr[i] ){
                temp = arr[f]
                arr[f] = arr[i];
                arr[i] =  temp;
                f =i;
            }
           

        }
        else {
            break;
        }
        console.log(l,f,arr);
        
    }
    return arr[f];
}

console.log(findPivot([22,4,7,2,9,1,12,8,9],0,8))