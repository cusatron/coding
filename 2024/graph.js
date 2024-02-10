

class Graph{
    constructor(){
        this.list =  new Map();
    }
    addVertex(vertex){
        if(!this.list.has(vertex)){
            this.list.set(vertex,[]);
        }



    }
    addEdge(source,destination){
        if(this.list.has(source)){
            this.list.get(source).push(destination);
        }
        else {
            this.list.set(source,[destination]);
        }
        if(!this.list.has(destination)){
            this.list.set(destination,[]);
        }


    }
    addWeightEdge(source,destination,weight){
        if(this.list.has(source)){
            this.list.get(source).push({destination:weight});
        }

    }
    
}

function bfs(graph,start){
    let other_vertices;
    let bfs_traverse =[];
    let queue = [start];
    let isVisited= {start:true};
    while(queue.length !== 0){
        other_vertices  = graph.get(queue[0]);
        for(let v of other_vertices){
            if(!isVisited[v]){
                isVisited[v] = true;
                queue.push(v);
                //bfs_traverse.push(v)
            }
        
        }
        //console.log("queue",queue);
        //console.log("bfs_traverse",bfs_traverse);
        bfs_traverse.push(queue.shift());

    }
   

return bfs_traverse;
   




}
function dfs(graph,start){
let queue = [start];
let isVisited = {};
let result =[];

    while(queue.length !==0){
      
        if(!isVisited[queue[0]]){
            isVisited[queue[0]] = true;
            if(graph.has(queue[0])){
               // console.log("q",queue);
               items =  graph.get(queue[0]);
               result.push(queue.shift());
               for(let v of items )
                {
                    queue.unshift(v);}
            }
        }
        else {
            queue.shift()
        }
 

    }

    return result;

  
    
}

function checkLoop(graph){

}



let graph = new Graph();

graph.addVertex("1");
graph.addVertex("2");
console.log(graph.list);
graph.addEdge("1","2");
graph.addEdge("1","3");
graph.addEdge("2","4");
graph.addEdge("2","5");
graph.addEdge("3","6");
// ct+ /
// graph.addEdge("F","E");  
// graph.addEdge("D","F");
// graph.addEdge("E","F");

console.log(graph.list.keys());
console.log(bfs(graph.list,"1"));
console.log(dfs(graph.list,"1"));
//console.log("bfs",graph.bfs("A"));