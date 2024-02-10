class Node{
    constructor(val){
        this.val =val;
        this.right=null;
        this.left =null;
    }
}
class BST {
    constructor(){
        this.root =null;
    }
    insert(val){ //almost done by me very smart and almost right
        let node = new Node(val);
        let current = this.root;
        if(this.root === null){
            this.root = node;
            return this;
        }
       
        else {
            while(current!==null && current !== undefined){
                 if(current.val === val){
                    return undefined;
                }
               else  if(val > current.val)
            {
                if(current.right === null){
                    current.right = node;
                    return this;
                }
                else {
                    current = current.right;
                }
            
            }
            else 
            {
                if(current.left === null){
                    current.left = node;
                    return this;
                }
                else {
                    current = current.left;
                }
            
            }
       
    }
    
}
    }

    find(val){ //almost done by me very smart and almost right
        let node = new Node(val);
        let current = this.root;
        if(this.root === null){
            this.root = node;
            return false;
        }
       
        else {
            while(current!==null && current !== undefined){
                 if(current.val === val){
                    return true;
                }
               else  if(val > current.val)
            {
                if(current.right === null){
                    current.right = node;
                    return false;
                }
                else {
                    current = current.right;
                }
            
            }
            else 
            {
                if(current.left === null){
                    current.left = node;
                    return false;
                }
                else {
                    current = current.left;
                }
            
            }
       
    }
    
}
return false;
    }
    find_rec(key){
       
            let flag = true;
            let search ;
            function dfs_search(current){
                  if(current.val === key ){      
                      //console.log(key);      
                    search  = current;
                    return;
                    }
                    else  if( current.left !==null ){
                        dfs_search(current.left);
                    
                    }
                    else if( current.right !==null ){
                        dfs_search(current.right);
                        
                    }
                    
                    
                
                
            }
            if(this.root !== null){
                    dfs_search(this.root);
                }
                else {
                    return false;
                }
             if(search !==""){
                 return search;
             }     
           
                
                
            
    }
  
