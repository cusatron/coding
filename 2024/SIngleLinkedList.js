const Node = require("./NodeSll");


class SingleLinkedList{

    constructor(){
        this.head = null;
    }
    insertAtHead(data){
        let node = new Node(data);
        if(this.head === null){
            this.head = node;
        }
        else{

           /* let temp = this.head;
            this.head = node;
            this.head.next = temp;
            */
           let current = this.head;
           node.next = current;
           this.head = node;
        }

    return this;

    }
    insertAtTail(data){
        let temp = this.head;
        let node= new Node(data);
        if(temp == null) {
            temp = node;
            return this;
        }
        while(temp.next !== null){
            temp = temp.next;
            
        }
        temp.next = node;
       
        return this;


    }
    search(data){

    }
    delete(data){


    }
    getList(){
        let temp = this.head;
        let arr = []
        while(temp !== null){
            arr.push(temp.data);
            temp = temp.next;
        }
        return arr;
    }
    deleteAthead(){ //O(1)
        let temp =  this.head;
        

 if(this.head === null){
            return this
        }
        else{
           this.head = null;
           this.head =  temp.next;        
        }

    }
    show(){
        return this;
    }
    length(){
        let len =0;
        let temp = this.head;
        while(temp !== null){
            temp = temp.next;
            len++;
        }
        return len;
    }
    reverse1(){
        let current = this.head;
        let reverse = null;
        let data;
        let current_rev;
        while(current !== null){
            data = new Node(current.data);
            if(reverse ==null){
                reverse = data;
            }
            else {
                
                current_rev = reverse;
                data.next = current_rev;
                reverse =data;
            }
            current = current.next;

        }
        this.head = reverse;
       return this;

    }

}

const sll =  new SingleLinkedList();
sll.insertAtHead(20);
sll.insertAtHead(4);
sll.insertAtHead(6);
console.log(JSON.stringify(sll));
sll.insertAtTail(100);
console.log(JSON.stringify(sll));
console.log(JSON.stringify(sll.getList()));
console.log(JSON.stringify(sll.reverse1()));
console.log(JSON.stringify(sll.getList()));