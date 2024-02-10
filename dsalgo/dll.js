'use strict';
class Node {
    constructor(val){
        this.prev =null;
        this.next=null;
        this.val=val;
    }
   
}
class DoublyLinkedList{

    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;

    }
        push(val){
            var newNode = new Node(val);
            if(this.length === 0){
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
            this.length++;
            return this;
        }
    pop(){
        if(this.head ===null || this.tail ==null) {
            return undefined;
        }
        let current =this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        return current;
    }
    shift(){
        if(this.length === 0 ) {
            return undefined;
        }
        let current = this.head;
        if (this.length === 1){
            
        } else {
             
        this.head = current.next;
        this.head.prev=null;
        current.prev=null;

        }
       

        return current;
    }
    unshift(val){
        let node = new Node(val);
        if(this.length ===0){
            this.head =node;
            this.tail=node;
            this.length++;
        }
        else {
            //let current = this.head;
            this.head.prev =node;
            node.next =this.head;
            this.head = node;


        }
        

    }
    get(){


    }
    set(){

    }
    remove(){

    }
    insert(){

    }
    reverse(){

    }
}

let dll = new DoublyLinkedList();
dll.push("0");
dll.push("1");
dll.push("12");
dll.push("14");
dll.push("18");
dll.push("16");

dll.push("20");
//dll.unshift("3");
//dll.pop();

console.log(dll.unshift(4));
//console.log(dll.show());
//dll.pop();
//console.log(dll.show());
//console.log(dll.show());
/*
dll.push("3");
dll.push("4");
console.log(dll.show()));
dll.pop();
console.log(dll.show());s
dll.pop();
console.log(dll.show());
*/
