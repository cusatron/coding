function binarySearch(arr,s){

let n = arr.length;
let l =0;
let r =arr.length -1;

// 1,2,3,4 (l =0, r=3)

while(l<=r){
    m =parseInt((l+r)/2);
    console.log(l,r,m,arr[m],s);
 if(arr[m] === s){
    return m;
 }
else if(s>arr[m]){
    l=m+1;

 }
 else {
    r=m-1;
 }
}
 
return false;
}


console.log("search",binarySearch([2,4,6,8,9,12,14,15,17,20],20));
