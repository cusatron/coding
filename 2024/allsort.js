function quicksort(arr){
    let left =[];
    let right = [];
    
    if(arr.length <= 1){
        return arr;
    }
    let pivot = arr[0];
    for(let i=1; i <arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i]);
        }
    }
    return [...quicksort(left),pivot,...quicksort(right)];
  
}

function mergesort(arr){
    if(arr.length <=1){
        return arr;
    }
    let m = arr.length/2;
    let left = arr.slice(0,m);
    let right  = arr.slice(m);
   // console.log(m,left,right);
    return merge(mergesort(left),mergesort(right));

}

function merge(left,right){
    let l=0;
    let r=0;
    let out =[];
    while( l < left.length && r < right.length){
        if(left[l] < right[r]){
            out.push(left[l]);
            l++;
        }else {
                out.push(right[r]);
                r++;
            }

        }
        if(l <left.length){
            out = [...out,...left.slice(l)]
        }
        else if ((r <right.length)) {
            out = [...out,...right.slice(r)]
        }
        return out;
    }



let sample = [11,5,6,21,2,25,16,9,12,15];
//merge(sample)
console.trace(mergesort(sample))

console.time()
console.log(quicksort(sample));
console.timeEnd()