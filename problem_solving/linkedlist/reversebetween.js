class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  
    get_list() {
      let result = "";
      let temp = this;
      while (temp !== null) {
        result += temp.value + " ";
        temp = temp.next;
      }
      return result;
    }
  };
  
  const reverse_sub_list = function(head, p, q) {
    let start = false;
    let end = true;
    let current = head;
      
     while(current.next !== null && current.value !== q){
       if(current.next.value === p){
         firstHalf = current;
         middle = current.next;
         
       }
       current = current.next;
      
     }
        secondHalf = current.next;
        firstHalf.next =null;
    
      let isOver = true;
    var helper = function(c, prev){
      if(c !== null && isOver){
          next = c.next;
          c.next = prev;
          prev = c;
          if(c.value === q){
            firstHalf.next = prev;
            isOver =  false;
            console.log("final",firstHalf);
             return firstHalf;
          }
          else {
   return helper(next,c);
          }
        }
        
  
      }
     return helper(middle,secondHalf);
    
  };
  
  
  head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  
  console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
  console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`)

  