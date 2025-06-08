import GraphVisualization from '../../components/DataStructureVisualizer/GraphVisualization';
import MCQSection from '../../components/Shared/MCQSection';
import {graphQuestions} from '../../utils/mcq'

const Graph = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8"> {/* Container for padding */}
        {/* Intro Section */}
        <section className="mt-8 max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">🔹 What is a Graph?</h2>
            <p className="text-gray-700 mb-4">
            A <strong>Graph</strong> is a non-linear data structure consisting of <strong>vertices (nodes)</strong> and <strong>edges</strong> that connect these vertices.
            Graphs are used to represent relationships between different entities, making them fundamental in computer science for modeling networks, social connections, maps, and many other real-world scenarios.
            </p>
            <p className="text-gray-700 mb-4">
            Think of a graph like a social network - people are vertices and friendships are edges connecting them.
            Graphs can represent complex relationships and are essential for algorithms like shortest path finding, network analysis, and dependency resolution.
            </p>

            <h3 className="text-xl font-semibold mb-2">🔹 Visual Representation</h3>
            <div className="flex flex-col items-center gap-4 mt-4">
                <div className="relative w-80 h-64 bg-gray-50 border-2 border-gray-200 rounded-lg p-4">
                    {/* Simple graph visualization */}
                    <div className="absolute top-8 left-12 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        A
                    </div>
                    <div className="absolute top-8 right-12 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        B
                    </div>
                    <div className="absolute bottom-16 left-12 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        C
                    </div>
                    <div className="absolute bottom-16 right-12 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        D
                    </div>
                    <div className="absolute top-13 left-24 w-30 h-0.5 bg-gray-600 transform rotate-0"></div>
                    <div className="absolute top-20 left-18 w-0.5 h-15 bg-gray-600"></div>
                    <div className="absolute bottom-22 left-24 w-30 h-0.5 bg-gray-600 transform -rotate-0 "></div>
                    <div className="absolute top-20 right-18 w-0.5 h-15 bg-gray-600"></div>
                </div>
                <div className="text-center">
                    <p className="text-sm text-gray-600">Graph with 4 vertices (A, B, C, D) and 4 edges</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-2">🔹 Basic Terminology</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-green-400 rounded-md p-4 shadow-md bg-green-50">
                    <h4 className="font-bold text-green-700">Vertex (Node)</h4>
                    <p className="text-sm text-gray-600">A fundamental unit that represents an entity in the graph</p>
                </div>
                <div className="border-2 border-blue-400 rounded-md p-4 shadow-md bg-blue-50">
                    <h4 className="font-bold text-blue-700">Edge</h4>
                    <p className="text-sm text-gray-600">A connection between two vertices representing a relationship</p>
                </div>
                <div className="border-2 border-purple-400 rounded-md p-4 shadow-md bg-purple-50">
                    <h4 className="font-bold text-purple-700">Degree</h4>
                    <p className="text-sm text-gray-600">Number of edges connected to a vertex</p>
                </div>
                <div className="border-2 border-orange-400 rounded-md p-4 shadow-md bg-orange-50">
                    <h4 className="font-bold text-orange-700">Path</h4>
                    <p className="text-sm text-gray-600">A sequence of vertices connected by edges</p>
                </div>
            </div>
        </section>

        {/* Section for Types of Graphs */}
        <section className="mt-8 max-w-7xl mx-auto p-8 bg-gray-50">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Types of Graphs</h3>

            {/* Directed Graph */}
            <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-700 mb-2">Directed Graph (Digraph)</h4>
                <p className="text-gray-700 mb-4">
                A <strong>Directed Graph</strong> has edges with direction, meaning the relationship is one-way from source to destination.
                </p>
                <div className="flex justify-center items-center gap-8">
                    <div className="relative">
                        <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                            A
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-16 h-0.5 bg-blue-600"></div>
                        <div className="w-0 h-0 border-l-4 border-l-blue-600 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                    <div className="relative">
                        <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                            B
                        </div>
                    </div>
                </div>
            </div>

            {/* Undirected Graph */}
            <div className="mb-8">
                <h4 className="text-xl font-semibold text-purple-700 mb-2">Undirected Graph</h4>
                <p className="text-gray-700 mb-4">
                An <strong>Undirected Graph</strong> has edges without direction, meaning the relationship is bidirectional.
                </p>
                <div className="flex justify-center items-center gap-8">
                    <div className="relative">
                        <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                            X
                        </div>
                    </div>
                    <div className="w-16 h-0.5 bg-purple-600"></div>
                    <div className="relative">
                        <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                            Y
                        </div>
                    </div>
                </div>
            </div>

            {/* Weighted Graph */}
            <div className="mb-8">
                <h4 className="text-xl font-semibold text-green-700 mb-2">Weighted Graph</h4>
                <p className="text-gray-700 mb-4">
                A <strong>Weighted Graph</strong> has edges with associated weights or costs, useful for representing distances or costs.
                </p>
                <div className="flex justify-center items-center gap-8">
                    <div className="relative">
                        <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-white font-bold">
                            P
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="w-16 h-0.5 bg-green-600"></div>
                        <div className="absolute -top-4 bg-green-200 px-2 py-1 rounded text-xs font-bold">5</div>
                    </div>
                    <div className="relative">
                        <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-white font-bold">
                            Q
                        </div>
                    </div>
                </div>
            </div>

            {/* Cyclic vs Acyclic */}
            <div className="mb-8">
                <h4 className="text-xl font-semibold text-orange-700 mb-2">Cyclic vs Acyclic Graphs</h4>
                <p className="text-gray-700 mb-4">
                <strong>Cyclic graphs</strong> contain at least one cycle (closed path), while <strong>Acyclic graphs</strong> have no cycles.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center">
                        <h5 className="font-semibold text-orange-600 mb-2">Cyclic Graph</h5>
                        <div className="relative w-32 h-32 mx-auto">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                1
                            </div>
                            <div className="absolute bottom-4 left-4 w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                2
                            </div>
                            <div className="absolute bottom-4 right-4 w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                3
                            </div>
                            <div className="absolute top-13 left-7 w-8 h-0.5 bg-orange-600 transform rotate-115"></div>
                            <div className="absolute bottom-8 left-14 w-4 h-0.5 bg-orange-600"></div>
                            <div className="absolute bottom-18 right-8 w-8 h-0.5 bg-orange-600 transform -rotate-115"></div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h5 className="font-semibold text-orange-600 mb-2">Acyclic Graph (Tree)</h5>
                        <div className="relative w-32 h-32 mx-auto">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-orange-300 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                1
                            </div>
                            <div className="absolute bottom-4 left-4 w-10 h-10 bg-orange-300 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                2
                            </div>
                            <div className="absolute bottom-4 right-4 w-10 h-10 bg-orange-300 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                3
                            </div>
                            <div className="absolute top-9 left-11 w-0.5 h-8 bg-orange-500 transform rotate-20"></div>
                            <div className="absolute top-9 right-11 w-0.5 h-8 bg-orange-500 transform -rotate-25"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full py-10 px-4 md:px-20 flex flex-col items-center">
            {/* Title Section */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">Graph Operations 🚀</h2>
                <p className="text-lg text-gray-600 mt-2">Visualizing key operations in Graphs: Add Vertex, Add Edge, Remove Vertex, Remove Edge, and Traversals.</p>
            </div>

            {/* Why Graphs? Section */}
            <div className="w-[70vw] mb-10 bg-gray-100 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Graphs?</h3>
                <p className="text-gray-600">
                Graphs are essential for modeling relationships and networks. They enable efficient pathfinding algorithms, 
                social network analysis, dependency resolution, network routing, recommendation systems, and solving complex 
                optimization problems. Graphs provide a natural way to represent interconnected data.
                </p>
            </div>

            {/* Key Operations Section */}
            <div className="w-[70vw] mb-10 bg-gray-100 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Operations</h3>
                <ul className="text-gray-600">
                <li>🔹 **Add Vertex**: Insert a new vertex into the graph.</li>
                <li>🔹 **Add Edge**: Create a connection between two vertices.</li>
                <li>🔹 **Remove Vertex**: Delete a vertex and all its associated edges.</li>
                <li>🔹 **Remove Edge**: Remove a connection between two vertices.</li>
                <li>🔹 **DFS Traversal**: Depth-First Search to explore the graph.</li>
                <li>🔹 **BFS Traversal**: Breadth-First Search to explore the graph level by level.</li>
                </ul>
            </div>

            {/* Graph Visualization Section */}
            <div className="flex justify-center">
                <GraphVisualization />
            </div>
        </section>

        {/* Separate Code Section */}
        <section className="mt-8 max-w-7xl mx-auto p-8 bg-gray-50">
            <div className="w-full bg-gray-100 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Sample Code for Graph Implementation (Adjacency List)</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md">
                <code className="text-sm">
                    {`class Graph {
    constructor(isDirected = false) {
        this.adjacencyList = {};
        this.isDirected = isDirected;
    }

    // Add vertex to graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add edge between two vertices
    addEdge(vertex1, vertex2, weight = 1) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        
        if (!this.isDirected) {
            this.adjacencyList[vertex2].push({ node: vertex1, weight });
        }
    }

    // Remove vertex and all its edges
    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            // Remove all edges to this vertex
            for (let adjacentVertex in this.adjacencyList) {
                this.removeEdge(adjacentVertex, vertex);
            }
            // Remove the vertex itself
            delete this.adjacencyList[vertex];
        }
    }

    // Remove edge between two vertices
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
                .filter(edge => edge.node !== vertex2);
        }
        
        if (!this.isDirected && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
                .filter(edge => edge.node !== vertex1);
        }
    }

    // Depth-First Search
    dfs(startVertex, visited = new Set()) {
        if (!startVertex || visited.has(startVertex)) return [];
        
        visited.add(startVertex);
        const result = [startVertex];
        
        for (let neighbor of this.adjacencyList[startVertex]) {
            if (!visited.has(neighbor.node)) {
                result.push(...this.dfs(neighbor.node, visited));
            }
        }
        
        return result;
    }

    // Breadth-First Search
    bfs(startVertex) {
        if (!startVertex) return [];
        
        const queue = [startVertex];
        const visited = new Set([startVertex]);
        const result = [];
        
        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);
            
            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor.node)) {
                    visited.add(neighbor.node);
                    queue.push(neighbor.node);
                }
            }
        }
        
        return result;
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('A', 'C');
console.log(graph.dfs('A')); // ['A', 'B', 'C']
console.log(graph.bfs('A')); // ['A', 'B', 'C']
`}
                </code>
                </pre>
            </div>
        </section>
        
        {/* Graph Representation Methods */}
        <section className="mt-10 px-4 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2 text-center sm:text-left">
                🔹 Graph Representation Methods
            </h3>
            
            <p className="text-gray-600 mb-4 text-sm sm:text-base text-center sm:text-left">
                Graphs can be represented using different data structures, each with their own advantages and trade-offs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-blue-700 mb-2">Adjacency Matrix</h4>
                    <p className="text-sm text-gray-600 mb-3">2D array where matrix[i][j] represents edge between vertex i and j</p>
                    <div className="text-xs space-y-1">
                        <div className="text-green-600">✓ Fast edge lookup O(1)</div>
                        <div className="text-green-600">✓ Simple for dense graphs</div>
                        <div className="text-red-600">✗ Space complexity O(V²)</div>
                        <div className="text-red-600">✗ Inefficient for sparse graphs</div>
                    </div>
                </div>
                
                <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-purple-700 mb-2">Adjacency List</h4>
                    <p className="text-sm text-gray-600 mb-3">Array/Map of lists containing neighbors for each vertex</p>
                    <div className="text-xs space-y-1">
                        <div className="text-green-600">✓ Space efficient O(V + E)</div>
                        <div className="text-green-600">✓ Fast traversal</div>
                        <div className="text-red-600">✗ Edge lookup O(V) worst case</div>
                        <div className="text-red-600">✗ Slightly more complex</div>
                    </div>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-green-700 mb-2">Edge List</h4>
                    <p className="text-sm text-gray-600 mb-3">Simple list of all edges in the graph</p>
                    <div className="text-xs space-y-1">
                        <div className="text-green-600">✓ Simple implementation</div>
                        <div className="text-green-600">✓ Good for algorithms like Kruskal's</div>
                        <div className="text-red-600">✗ Slow neighbor lookup</div>
                        <div className="text-red-600">✗ Not efficient for traversals</div>
                    </div>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-orange-700 mb-2">Incidence Matrix</h4>
                    <p className="text-sm text-gray-600 mb-3">2D array where rows are vertices and columns are edges</p>
                    <div className="text-xs space-y-1">
                        <div className="text-green-600">✓ Good for multigraphs</div>
                        <div className="text-green-600">✓ Explicit edge representation</div>
                        <div className="text-red-600">✗ Space complexity O(V × E)</div>
                        <div className="text-red-600">✗ Rarely used in practice</div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Real-world Applications */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2">🔹 Real-world Applications</h3>
            <p className="text-gray-700 mb-6">
                Graphs are fundamental in solving real-world problems across various domains:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                    { title: "Social Networks", desc: "Facebook friends, Twitter followers, LinkedIn connections" },
                    { title: "Navigation Systems", desc: "GPS routing, shortest path algorithms, traffic optimization" },
                    { title: "Computer Networks", desc: "Internet topology, network routing protocols" },
                    { title: "Recommendation Systems", desc: "Amazon products, Netflix movies, Spotify playlists" },
                    { title: "Dependency Resolution", desc: "Package managers, build systems, task scheduling" },
                    { title: "Web Page Ranking", desc: "Google PageRank algorithm, link analysis" },
                    { title: "Game Development", desc: "Game maps, AI pathfinding, state machines" },
                    { title: "Bioinformatics", desc: "Protein interaction networks, phylogenetic trees" },
                    { title: "Circuit Design", desc: "Electronic circuits, logic gate networks" }
                ].map((app, index) => (
                    <div key={index} className="border border-gray-300 rounded-md p-4 shadow-md bg-white hover:shadow-lg transition-shadow">
                        <h4 className="font-bold text-gray-800 mb-2">{app.title}</h4>
                        <p className="text-sm text-gray-600">{app.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Graph Algorithms Section */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2">🔹 Common Graph Algorithms</h3>
            <p className="text-gray-700 mb-4">
                Essential algorithms for solving graph-related problems:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-blue-700 mb-2">Traversal Algorithms</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>DFS</strong>: Explore as far as possible before backtracking</li>
                        <li>• <strong>BFS</strong>: Explore neighbors level by level</li>
                        <li>• Used in: Connected components, topological sort</li>
                    </ul>
                </div>
                
                <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-green-700 mb-2">Shortest Path Algorithms</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Dijkstra's</strong>: Single-source shortest path</li>
                        <li>• <strong>Bellman-Ford</strong>: Handles negative weights</li>
                        <li>• <strong>Floyd-Warshall</strong>: All-pairs shortest path</li>
                    </ul>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-purple-700 mb-2">Minimum Spanning Tree</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Kruskal's</strong>: Edge-based approach using Union-Find</li>
                        <li>• <strong>Prim's</strong>: Vertex-based approach using priority queue</li>
                        <li>• Used in: Network design, clustering</li>
                    </ul>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-orange-700 mb-2">Cycle Detection</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>DFS-based</strong>: Using color coding or recursion stack</li>
                        <li>• <strong>Union-Find</strong>: For undirected graphs</li>
                        <li>• Used in: Deadlock detection, DAG verification</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Time & Space Complexity Section */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2">🔹 Time & Space Complexity</h3>
            <p className="text-gray-700 mb-4">
                Performance comparison of different graph operations and representations:
            </p>

            <div className="overflow-x-auto">
                <table className="min-w-full text-left border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                    <th className="px-4 py-2 border">Operation</th>
                    <th className="px-4 py-2 border">Adjacency Matrix</th>
                    <th className="px-4 py-2 border">Adjacency List</th>
                    <th className="px-4 py-2 border">Edge List</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {[
                    ["Add Vertex", "O(V²)", "O(1)", "O(1)"],
                    ["Add Edge", "O(1)", "O(1)", "O(1)"],
                    ["Remove Vertex", "O(V²)", "O(V + E)", "O(E)"],
                    ["Remove Edge", "O(1)", "O(V)", "O(E)"],
                    ["Check Edge", "O(1)", "O(V)", "O(E)"],
                    ["Get Neighbors", "O(V)", "O(degree)", "O(E)"],
                    ["DFS/BFS", "O(V²)", "O(V + E)", "O(V × E)"],
                    ["Space Complexity", "O(V²)", "O(V + E)", "O(E)"],
                    ].map(([op, matrix, list, edgeList], index) => (
                    <tr key={index} className="border-t">
                        <td className="px-4 py-2 border font-semibold">{op}</td>
                        <td className="px-4 py-2 border">{matrix}</td>
                        <td className="px-4 py-2 border">{list}</td>
                        <td className="px-4 py-2 border">{edgeList}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
                V = number of vertices, E = number of edges
            </p>
        </section>

        {/* Use Cases Section */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2">🔹 When to Use Different Graph Representations</h3>
            <div className="space-y-4 text-gray-700">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <h4 className="font-semibold text-blue-800">Adjacency Matrix</h4>
                    <p className="text-sm">Use for dense graphs, when you need fast edge lookups, or when implementing algorithms like Floyd-Warshall.</p>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                    <h4 className="font-semibold text-purple-800">Adjacency List</h4>
                    <p className="text-sm">Use for sparse graphs, when memory is a concern, or when you frequently traverse neighbors (most common choice).</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                    <h4 className="font-semibold text-green-800">Edge List</h4>
                    <p className="text-sm">Use for algorithms that process all edges, like Kruskal's MST algorithm, or when the graph structure changes frequently.</p>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                    <h4 className="font-semibold text-orange-800">Incidence Matrix</h4>
                    <p className="text-sm">Use for multigraphs (multiple edges between vertices) or when you need to explicitly track individual edges.</p>
                </div>
            </div>
        </section>

        {/* Graph Properties Section */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2">🔹 Important Graph Properties</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-indigo-700 mb-2">Connectivity</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Connected</strong>: Path exists between any two vertices</li>
                        <li>• <strong>Strongly Connected</strong>: (Directed) Path exists in both directions</li>
                        <li>• <strong>Weakly Connected</strong>: (Directed) Connected when ignoring direction</li>
                    </ul>
                </div>
                
                <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-teal-700 mb-2">Planarity</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Planar</strong>: Can be drawn without edge crossings</li>
                        <li>• <strong>Complete Graph K₅</strong>: First non-planar graph</li>
                        <li>• Important in: Circuit design, map coloring</li>
                    </ul>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-rose-700 mb-2">Bipartiteness</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Bipartite</strong>: Vertices can be divided into two disjoint sets</li>
                        <li>• No edges within the same set</li>
                        <li>• Used in: Matching problems, scheduling</li>
                    </ul>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-amber-700 mb-2">Density</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Dense</strong>: Many edges relative to vertices</li>
                        <li>• <strong>Sparse</strong>: Few edges relative to vertices</li>
                        <li>• Affects choice of representation and algorithms</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Special Graph Types Section */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2">🔹 Special Graph Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                    { 
                        title: "Tree", 
                        desc: "Connected acyclic graph with V-1 edges",
                        color: "green"
                    },
                    { 
                        title: "Complete Graph", 
                        desc: "Every pair of vertices is connected",
                        color: "blue"
                    },
                    { 
                        title: "Bipartite Graph", 
                        desc: "Vertices divided into two disjoint sets",
                        color: "purple"
                    },
                    { 
                        title: "DAG", 
                        desc: "Directed Acyclic Graph, no cycles",
                        color: "orange"
                    },
                    { 
                        title: "Planar Graph", 
                        desc: "Can be drawn without edge crossings",
                        color: "teal"
                    },
                    { 
                        title: "Regular Graph", 
                        desc: "All vertices have the same degree",
                        color: "rose"
                    }
                ].map((type, index) => (
                    <div key={index} className={`border border-${type.color}-300 rounded-md p-4 shadow-md bg-${type.color}-50 hover:shadow-lg transition-shadow`}>
                        <h4 className={`font-bold text-${type.color}-800 mb-2`}>{type.title}</h4>
                        <p className="text-sm text-gray-600">{type.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Performance Tips Section */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2">🔹 Performance Tips & Best Practices</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">📈 Optimization Tips</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Use adjacency list for sparse graphs</li>
                            <li>• Use adjacency matrix for dense graphs</li>
                            <li>• Consider memory vs time trade-offs</li>
                            <li>• Use appropriate data structures (sets, maps)</li>
                            <li>• Implement early termination in searches</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">⚠️ Common Pitfalls</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Not handling disconnected components</li>
                            <li>• Infinite loops in cyclic graphs</li>
                            <li>• Memory issues with large adjacency matrices</li>
                            <li>• Not considering edge cases (empty graphs)</li>
                            <li>• Forgetting to check for visited nodes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* MCQ Section */}
        <MCQSection title="🧠 Graph Exercises" questions={graphQuestions} />
    </div>
  );
};

export default Graph;