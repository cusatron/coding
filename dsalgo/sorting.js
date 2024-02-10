"use strict"
function selectionSort (a){
    let temp = 0;
    for(let i =0;i<a.length;i++ ){
        temp = a[i];
        for(let j =i+1;j<a.length;j++ ){
            if(a[j] < temp){
                a[i] =a[j];
                a[j]=temp;
                temp =a[i];
             }

        }
    }
    return a

}

function bubleSort (a){
    let temp = 0;
    for(let i =0;i<a.length;i++ ){
        temp = a[i];
        for(let j =0;j<a.length-1;j++ ){
            if(a[j+1] < a[j]){
                temp =a[j];
                a[j] =a[j+1];
                a[j+1]=temp;
                
             }
             // console.log(a);

        }
    }
    return a

}


function radixSort (a){
    let temp = 0;
    let sortmap= [];
    let stri ="";
    let len =0;
    for(let i =0;i<a.length;i++ ){
        stri = a[i].toString();
        len = stri.length;
        if(sortmap[len] === undefined || sortmap[len] === null || sortmap[len].length<=0 ){
            sortmap[len] =[];
        }{

        }
        sortmap[len].push(a[i]);
     
    }
    let master =[];
    let temparr=[];
    for (let i in sortmap){
        if(sortmap[i] !==undefined){
            temparr = sortmap[i].sort();
            master.push(...temparr);
        }
       
    }
    return master;

}

function basic_sorted_merg(a,b){
    let merge =[];
    let i=0,j=0;
    while(merge.length < (a.length+b.length)){
       // console.log(a[i],b[j]);
        if(a[i] !== undefined && a[i] !== null && b[j] !== undefined && b[j] !== null){
        if(a[i] < b[j]){
            merge.push(a[i]);
            i++;
        }else {
            merge.push(b[j]);
            j++;
        }
    } 
    else if(a[i] !== undefined && a[i] !== null ){
        merge.push(a[i]);
        i++;

    }
    else if(b[j] !== undefined && b[j] !== null ){
        merge.push(b[j]);
        j++;
    }
    // console.log(merge);

    }
    return merge;

}
function mergeSort(arr){
    let f=0;
    let l=arr.length;
    if(arr.length <= 1 ){
        return arr;
    }
    let m = parseInt(l/2);
    let left = mergeSort(arr.slice(f,m));
    let right = mergeSort(arr.slice(m,l));
    return basic_sorted_merg(left,right);


}


//find kth smalles element
var kthSmallest1 = function(matrix, k) {
    let first = [];
    let second =[];
  
    if(matrix.length>1 ){
        first = matrix[0];
    
    for (let i=1;i<matrix.length;i++){
        if(matrix[i].length>1 ){
            second =matrix[i];
            first = basic_sorted_merg(first,second);
        }
        
       // console.log(first);
        
        
    }
        if(first[k-1] !== undefined){
            return first[k-1];
        }
        else {
            return -1;
        }
            
    }
    else {
        return 0
    }
    
};
let arr = [12,4,3,5,67,7,9];
let b =[2,9];
let a = radixSort(arr)  
//// console.log( a );
//// console.log(mergeSort(arr));
var simple_merge = function(a,b){
    let i=0;
    let j=0;
    let merge_data =[];
    while(merge_data.length < (a.length +b.length)){
       if (a[i] !== undefined && a[i] !== null && b[j] !== null && b[j] !== undefined ){
        if(a[i]<b[j]){
            merge_data.push(a[i]);
            i++;
            
        }
        else {
            merge_data.push(b[j]);
            j++;
        }
    }
    else if(a[i] !== undefined && a[i] !== null){
         merge_data.push(a[i]);
            i++;
        
    }
     else if(b[j] !== undefined && b[j] !== null){
         merge_data.push(b[j]);
            j++;
    }
    // console.log(merge_data);
    
       }
return merge_data;
}
var kthSmallest = function(matrix, k) {
    let second =[];
  
    if(matrix.length >=1 ){
        let first = matrix[0];
    
    for (let i=1;i<matrix.length;i++){
        if(matrix[i].length >=1 ){
            second =matrix[i];
            first = simple_merge(first,second);
            
        }
        
       
    
        
    }
    console.log(first);
        if(first[k-1] !== undefined && first[k-1] !== null){
            return first[k-1]
        }
        else {
            return -1;
        }
            
    }
    else {
        return 0
    }
    
};
//kth largest unique number
var findKthLargest = function(matrix, k) {
    let second =[];
  
    if(matrix.length >=1 ){
        let first = matrix[0];
    
    for (let i=1;i<matrix.length;i++){
        if(matrix[i].length >=1 ){
            second =matrix[i];
            first = simple_merge(first,second);
            
        }
        
       
    //// console.log(first);
        
    }
        let unique = new Set(first);
        first = [...unique];
        // console.log(unique);
        if(k <= first.length){
            return first[k-1];
        }
        else {
            return -1;
        }
            
    }
    else {
        return 0
    }
    
};
///k index number
var findKthLargest = function(matrix, k) {
    let f=0;
    let final = mergeSort(matrix);
    if(k <= matrix.length){
        return final[k-1];s
    }
    return -1;
  
    
};

var findIndex= function(arr,x){
    let index;
    function helper(s,l){
        let mid = parseInt((s+l)/2);
        index =mid;
        console.log(s,l,mid);
    if(arr[mid] === x){
        index =  mid;
    }
        else if( s<l){
     
     if( x < arr[mid]){
        helper(s,mid-1)
    }
    else  if( x > arr[mid]){
        helper(mid+1,l);
    }
       
        
     }
   
    }
    helper(0,arr.length-1);
    console.log("indx",index)
        return index;
}

console.log(findIndex([1,2,3,4,5,6,7,11,23],13));

 //console.log(kthSmallest([[1,2,5,9],[10,11,13],[12,12,13,15],[1,5,9,12,17]],8));
//console.log(findKthLargest([[1,2,5,9],[10,11,13],[12,12,13,15],[1,5,9,12,17]],8));


