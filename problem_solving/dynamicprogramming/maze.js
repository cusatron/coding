const testmaze = ["____##_#_#",
"###_##_##_",
"____##____",
"____#__#__",
"____#_#_#_",
"#______##_",
"_##_#__#_#",
"_#_##_#___",
"___##__#__",
"##__##____"]


let output = "(0,0),(0,1),(0,2),(0,3),(1,3),(2,3),(3,3),(4,3),(4,2),(3,2),(2,2),(2,1),(3,1),(3,0),(4,0),(4,1),(5,1),(5,2),(5,3),(5,4),(5,5),(5,6),(6,6),(6,5),(7,5),(8,5),(8,6),(9,6),(9,7),(9,8),(8,8),(7,8),(7,9),(8,9),(9,9)"

console.log(testmaze[0][2],"|",testmaze[0][3]);

var findLongesPath =  function (maze){
    let dp ={};
    let path ={};
    let c =0;
    let empty =[];
    let n = maze.length;
    console.log("n",n);
    var helper = function (i,j,count,...arr){
        c++;
        console.log("arr is "+ typeof arr);
        if(i <= (maze.length-1) && j <= (maze.length-1)) {

            if(i === (maze.length-1) && j === (maze.length-1)) return count;
     
        dp[i] =  dp[i] ? dp[i] : {};
        path[i] =  path[i] ? path[i] : {};
       
        if(dp[i][j] !== undefined){
            return dp[i][j]
        }
        let leftRange =0;
        let rightRange = 0;
        if(maze[i][j+1] ==="_"){
            leftRange =  helper(i,j+1,count+1,arr.push([i,j+1]));
    }
     else if(maze[i+1][j] ==="_"){
        rightRange =  helper(i+1,j, count+1, arr.push([i+1,j]));
}
else if(maze[i][j+1] ==="#"){ 
    leftRange =  helper(i,j+1, count, arr.push([i,j+1]));
}
else if(maze[i+1][j] ==="#"){ 
    rightRange =  helper(i+1,j, count, arr.push([i+1,j]));
} 
     dp[i][j] = Math.max(leftRange,rightRange);
     console.log("",c,i,j,dp[i][j],arr);
    return dp[i][j];

}

        }
        
return helper(0,0,0,[[0,0]]);
}

console.log("longest path is ", findLongesPath(testmaze));