class Graph {
    constructor(numberOfVertices) {
        this.numberOfVertices = numberOfVertices;
        this.adjacencyList = new Map();
    }

    addVertex(v) {
        this.adjacencyList.set(v, []);
    }

    addEdge(v, w) {
        this.adjacencyList.get(v).push(w);
    }

    topologicalSortUtil(v, visited, stack) {
        visited[v] = true;

        const get_neighbours = this.adjacencyList.get(v);
        for (var i in get_neighbours) {
            var get_elem = get_neighbours[i];
            if (!visited[get_elem]) {
                this.topologicalSortUtil(get_elem, visited, stack);
            }
        }

        stack.push(v);
    }

    topologicalSort() {
        var visited = [];
        var stack = [];

        for (var i = 0; i < this.numberOfVertices; i++) {
            visited[i] = false;
        }

        for (var i = 0; i < this.numberOfVertices; i++) {
            if (visited[i] === false) {
                this.topologicalSortUtil(i, visited, stack);
            }
        }

        while (stack.length > 0) {
            console.log(stack.pop());
        }
    }
}

// Example usage
const graph = new Graph(6);
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

graph.addEdge(5, 2);
graph.addEdge(5, 0);
graph.addEdge(4, 0);
graph.addEdge(4, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

console.log("Topological Sort of the given graph:");
graph.topologicalSort();