    bfs(){
        let current = this.root;
        let visited = [this.root];
        let traversal_values =[];
        while (visited.length >0){
            current = visited[0];
            traversal_values.push(current.val);
            visited.shift();
            
            if(current.left !==null & current.left !== undefined){
               
                visited.push(current.left);

            }
            if(current.right !==null & current.right !== undefined){
                visited.push(current.right);


            }


        }
        return traversal_values


    }
    bfs_rec(){
        let bfs_values =[];

        function rec_bfs(current){

        
        if(current !== null && current !== undefined){
            if(!bfs_values.includes(current.val)){
                bfs_values.push(current.val);
            }

           
            if(current.right !== null && current.right !== undefined){
              
                if(!bfs_values.includes(current.right.val)){
                   // bfs_values.push(current.right.val);
                    rec_bfs(current.right);
                }
    
            }
            if(current.left !== null && current.left !== undefined){
          
                if(!bfs_values.includes(current.left.val)){
                   // bfs_values.push(current.left.val);
                    rec_bfs(current.left);
                }
    
            }
          

        }
        
        }

    rec_bfs(this.root);
    return bfs_values;
    }
    pre_dfs(){

        let current  = this.root;  
        let visited_queue =[this.root];
        let traverse =[];    
       let i=0;
       while(visited_queue.length >0){
           i++
        visited_queue.shift();
        if(current.val !==null){
            traverse.push(current.val);
        }
           if(current.right !==null){
            visited_queue.unshift(current.right);
            
        }
        if(current.left !==null){  
            visited_queue.unshift(current.left);
           }
       
        
        current =visited_queue[0];

       }
       return traverse;



    }
    pre_dfs_rec(){
        let visited_queue =[this.root];
        let traverse =[];
        function rec(node){         
             traverse.push(node.val);
             console.log("val to show",node.val);
             if(node.left !== null){  console.log(node.val, "left",node.left.val);
                rec(node.left);
             
            }
            if(node.right !==null){
                console.log(node.val,"right",node.right.val);
                rec(node.right);
            }
           
        }
        rec(this.root);
        return traverse
    }
    post_dfs(){
        //withour recursion
        let current = this.root;
        let visited = [this.root];
        let traversal_values =[];let k=0;
        while (visited.length >0){
            current = visited[0];
            visited.shift();
            k++;
            console.log("visit",visited);
           
           if(!traversal_values.includes(current.val)){
            traversal_values.unshift(current.val);
           }
           
            if(current.right !==null & current.right !== undefined){
                visited.push(current.right);
                traversal_values.unshift(current.right.val);


            }
            if(current.left !==null & current.left !== undefined){
               
                visited.unshift(current.left);
                traversal_values.unshift(current.left.val);

            }
           // visited.push(current.val);
          
          
            console.log("k",k,traversal_values);
           
            // current = visited[0];
            


        }
        return traversal_values




    }
    post_dfs_rec(){
        let visited_queue =[this.root];
        let traverse =[];
        function rec(node){         
            
             if(node.left !== null){
                rec(node.left);
            }
            if(node.right !==null){
                rec(node.right);
            }
            traverse.push(node.val)
        }
        rec(this.root);
        return traverse


    }
    dfs_dsc(n){
        let items=[];
        function dfs_inorder(current){  
            if(n >0){

           
              if(current.right !== null){
                dfs_inorder(current.right);
              }
              items.push(current.val);
               if(current.left !== null){
                dfs_inorder(current.left);
              }
            }
             }
            
            dfs_inorder(this.root);
            console.log("dfs desc", items);
            return items[n-1];
    }
    in_dfg(){
        //the one which is in ascending order 

    }
    in_dfg_rec(){
        //the one which is in ascending order 

        let visited_queue =[this.root];
        let traverse =[];
        function rec(node){         
            
             if(node.left !== null){
                rec(node.left);
               
            }
            traverse.push(node.val)
            if(node.right !==null){
                rec(node.right);
            }
            //traverse.push(node.val)
        }
        rec(this.root);
        return traverse

    }
    rever_in_dfs(){
        //The one which is in descending order
    }
     maxDepth (){
        let root = this.root;
        //var maxDepth = function (root) {
  
     let ldepth =0;
     let rdepth =0;
          function lmaxDepth(current){
              console.log(JSON.stringify(current));
           
              if(current === null || current === undefined){
                  return 0;
              }
              console.log("val",current.val);

              ldepth = lmaxDepth(current.left);
              console.log("right wala ayega aab");
              rdepth = lmaxDepth(current.right)
              console.log(ldepth, rdepth);
              return Math.max(ldepth,rdepth)+1;
          }
         
          lmaxDepth(root);
        
      
        
    }
    levelOrder (){
        let root = this.root
   // var levelOrder = function(root) {
        console.log("root",root.val);
        let data =[];
        let level_traversal =[];
        let i =0;
        let current = root;
        let visited =[];
        let count =1;
        if(current !==null && current !== undefined){
            visited.push(root);
             data =[current.val];
             level_traversal.push(current.val);
        }
        else {
            return data;
        }
        while (visited.length >0){
            
            
          
    
        i++;
        data[i] =[];
            if(current.left !== null && current.left !== undefined){
                 
               
                 data[i].push(current.left.val);
                level_traversal.push(current.left.val);
                count++;
                visited.push(current.left);
                
               
            }
            
            if(current.right !== null  && current.left !== undefined){  
                
                   data[i].push(current.right.val);
                     visited.push(current.right);
                    level_traversal.push(current.right.val);
                
                
            }
            
            visited.shift();
            current = visited[0];
            
            
        }
        //console.log(data);
        return data;
        
    };

}


 function verticalOrderTraversal(A){
    let vertical_trav =[];
    let level =0,depth =0;
    let values =[];
    function verticalOrderTraversalHelper(current){
         console.log(level, depth, vertical_trav);
        if(current.left !== null && current.left !== undefined){
verticalOrderTraversalHelper(current.left)
depth ++;
        }
         
         if(vertical_trav[level] === undefined){
               vertical_trav[level]= [];
         }
                values = vertical_trav[level];
             values.push(current.val);
             vertical_trav[level] = values;
         
         level++;
        if(current.right !== null && current.right !==undefined){
verticalOrderTraversalHelper(current.right);
        }
       

    }

    verticalOrderTraversalHelper(A)
    console.log(vertical_trav);
    return vertical_trav;

}

    
var levelOrder = function(root) {
    //iteration //ultimate answer
    if (root === null || root === undefined) {
        return [];
      }
   let isVisitedInlevel =[];
isVisitedInlevel = [[root]]
   let level_order =[];
   let level =0;
   let i=0;
   let current;
   while (isVisitedInlevel[level].length>0){
      
       limit = isVisitedInlevel[level].length;
       i =level;
       level_order[level]=[];
       level++;  
       isVisitedInlevel[level]=[];
       for(let k =0; k<limit ;k++){
           current = isVisitedInlevel[i][k];
         //  console.log("start ",i,k,level,"leverorder",level_order,JSON.stringify(isVisitedInlevel));
       level_order[i].push(current.val);
       if(current.left !== undefined && current.left !==null){
           isVisitedInlevel[level].push(current.left);
           
       }
       if(current.right !== undefined && current.right !== null){
           isVisitedInlevel[level].push(current.right);
           
       }
      // console.log("for ",i,k,level,"leverorder",level_order)
       }
                 
   }
   return level_order;
       
   
    
};

