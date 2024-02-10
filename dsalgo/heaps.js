class MaxHeaps {
    constructor(){
        this.data =[];


    }
insert(a){
    this.data.push(a);
    this.makeMinHeap();

}
extractMax(){ 
    this.data[0]=this.data[this.data.length-1];
    this.data.pop();
    let parent_index = 0;
    let child_indx_arry = [(parent_index*2)+1,(parent_index*2)+2];
    let child_indx = this.data[child_indx_arry[0]]>this.data[child_indx_arry[1]]?child_indx_arry[0]:child_indx_arry[1];
    let temp;
    //console.log("start",child_indx,parent_index,this.data);
    while((parent_index*2)+1 <this.data.length && (this.data[parent_index] < this.data[child_indx])){
        //console.log("start i",child_indx,parent_index,this.data);
        temp = this.data[child_indx];
        this.data[child_indx] = this.data[parent_index];
        this.data[parent_index] = temp;
        parent_index = child_indx;
        child_indx = [(parent_index*2)+1];
        if(this.data[child_indx+1] !==undefined){
            if(this.data[child_indx+1]>this.data[child_indx]){
                child_indx = child_indx+1;
            }

        }
        //console.log("end",child_indx,parent_index,this.data);
    }
    return this.data;

}

 makeMaxHeap(){ //also we can say this as bubble up
    let child_indx = (this.data.length)-1;
    let parent_index =parseInt((child_indx-1)/2);
    let temp;
    //console.log("start",child_indx,parent_index,this.data);
    while(child_indx>0 && (this.data[child_indx]>this.data[parent_index])){
        //console.log("start i",child_indx,parent_index,this.data);
        temp = this.data[child_indx];
        this.data[child_indx] = this.data[parent_index];
        this.data[parent_index] = temp;
        child_indx =parent_index;
        parent_index = parseInt((parent_index-1)/2);
        //console.log("end",child_indx,parent_index,this.data);
    }
    return this.data;
}

heap_sort (){
    let data =[];
    let heap = this.data;
    
    while(heap.length >0){
        data.push(heap[0]);
        heap = this.extractMax();
    }

    return data;

}

}

class MinHeaps {
    constructor(){
        this.data =[]
    }
insert(a){
    this.data.push(a);
    this.makeMinHeap();

}
 makeMinHeap(){
    let child_indx = (this.data.length)-1;
    let parent_index =parseInt((child_indx-1)/2);
    let temp;
    //console.log("start",child_indx,parent_index,this.data);
    while(child_indx>0 && (this.data[child_indx]<this.data[parent_index])){
        //console.log("start i",child_indx,parent_index,this.data);
        temp = this.data[child_indx];
        this.data[child_indx] = this.data[parent_index];
        this.data[parent_index] = temp;
        child_indx =parent_index;
        parent_index = parseInt((parent_index-1)/2);
        //console.log("end",child_indx,parent_index,this.data);
    }
    return this.data;
}


}


function extractMinFn(arr){ //heapify
    let l =arr.length;
   
    arr[0]= arr[l-1];
    let parentIndex =0;
    arr.pop();
    let childIndex1 = 2*parentIndex+1;
    let childIndex2 = 2*parentIndex+2;
    while(childIndex2 <= (arr.length-1)){
        if(arr[childIndex1] < arr[parentIndex] || arr[childIndex2] < arr[parentIndex] ){
            if(arr[childIndex1] < arr[childIndex2]){
                temp = arr[childIndex1];
                arr[childIndex1] = arr[parentIndex];
                arr[parentIndex] =temp;
                parentIndex = childIndex1;
                 childIndex1 = 2*parentIndex+1;
                 childIndex2 = 2*parentIndex+2;
                

            }
            else {
                {
                    temp = arr[childIndex2];
                    arr[childIndex2] = arr[parentIndex];
                    arr[parentIndex] =temp;
                    parentIndex = childIndex2;
                     childIndex1 = 2*parentIndex+1;
                     childIndex2 = 2*parentIndex+2;
                    
    
                }
            }
        }
        else {
            break;
        }
       // console.log(parentIndex,childIndex1,childIndex2,arr,l);

    }
    return arr;



}
function swapFn(a,b){
    let temp =a;
    b=a;
    a=temp;
    return 
}
function makeHeapFn(arr){ 
    let l ;
    let temp ;
    let heap=[];
    let parentIndex ;

    for(i in arr ){
    heap.push(arr[i]);
    
     l = heap.length-1;
     parentIndex = parseInt((l-1)/2);
     //console.log(parentIndex,l,"before",i,heap);
    while(parentIndex >= 0){
        if(heap[parentIndex] > heap[l]){
            temp = heap[l];
            heap[l] =  heap[parentIndex];
            heap[parentIndex] = temp;
            l = parentIndex;
            parentIndex = parseInt((parentIndex-1)/2);
 
            
        }
        else {
            break;
        }
       // console.log("interation",parentIndex,i,heap);
    }
    //console.log("after",i,heap);
}
    return heap;
    
}

function heapSortFn(arr){
    let heap = makeHeapFn(arr);
    let len = heap.length;
     let sorted_heap =[];
     for (i=0 ;i< len ;i++){
         console.log(i);
         sorted_heap.push(heap[0]);
        heap = extractMinFn(heap);
        console.log(i,heap);
     }
     return sorted_heap;

    

}

let makeMaxHeap = new MinHeaps();
let arr = [4,18,5,9,11,21,2,6];
//makeMaxHeap.insert(41);
makeMaxHeap.insert(4);
makeMaxHeap.insert(18);
makeMaxHeap.insert(5);
makeMaxHeap.insert(9);
makeMaxHeap.insert(11);
makeMaxHeap.insert(21);
makeMaxHeap.insert(2);
makeMaxHeap.insert(6);
//console.log(makeMaxHeap.heap_sort());
//console.log(makeMaxHeap.data);
console.log(makeHeapFn(arr));
console.log(heapSortFn(arr));

//makeMaxHeap.extractMax();
