class Node {
    constructor(val){
        this.value = val;
        this.left =null;
        this.right =null;
    }

}

class BST{
    constructor(){
        this.data = null;
    }
    insert(val){
        let node = new Node(val);
        if(this.data === null){
            this.data = node;
            return 

        }
        let current = this.data;
        while(current !== null){

            if(val > current.value){
              // console.log("l",current);
                if(current.right !== null){
                    current = current.right

                }
                else {
                    current.right = node;
                    return 
                }
            }
            else {
                //console.log("r",current);
                if(current.left !== null){
                    current = current.left

                }
                else {
                    current.left = node;
                    return
                }
            }

        }

        
    }
    show(){
        return this.data;
    }

    search(val){
        let flag = false;
        function helper(current){
            if(current){
        
                if(current.value === val){
            
                    flag = true;
                }
                else if(val > current.value){
                    helper(current.right);
                }
                else if(val < current.value){
                    helper(current.left);
                }

            }
         
            

            }
            helper(this.data)
            return flag;
        }
    }



function preOrder(current){ /// this is just to print those values
    
        if(current !==null){
            console.log(current.value);
            preOrder(current.left)
            preOrder(current.right);
        }
     

     }
      




function inOrder(bst){
    let arr =[];
    let current = bst.data;
     function helper(current){
       // console.log(arr);
        if(current === null){
            //console.log("finish");
            return arr;
        }    
           
            helper(current.left)
            arr.push(current.value)
            helper(current.right);
       

     }
      helper(current);
      return arr;

}

function postOrder(bst){
    let arr =[];
    let current = bst.data;
     function helper(current){
       // console.log(arr);
        if(current === null){
            //console.log("finish");
            return arr;
        }    
           
            helper(current.left)
       
            helper(current.right);
            arr.push(current.value)

     }
      helper(current);
      return arr;

}

function bfs(bst){
    let current;
    let arr =[];
    let queue =[];
    let level =0;
    queue.push(bst.data);
     while(queue.length !==0){
        level++;
        current =  queue[0];
        arr.push(current.value);
        if(current.left){
            queue.push(current.left);

        }
        if(current.right){
            queue.push(current.right);
        }
        queue.shift();

     }

     return arr;




}

function levelOrder(bst){

    let current;
    let arr = new Map();
    let queue =[];
    let level = 0;


    queue.push({level:level,data:bst.data});
     while(queue.length !==0){
 
        current =  queue[0].data;
        level = queue[0].level;
        if(arr.has(level)){
         
            arr.get(level).push(current.value);
        }
        else {
            arr.set(level,[current.value])
        }
 level++;
        if(current.left){
      
            queue.push({level:level,data:current.left});

        }
        if(current.right){
         
            queue.push({level:level,data:current.right});
        }
        queue.shift();

     }

     return arr;



}

const bst = new BST();
bst.insert(6)
bst.insert(4)
bst.insert(9)
bst.insert(5)
bst.insert(2)
bst.insert(8)
bst.insert(12)
bst.insert(3)
bst.insert(1)
bst.insert(30)
bst.insert(11)
bst.insert(50)
bst.insert(25)

// console.log("chal rha ha ha ki nahi");
// console.log(preOrder(bst.data));
// console.log(inOrder(bst));
// console.log(postOrder(bst));
// console.log(bst.search(11));
// console.log(levelOrder(bst));