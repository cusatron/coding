class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const has_path = function(root, sum) {
      dp ={};
    let flag = false;
    var dfs= function (current,sum){
       // console.log(dp);
      if(current === null || current ===  undefined || sum <0){
          return false
      }
   if(sum === current.value && current.left === null && current.right  === null){
     return true;
   }
   dp[current.value] = dp[current.value] ? dp[current.value][sum] : {}
   if(dp[current.value][sum] !== undefined){
       return dp[current.value][sum];
   }
   let a = false;let b = false;
   if(current.left !== undefined && current.left !== null ){
     a= dfs(current.left,sum-current.value);
   }
   if(current.right !== undefined && current.right !== null ){
     b= dfs(current.right,sum-current.value);
   }
   //console.log(a,b, a||b);
   dp[current.value][sum]= a || b;
    return dp[current.value][sum];
      }
    
   
   return dfs(root,sum);

    
  };
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
 // console.log(`Tree has path: ${has_path(root, 23)}`)
 // console.log(`Tree has path: ${has_path(root, 16)}`)



/*
12,7,1,4,10,5 is bfs binary tree
Output: [[12, 7, 4], [12, 1, 10]]
Explanation: Here are the two paths with sum '23':12 -> 7 -> 4 and 12 -> 1 -> 10


*/
const find_paths = function(root, sum) {
    let allPaths = [];
    // TODO: Write your code here
  
    var dfs = function (current, sum,set){
        if (current === null) {
            return;
          }
        set.push(current.value);
        //console.log(sum,current.value,current.left ,current.right );
    
    if(sum === current.value && current.left === null && current.right === null){
        allPaths.push(...set);
        allPaths.push("next");
    }
      else{
      if(current.left !== undefined && current.left !== null){
   
        dfs(current.left, sum-current.value,set);
  
      }
       if(current.right !== undefined && current.right !== null){
        
          dfs(current.right, sum-current.value, set);
  
      }
    }
      set.pop();
  
}
  
     dfs(root, sum,[]);
    return allPaths;
  };

  const find_All_paths = function(root) {
    let allPaths = [];
    // TODO: Write your code here
  
    var dfs = function (current,set){
        if (current === null) {
            return;
          }
        set.push(current.value);
        //console.log(sum,current.value,current.left ,current.right );
    
    if(current.left === null && current.right === null){
       let v = set.reduce((s,i) => s+1);
        allPaths.push(v);
        
    }
      else{
      if(current.left !== undefined && current.left !== null){
   
        dfs(current.left,set);
  
      }
       if(current.right !== undefined && current.right !== null){
        
          dfs(current.right, set);
  
      }
    }
      set.pop();
  
}
  
     dfs(root,[]);
    return allPaths.sort()[allPaths.length-1];
  };
  sum = 23
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)

console.log(`All possible Tree paths from root to leef: ${sum}: ${find_All_paths(root)}`)
