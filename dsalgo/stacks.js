// stack using array

/*
class Stack{
    constructor(){
        this.data=[];

    }
    push(val){
        return this.data.push(val);
    }
    pop(){
        return this.data.pop();
    }

}
*/


class Node {
    constructor(val){
        this.val =val;
        this.next=null;
    }
}
class stack{
    constructor(){
        this.head =null;
        this.tail=null;
        this.length=0;
    }


    push(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail =newNode;
            this.length++;

        }
        else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
            this.length++;

        }
        
    }
    pop(){
        
        let current = this.head;
        let secondlast = null;
        //console.log("current",current);
        while(current !== this.tail){
            secondlast = current;
            current =current.next;
          


        }
        this.tail = secondlast;
        this.tail.next=null;
        this.length--;
    }
    
} 

let q = new stack();
q.push(10);
q.push(3);
q.push(5);
q.push(9);
q.push(0);
 let arr =[3,4,5,6,7];

console.log(q);
q.pop();
q.pop();
console.log(JSON.stringify(q));
//console.log(q);
//console.log(arr.push(999));