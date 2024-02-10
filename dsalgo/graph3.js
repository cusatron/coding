class Graph{
    constructor(){
        this.adjList = new Map();
    }
    addEdge(a,b){
        if(!this.adjList.has(a)){
            this.adjList.set(a,[]);
        }
        if(!this.adjList.has(b)){
            this.adjList.set(b,[]);
        }
        this.adjList.get(a).push(b);
        this.adjList.get(b).push(a);


    }
    addVertex(v){
        if(!this.adjList.has(v)){
            this.adjList.set(v,[]);
        }

    }
    remove(){

    }
    dfs(start){
        let visited = new Set();
        let traverse =[];
        let list = this.adjList;
        var helper =  function helper(s){
            if(!visited.has(s)){
                visited.add(s);
                traverse.push(s);
            }
            let connections = list.get(s);
            connections.forEach( v => {
                if(!visited.has(v)){
                    helper(v);
                }
               
            })
            
        }
        helper(start);
        return traverse;


    }
    bfs(start){
        if(!this.adjList.has(start)) return null;
        let isVisited = new Set();
        let toVisit = [start]
        let traverse =[];
        while(toVisit.length >=1){
            if(!isVisited.has(toVisit[0])){
                isVisited.add(toVisit[0]);
                traverse.push(toVisit[0]);
                this.adjList.get(toVisit[0]).forEach( v => toVisit.push(v));
            }
            toVisit.shift();
          

        }
        return traverse;


    }
    checkPath(start,end){

        let visited = new Set();
        let traverse =[];
        let list = this.adjList;
        let flag = false;
        var helper =  function helper(s,o){
            if(s === end){
                flag = true;
                
            }
            if(!visited.has(s)){
                visited.add(s);
                traverse.push(s);
            }
            let connections = list.get(s);
            connections.forEach( v => {
                if(!visited.has(v)){
                    helper(v,);
                }
               
            })
            
        }
        helper(start,start);
        return flag;

    }
    printAllPath(start,end){

        let visited = new Set();
        //let traverse =[];
        let list = this.adjList;
        let flag = false;
        let i=0;let k =0;
        var helper =  function helper(s,traverse){
            k++;
            console.log(k,s,traverse);
         
            if(!visited.has(s)){
                visited.add(s);
                traverse.push(s);
                
            let connections = list.get(s);
            connections.forEach( v => {
                if(!visited.has(s)){
                    helper(v,traverse);
                }
               
                
               
            })
        
            }
         
           

          
            
            
           
            
        }
        helper(start,[]);
        return i;

    }

}


let graph = new Graph();


graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("K","L", 1);
graph.addEdge("L","O", 1);
//console.log("w",graph.adjList);
//console.log("dfs",graph.dfs("A"));
//console.log("bfs",graph.bfs("A"));
console.log("check",graph.printAllPath("A","B"));