var { MinHeap, MaxHeap} = require('../../dsalgo/heap2');
class MedianOfAStream {
    constructor(){
        this.minHeap = new MinHeap(); //second half
        this.maxHeap = new MaxHeap(); // first half 

    }
    insert_num(num) {
     // TODO: Write your code here
     if(this.maxHeap.length === 0 || this.maxHeap[0] >= num){
         this.maxHeap.insert(num);
     }
     else {
        this.minHeap.insert(num);
     }
     if(this.maxHeap.length > this.minHeap.length +1){
         this.minHeap.insert(this.maxHeap.extractMax());
     }
     else if(this.maxHeap.length < this.minHeap.length){
         this.maxHeap.insert(this.minHeap.extractMin());

     }
     

     return -1;
    }
  
    find_median() {
        if(this.minHeap.length !== this.maxHeap.length){
            return this.maxHeap.peak();
        }
        let median = (this.minHeap.peak() + this.maxHeap.peak())/2.0;
        return median;
      // TODO: Write your code here
      
    }

  };
  
  
  

  
  const medianOfAStream = new MedianOfAStream();
  medianOfAStream.insert_num(3);
  medianOfAStream.insert_num(1);
  console.log(`The median is: ${medianOfAStream.find_median()}`);
  medianOfAStream.insert_num(5);
  console.log(`The median is: ${medianOfAStream.find_median()}`);
  medianOfAStream.insert_num(4);
  console.log(`The median is: ${medianOfAStream.find_median()}`);