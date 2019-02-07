class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    this.adjacencyList[v] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1]
      .filter(o => o !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2]
      .filter(o => o !== v1);
  }

  removeVertex(v) {
    this.adjacencyList[v].forEach(o => this.removeEdge(v, o));
    delete this.adjacencyList[v];
  }

  dfs(v) {
    const visited = new Map();
    const helper = (o) => {
      visited.set(o, true);
      this.adjacencyList[o].filter(i => !visited.get(i))
        .forEach(i => helper(i));
    };
    helper(v);
    return [...visited.keys()];
  }

  bfs(v) {
    const visited = new Map();
    const result = [];
    const queue = [v];
    let current;
    visited.set(v, true);
    while (queue.length) {
      current = queue.shift();
      result.push(current);

      this.adjacencyList[current].forEach((o) => {
        if (!visited.get(o)) {
          visited.set(o, true);
          queue.push(o);
        }
      });
    }
    return result;
  }
}

//               Moscow
//            /          \
//         New York        Peterbug
//          |               |
//        Madrid  ------  London
//           \             /
//                Berlin

const graph = new Graph();
graph.addVertex('Moscow');
graph.addVertex('New York');
graph.addVertex('Peterburg');
graph.addVertex('Madrid');
graph.addVertex('London');
graph.addVertex('Berlin');
graph.addEdge('Moscow', 'New York');
graph.addEdge('Moscow', 'Peterburg');
graph.addEdge('New York', 'Madrid');
graph.addEdge('Peterburg', 'London');
graph.addEdge('Madrid', 'Berlin');
graph.addEdge('Madrid', 'London');
graph.addEdge('London', 'Berlin');

console.log(graph.dfs('Moscow'));
console.log(graph.bfs('Moscow'));
// graph.removeEdge('Moscow', 'Peterburg');
graph.removeVertex('Moscow');