var levelOrderrecursion = function(root){
    if (root === null || root === undefined) {
        return [];
      }
    let level =[];
    let bfs_travrsal =[];
    var helper = function(current,i){
        if(level[i] === undefined){
            level[i]=[];
        }
        if(current !== null && current !== undefined){
            level[i].push(current.val);
            console.log(i,level);
        }
        if(current.left !==null && current !== undefined){
            helper(current.left,i+1);
        }
        if(current.right !==null  && current !== undefined){
            helper(current.right,i+1);
        }
    }
    helper(root,0);
    return level;
}


  
  const find_minimum_depth = function(root) {
   let depth =0;
   let    k = depth;
  let isVisited = [[root]];
      if(root === null || root === undefined){
          return 0;
      }
  while(isVisited[depth].length>0){
      k = depth;
      depth++;
      if(isVisited[depth] === undefined || isVisited[depth] === null){
         isVisited[depth] =[]; 
      }
      for(let i=0; i< isVisited[k].length; i++){
            current = isVisited[k][i];
            console.log(depth,"current",k,i,isVisited)
          if((current.left === null) && (current.right === null)){
              return depth+1;
          }
        
           if(current.left !== undefined && current.left !== null){
              isVisited[depth].push(current.left);
          }
           if(current.right !== undefined && current.right !== null){
              isVisited[depth].push(current.right);
          }
          
          
      }
      
  }
    return depth+1;
    //return -1;
  };
  
  
  
  
  
    let bst = new BST();
    bst.insert(11);
    bst.insert(6);
    bst.insert(15);
    bst.insert(3);
    bst.insert(8);
    bst.insert(20);
    bst.insert(12);
    bst.insert(2);
    bst.insert(7);
    bst.insert(4);
   // bst.insert(10);
    bst.insert(10);
   // bst.insert(26);
   // bst.insert(16);
   // bst.insert(28);
    //bst.insert(52);

    //bst.insert(7);
   // console.log(bst.root);
   // console.log(bst.bfs());
  //console.log("with rec")
   // console.log(bst.bfs_rec()); 
   console.log(levelOrderrecursion(bst.root)); 
    console.log(find_minimum_depth(bst.root)); 
    //console.log(bst.pre_dfs_rec());
   // console.log(bst.post_dfs_rec());
 
    //console.log(verticalOrderTraversal(bst.root)); 
    //console.log("depth", bst.maxDepth());


   // console.log(bst.visited);
    //console.log(JSON.stringify(bst.root));

    //tomorrow we will try iterative method ..this was too easy and should be done first and lets not waste stupid time ..i am not einstien or newton
    //so lets understand my limit to solve the issue prierly