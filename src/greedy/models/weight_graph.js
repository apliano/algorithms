module.exports = class WeightGraph {
  #nodes;

  constructor() {
    this.#nodes = new Map();
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.#nodes.size;
  }

  getAdjancencyMap() {
    const adjancencyMap = new Map();
    [...this.#nodes.entries()].forEach(([node, edges]) => {
      adjancencyMap.set(node, [...edges]);
    });
    return adjancencyMap;
  }

  getNodes() {
    return this.#nodes.keys();
  }

  getEdges(node) {
    return this.#nodes.get(node);
  }

  addEdge(src, dest, weight) {
    if (!this.#nodes.has(src)) this.#addNode(src);
    if (!this.#nodes.has(dest.node)) this.#addNode(dest);

    this.#nodes.get(src).push({ node: dest, weight });
    this.#nodes.get(dest).push({ node: src, weight });
  }

  #addNode(node) {
    if (!this.#nodes.has(node)) this.#nodes.set(node, []);
  }
};
