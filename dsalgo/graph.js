//set and map 

/*

*/
class weighted_graph{
    constructor(){
        this.adlist = new Map();
    }
    addEdge(v1,v2,w){
        if(!this.adlist.has(v1)){
            this.adlist.set(v1,new Set());
         }
         if(!this.adlist.has(v2)){
            this.adlist.set(v2,new Set());
         }  
         this.adlist.get(v1).add({edge:v2,weight:w});
         this.adlist.get(v2).add({edge:v1,weight:w});

    }
   
    
}

class Graph {
    constructor(){
        this.adlist =new Map();
        //this.adlist.
    }
     addVertex(v){
         if(!this.adlist.has(v)){
            this.adlist.set(v,new Set());
         }
     }
     addEdge(v1,v2){
        if(!this.adlist.has(v1)){
            this.adlist.set(v1,new Set());
         }
         if(!this.adlist.has(v2)){
            this.adlist.set(v2,new Set());
         }  
         this.adlist.get(v1).add(v2);
         this.adlist.get(v2).add(v1);
         
     }

     removeVerted(v){
         this.adlist.delete(v);
        for (let [key,values] of this.adlist){
            if(this.adlist.get(key).has(v)){
                this.adlist.get(key).delete(v);
            }

        }

     }
     removeEdge(v1,v2){
        if(this.adlist.get(v1).has(v2)){
            this.adlist.get(v1).delete(v2);
        }
        if(this.adlist.get(v2).has(v1)){
            this.adlist.get(v2).delete(v1);
        }

     }

     bfs(start){  //Done wholly by me and very good work done ..looks little comples btw but i did thought it through
         let traverse =[start];
         let linked_vsetices = this.adlist.get(start);
         let items = new Set([...this.adlist.keys()]);
         items.delete(start);
         let visited_vertices =new Set([start]);
          do{
            let valid_vertices = new Set();
         
         for(let item of  linked_vsetices)
         {
             console.log("item",item);
         if(!visited_vertices.has(item)){
            
            if(this.adlist.get(item).size>0){
                this.adlist.get(item).forEach(element => {
                    if(!visited_vertices.has(element))
                    {
                        valid_vertices.add(element);
                        //console.log("element",element);
                    }
                    
                });
             

            }
            visited_vertices.add(item);
            traverse.push(item);
            items.delete(item);
         }
         console.log("ye",valid_vertices);
        }  
        if(valid_vertices.size>0){
            linked_vsetices = valid_vertices;
        } 
        //linked_vsetices = items;
    }
          while(items.size>0);

        
        
return traverse;
     }
     dfs(start){
        let traverse =[];   //iterative way
        let visited = [start];
        console.log(visited);
        let grp =  this.adlist;
        let linked_vsetices=[];
        //console.log(this.adlist);
        //let visited = [start];
        let i=0;
      
           i++;
                while(visited.length > 0){
                   console.log(i,visited, traverse);
                  
                if(!traverse.includes(visited[0])){
                    
                    linked_vsetices = [...grp.get(visited[0])];      
                    traverse.push(visited.shift())
                    for (let k in linked_vsetices){
                        if(!visited.includes(linked_vsetices[k])){
                            visited.unshift(linked_vsetices[k]);
                        }
                    }
                    console.log("linked_vsetices/visited",linked_vsetices,visited);
                    //console.log("e",visited);
                        //rec_dfs(visited);
                    }
                    else {
                        //console.log("e",visited);
                        visited.shift();
                        //rec_dfs(visited);
                    }
                   

                }
                return traverse;
        

        
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
graph.addEdge("E","F", 1);

console.log(graph.adlist);
console.log("dfs",graph.dfs("A"));
console.log("bfs",graph.bfs("A"));
//graph.removeEdge("a","b");
//graph.removeEdge("a","b");
//console.log(graph.adlist);
//console.log("dfs",graph.dfs("a"));