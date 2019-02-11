class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    this.adjacencyList[v] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  path(v1, v2) {
    const dist = Object.keys(this.adjacencyList)
      .reduce((obj, o) => {
        obj[o] = Number.POSITIVE_INFINITY;
        return obj;
      }, {});
    dist[v1] = 0;
    const queue = new PriorityQueue();
    queue.enqueue(v1, 0);
    const prev = Object.keys(this.adjacencyList)
      .reduce((obj, o) => {
        obj[o] = null;
        return obj;
      }, {});
    while (queue.values.length) {
      let v = queue.dequeue().val;
      if (v === v2) {
        const path = [];
        while (prev[v]) {
          path.push(v);
          v = prev[v];
        }
        path.push(v1);
        return path.reverse();
      }
      for (let i = 0; i < this.adjacencyList[v].length; i++) {
        const adj = this.adjacencyList[v][i];
        const weight = adj.weight + (dist[v] || 0);
        if (weight < dist[adj.node]) {
          dist[adj.node] = weight;
          prev[adj.node] = v;
          queue.enqueue(adj.node, weight);
        }
      }
    }
    return dist[v2];
  }
}

//               Moscow
//            / 100      \ 200
//         New York        Peterbug
//          | 300           | 400
//        Madrid  ------  London
//           \ 500  600   / 700
//                Berlin

const graph = new WeightedGraph();
graph.addVertex('Moscow');
graph.addVertex('New York');
graph.addVertex('Peterburg');
graph.addVertex('Madrid');
graph.addVertex('London');
graph.addVertex('Berlin');
graph.addEdge('Moscow', 'New York', 100);
graph.addEdge('Moscow', 'Peterburg', 200);
graph.addEdge('New York', 'Madrid', 300);
graph.addEdge('Peterburg', 'London', 400);
graph.addEdge('Madrid', 'Berlin', 500);
graph.addEdge('Madrid', 'London', 600);
graph.addEdge('London', 'Berlin', 700);

console.log(graph.path('Moscow', 'Berlin'));
console.log(graph.path('Madrid', 'London'));
