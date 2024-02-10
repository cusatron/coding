class MinHeap{
    constructor(){
        this.data=[];
        this.length=0;
    }
    
    insert(val){
        this.data.push(val);
        this.length++;
        this.bubbleUp();

    }
    peak(){
        return this.data[0];

    }
    bubbleUp(){
        let c = this.data.length-1;
        let p = parseInt((c-1)/2);
        while(this.data[c] < this.data[p]){
            [this.data[c],this.data[p]] = [this.data[p],this.data[c]];
             c = p;
             p = parseInt((c-1)/2);
        }
    
    }
    extractMin(){ // opposite of add ..deleting min value from first position or delete min
        let min = this.data[0];
        this.data[0] =  this.data[this.data.length-1];
        this.data.pop();
        this.bubbleDown();
        this.length--;
        return min;
    }
    bubbleDown(){
        let p = 0;
        let c1 = (2*p +1);
        let c2 = (2*p +2);
        while(this.data[p] > this.data[c1] || this.data[p] > this.data[c2] ){
           if(this.data[c1] < this.data[c2]){
            [this.data[c1],this.data[p]] =[this.data[p] ,this.data[c1] ];
            p =c1;
           } else {
            [this.data[c2],this.data[p]] =[this.data[p] ,this.data[c2]];
            p =c2;
           }
            c1 = (2*p +1);
            c2 = (2*p +2);
       
        }

    }
   
    
}

class MaxHeap{
    constructor(){
        this.data=[];
        this.length=0;
    }
    
    insert(val){
        this.data.push(val);
        this.bubbleUp();
        this.length++;
    }
    peak(){
        return this.data[0];

    }
    bubbleUp(){
        let c = this.data.length-1;
        let p = parseInt((c-1)/2);
        while(this.data[c] > this.data[p]){
            [this.data[c],this.data[p]] = [this.data[p],this.data[c]];
             c = p;
             p = parseInt((c-1)/2);
        }
    
    }
    extractMax(){ // opposite of add ..deleting min value from first position or delete min
        let max = this.data[0];
        this.data[0] =  this.data[this.data.length-1];
        this.data.pop();
        this.bubbleDown();
        this.length--;
        return max;

    }
    bubbleDown(){
        let p = 0;
        let c1 = (2*p +1);
        let c2 = (2*p +2);
        while(this.data[p] < this.data[c1] || this.data[p] < this.data[c2] ){
           if(this.data[c1] > this.data[c2]){
            [this.data[c1],this.data[p]] =[this.data[p] ,this.data[c1] ];
            p =c1;
           } else {
            [this.data[c2],this.data[p]] =[this.data[p] ,this.data[c2]];
            p =c2;
           }
            c1 = (2*p +1);
            c2 = (2*p +2);
       
        }

    }
   
    
}

module.exports = {MinHeap, MaxHeap};
/*

let makeMaxHeap = new MaxHeap();
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
console.log(makeMaxHeap.data);
makeMaxHeap.extractMax();
console.log(makeMaxHeap.data);
*/
