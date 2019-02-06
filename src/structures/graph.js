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
}

const graph = new Graph();
graph.addVertex('Moscow');
graph.addVertex('New York');
graph.addVertex('Peterburg');
graph.addEdge('Moscow', 'New York');
graph.addEdge('Moscow', 'Peterburg');
// graph.removeEdge('Moscow', 'Peterburg');
graph.removeVertex('Moscow');
