// implemnting using array
/*
class Queue {
    constructor(){
        this.data=[];

        this.length =0;
    }
    enqueue(val){
        //enqueue on the last (rear)
        this.data.push(val);
        this.length++
        
    }
    dequeue(){
        //dequeue from first (front)
        if(this.length>1){
            this.length--;
             //this.data.shift();
             return this.data.shift();
        }
        else {
            return -1
        }
        
        
    }
}
*/
class Node{
    constructor(val){
        this.val = val;
        this.next=null;
    }
}
class Queue{
    constructor(){
        this.head =null;
        this.tail=null;
        this.length=0;
    }
    enqueue(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head =newNode;
            this.tail= newNode;
        
        }
     else{
         this.tail.next = newNode;///real linkiing is happening here.. master baat yaha ho raha a 
         this.tail = newNode;


}
this.length++;

    }
    dequeue(){
        if(this.head === null){
            return null
        }
        else   if(this.head.next === null){
            this.head =null;
            this.tail =null;
           
        }
        else {

        
            this.head =  this.head.next ;

        }
        this.length--;
        return 

    }
}

let q = new Queue();
q.enqueue(10);
q.enqueue(3);
q.enqueue(5);
q.enqueue(9);
console.log(JSON.stringify(q));
q.dequeue();
q.dequeue();
console.log(JSON.stringify(q));
//console.log(q,q.length,q.dequeue());
