/// there is concept of single linked list head and a current slide(to yraverse )
class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}
//here head and tail are just item  at  first and last index respectively
class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val)
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            //very improtant code to understand well
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;

    }
    pop() {
        //this looks tricky questions
        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;

        }
        this.tail = current;
        this.tail.next = null;
        this.length--;
        return current;
    }

    ///head add and remove
    unshift(val) {
        let node = new Node(val)
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            //very improtant code to understand well
            let temp = this.head;
            this.head = node;
            this.head.next = temp;
        }

        this.length++;
        return this

    }
    shift() {
        let oldNode = this.head;
        this.head = oldNode.next;
        oldNode.next =null;
        this.length--;
        return oldNode;
    }
    show() {
        return this;
    }
    get(index) {
        if (index > this.length) {
            return null;
        }
        else if (index === 0) {
            return this.head;
        }
        else if (index === (this.length - 1)) {
            return this.tail;

        }
        else {
            let i = 1;
            let current = this.head.next;
            while (current !== null) {
                if (i === index) {
                    return current;
                    break;
                }
                i++;
                current = current.next;


            }
        }

    }
    set(index, val) {
        let newNode = new Node(val);
        let targetNode =  this.get(index);
        if(targetNode !==null && targetNode !==undefined){
            targetNode.val = val;
            return this;
        }
        else {
            return false;
        }

    }
    remove(index) {
        if(index <0){
            return false;
        }
        else if(index === 0 ){
            return this.shift();
        }
        else if(index === (this.length-1)){
            return this.pop();
        }
        else if (index < this.length){
            let targertNode = this.get(index);
            let prevNode = this.get(index-1);
            prevNode.next = targertNode.next;
            targertNode.next = null;
            this.length--;
            return this;


        }   
        else {
            return false;
        }
        

    }
    insert(index, value) {
        let newNode = new Node(value);
        if(index <0){
            return false;
        }
        else if(index === 0){
            newNode.next= this.head;
            this.head =newNode;
            this.length++;
            return this;
        }
        else {
        let targetNode =  this.get(index);
        let prevNode = this.get(index-1);
        if(targetNode !==null && targetNode !==undefined){
            newNode.next= targetNode;
            targetNode = newNode;
            if(prevNode !==false || prevNode !==null && prevNode !==undefined){
            prevNode.next = targetNode;
            }
          
        }
        else {
            return false;
        }
          
        this.length++;
        return this;
    }

    }
    reverse() {
        let len = this.length;
        if(len <1){
            return null
        }
        else if(len ===1){
            return this.head;
        }
        else if(len >1){
           // let reverse = this.head;
           let tail = this.head.val;
            let i=0;
            let f;let b;
        while (i< parseInt(len/2)){
             f = this.get(i);
             b = this.get(len-i-1);
            console.log(i, len)
            console.log("b",b.val);
            console.log("f",f.val);
            this.set(i,b.val);
            this.set(len -i-1,f.val);     
            i++;
        }
        this.tail.val= tail
        //this.head = reverse;
        return this;
                
    }

    }
}


//function way to reverser a linked list
var reverseList = function(head) {
    let reverse ={};
    let current = head;
    if(current.next === null){
        return head;
    }
    else {
        let head_node =new Node(current.val);
        reverse = head_node;
        while (current.next !==null && current.next !==undefined){
            console.log(reverse);
            node = new Node(current.next.val);
            temp = reverse;
            reverse =node;
            reverse.next = temp;

             if(current.next !== null && current.next !==undefined){
                current = current.next;
            }
            
            
        }
        return reverse;
    }
    
    
    
};
// trabcerse a listCacheHas

function traverse(list){
    let sll =[];
    if(list === null || list === undefined){
        return list;
    }
    while(list.next!==null && list.next !== undefined){
        sll.push(list.data);
        list = list.next;
        //console.log("value",list.data);
    }
    return sll;
}
//function way to merge two sorted linked list
function mergeLists(head1, head2) {
    let merge ={};
    let first ={};
    let second ={};
    let node={};
    if(head1 !==null && head1 !== undefined){
    if(head2.data ===null || head2.data === undefined){
        return head1
    }
}
    if(head2 !==null && head2 !== undefined){
    if(head1.data ===null || head1.data === undefined){
        return head2
    }
    if(head2.data > head1.data){
        first = head1
        second = head2;
    }
    else {
        first = head2
        second = head1;
    }
    merge ={data:first.data, next:null};
    current = merge;
    first =first.next;
     while((first !== null && first !== undefined ) || (second !== null && second !== undefined)){
       console.log(merge);
        if(first !== null && first !== undefined  && second !== null && second !== undefined){
            
        
            if(first.data>second.data){
         
            node ={data:second.data,next:null};
            current.next = node;
            current = current.next;

     
            second = second.next;
        
    }
        else if((first !== null && first !== undefined )){
            node ={data:first.data,next:null};
            current.next = node;
            current = current.next;
            first = first.next;

        }
       
    } else if((second !== null && second !== undefined )) {
        node ={data:second.data,next:null};
        current.next = node;
        current = current.next;
        second = second.next;

    }
    else if((first !== null && first !== undefined )) {
        node ={data:first.data,next:null};
        current.next = node;
        current = current.next;
 
        first = first.next;

    }
        
     }
     return merge;

}
 

}


let sll = new SingleLinkedList();
sll.push("0");
sll.push("2");
sll.push("3");
sll.push("4");
sll.push("5");
//sll.unshift("naikya 1");
//console.log("list",sll.show());
//console.log("value is ", sll.insert(1, "1"));
//console.log("value is ", sll.insert(1,"1"));
//console.log("value is ", sll.get(5));
//console.log("reverse is ", reverseList({val:1,next:{val:2,next:{val:3,next:{val:4,next:{val:5}}}}}));
console.log("merge linked list", traverse(mergeLists({data:1,next:{data:4,next:{data:6,next:{data:8,next:{data:10}}}}},{data:3,next:{data:6,next:{data:7,next:{data:9,next:{data:11}}}}})));
//console.log("list",sll.show());
//console.log("trv",traverse({data:1,next:{data:4,next:{data:6,next:{data:8,next:{data:10}}}}}));
//sll.add("ha");
//sll.pop();
/*
console.log("pop",sll.show());
sll.shift();
console.log("shift",sll.show());
sll.shift();
console.log("shift",sll.show());
*/


