import { useEffect, useRef, useState } from "react";

const GraphVisualization = () => {
  const bfsRef = useRef();
  const dfsRef = useRef();
  const dijkstraRef = useRef();
  const mstRef = useRef();
  const timelineRef = useRef(null);

  // Graph structure - adjacency representation
  const graphData = {
    nodes: [
      { id: 'A', x: 200, y: 100, label: 'A' },
      { id: 'B', x: 100, y: 200, label: 'B' },
      { id: 'C', x: 300, y: 200, label: 'C' },
      { id: 'D', x: 50, y: 350, label: 'D' },
      { id: 'E', x: 200, y: 350, label: 'E' },
      { id: 'F', x: 350, y: 350, label: 'F' }
    ],
    edges: [
      { from: 'A', to: 'B', weight: 4 },
      { from: 'A', to: 'C', weight: 2 },
      { from: 'B', to: 'D', weight: 5 },
      { from: 'B', to: 'E', weight: 3 },
      { from: 'C', to: 'E', weight: 1 },
      { from: 'C', to: 'F', weight: 6 },
      { from: 'D', to: 'E', weight: 2 },
      { from: 'E', to: 'F', weight: 4 }
    ]
  };

  // Animation helper function
  const animateElement = (element, styles, duration = 500) => {
    if (!element) return Promise.resolve();
    
    return new Promise(resolve => {
      Object.assign(element.style, styles);
      setTimeout(resolve, duration);
    });
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const runAnimations = async () => {
    // Reset all elements first
    [bfsRef, dfsRef, dijkstraRef, mstRef].forEach(ref => {
      if (ref.current) {
        const nodes = ref.current.querySelectorAll('.graph-node');
        const edges = ref.current.querySelectorAll('.graph-edge');
        
        nodes.forEach(node => {
          node.style.backgroundColor = "#fff";
          node.style.borderColor = "#374151";
          node.style.color = "#000";
          node.style.transform = "scale(1)";
          node.style.boxShadow = "none";
        });
        
        edges.forEach(edge => {
          edge.style.stroke = "#94a3b8";
          edge.style.strokeWidth = "2";
        });
      }
    });

    await sleep(500);

    // BFS Animation (starting from node A)
    await animateBFS();
    await sleep(1500);

    // DFS Animation (starting from node A)
    await animateDFS();
    await sleep(1500);

    // Dijkstra's Algorithm (shortest path from A)
    await animateDijkstra();
    await sleep(1500);

    // Minimum Spanning Tree (Kruskal's algorithm)
    await animateMST();
  };

  const animateBFS = async () => {
    const nodes = bfsRef.current.querySelectorAll('.graph-node');
    const edges = bfsRef.current.querySelectorAll('.graph-edge');
    
    // BFS order: A -> B, C -> D, E, F
    const bfsOrder = ['A', 'B', 'C', 'D', 'E', 'F'];
    const bfsEdges = [
      { from: 'A', to: 'B' },
      { from: 'A', to: 'C' },
      { from: 'B', to: 'D' },
      { from: 'B', to: 'E' },
      { from: 'C', to: 'F' }
    ];

    for (let i = 0; i < bfsOrder.length; i++) {
      const nodeId = bfsOrder[i];
      const node = Array.from(nodes).find(n => n.dataset.nodeId === nodeId);
      
      if (node) {
        await animateElement(node, {
          backgroundColor: "#3b82f6",
          borderColor: "#1d4ed8",
          color: "#fff",
          transform: "scale(1.2)",
          boxShadow: "0 0 20px #3b82f6"
        }, 600);
        
        // Animate relevant edges
        if (i > 0) {
          const relevantEdge = bfsEdges[i - 1];
          if (relevantEdge) {
            const edge = Array.from(edges).find(e => 
              (e.dataset.from === relevantEdge.from && e.dataset.to === relevantEdge.to) ||
              (e.dataset.from === relevantEdge.to && e.dataset.to === relevantEdge.from)
            );
            if (edge) {
              await animateElement(edge, {
                stroke: "#3b82f6",
                strokeWidth: "4"
              }, 300);
            }
          }
        }
        
        await sleep(400);
      }
    }
  };

  const animateDFS = async () => {
    const nodes = dfsRef.current.querySelectorAll('.graph-node');
    const edges = dfsRef.current.querySelectorAll('.graph-edge');
    
    // DFS order: A -> B -> D -> E -> C -> F (depth-first exploration)
    const dfsOrder = ['A', 'B', 'D', 'E', 'C', 'F'];
    const dfsEdges = [
      { from: 'A', to: 'B' },
      { from: 'B', to: 'D' },
      { from: 'D', to: 'E' },
      { from: 'E', to: 'C' },
      { from: 'C', to: 'F' }
    ];

    for (let i = 0; i < dfsOrder.length; i++) {
      const nodeId = dfsOrder[i];
      const node = Array.from(nodes).find(n => n.dataset.nodeId === nodeId);
      
      if (node) {
        await animateElement(node, {
          backgroundColor: "#10b981",
          borderColor: "#047857",
          color: "#fff",
          transform: "scale(1.2)",
          boxShadow: "0 0 20px #10b981"
        }, 600);
        
        // Animate relevant edges
        if (i > 0) {
          const relevantEdge = dfsEdges[i - 1];
          if (relevantEdge) {
            const edge = Array.from(edges).find(e => 
              (e.dataset.from === relevantEdge.from && e.dataset.to === relevantEdge.to) ||
              (e.dataset.from === relevantEdge.to && e.dataset.to === relevantEdge.from)
            );
            if (edge) {
              await animateElement(edge, {
                stroke: "#10b981",
                strokeWidth: "4"
              }, 300);
            }
          }
        }
        
        await sleep(400);
      }
    }
  };

  const animateDijkstra = async () => {
    const nodes = dijkstraRef.current.querySelectorAll('.graph-node');
    const edges = dijkstraRef.current.querySelectorAll('.graph-edge');
    
    // Dijkstra's algorithm steps (shortest path from A)
    const dijkstraSteps = [
      { node: 'A', distance: 0, color: '#ef4444' },
      { node: 'C', distance: 2, color: '#f97316' },
      { node: 'E', distance: 3, color: '#eab308' },
      { node: 'B', distance: 4, color: '#22c55e' },
      { node: 'D', distance: 5, color: '#06b6d4' },
      { node: 'F', distance: 7, color: '#8b5cf6' }
    ];

    for (let i = 0; i < dijkstraSteps.length; i++) {
      const step = dijkstraSteps[i];
      const node = Array.from(nodes).find(n => n.dataset.nodeId === step.node);
      
      if (node) {
        // Add distance label
        const distanceLabel = node.querySelector('.distance-label') || document.createElement('div');
        distanceLabel.className = 'distance-label absolute -top-2 -right-2 bg-white border border-gray-300 rounded px-1 text-xs font-bold';
        distanceLabel.textContent = step.distance;
        if (!node.querySelector('.distance-label')) {
          node.appendChild(distanceLabel);
        }
        
        await animateElement(node, {
          backgroundColor: step.color,
          borderColor: step.color,
          color: "#fff",
          transform: "scale(1.2)",
          boxShadow: `0 0 20px ${step.color}`
        }, 600);
        
        await sleep(800);
        
        await animateElement(node, {
          transform: "scale(1)"
        }, 200);
        
        await sleep(200);
      }
    }
  };

  const animateMST = async () => {
    const nodes = mstRef.current.querySelectorAll('.graph-node');
    const edges = mstRef.current.querySelectorAll('.graph-edge');
    
    // MST edges in order of selection (Kruskal's algorithm)
    const mstEdges = [
      { from: 'C', to: 'E', weight: 1 },
      { from: 'A', to: 'C', weight: 2 },
      { from: 'D', to: 'E', weight: 2 },
      { from: 'B', to: 'E', weight: 3 },
      { from: 'E', to: 'F', weight: 4 }
    ];

    // First, highlight all nodes
    for (const node of nodes) {
      await animateElement(node, {
        backgroundColor: "#f3f4f6",
        borderColor: "#6b7280"
      }, 200);
    }

    await sleep(500);

    // Animate MST edges one by one
    for (let i = 0; i < mstEdges.length; i++) {
      const mstEdge = mstEdges[i];
      const edge = Array.from(edges).find(e => 
        (e.dataset.from === mstEdge.from && e.dataset.to === mstEdge.to) ||
        (e.dataset.from === mstEdge.to && e.dataset.to === mstEdge.from)
      );
      
      if (edge) {
        await animateElement(edge, {
          stroke: "#dc2626",
          strokeWidth: "5"
        }, 600);
        
        // Highlight connected nodes
        const fromNode = Array.from(nodes).find(n => n.dataset.nodeId === mstEdge.from);
        const toNode = Array.from(nodes).find(n => n.dataset.nodeId === mstEdge.to);
        
        if (fromNode) {
          await animateElement(fromNode, {
            backgroundColor: "#dc2626",
            borderColor: "#b91c1c",
            color: "#fff"
          }, 300);
        }
        
        if (toNode) {
          await animateElement(toNode, {
            backgroundColor: "#dc2626",
            borderColor: "#b91c1c",
            color: "#fff"
          }, 300);
        }
        
        await sleep(800);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      runAnimations();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const GraphNode = ({ node, className = "" }) => (
    <div
      className={`graph-node absolute w-12 h-12 flex items-center justify-center border-2 border-gray-700 bg-white rounded-full shadow-lg font-bold text-lg transition-all duration-300 ${className}`}
      style={{ left: node.x - 24, top: node.y - 24 }}
      data-node-id={node.id}
    >
      {node.label}
    </div>
  );

  const GraphEdge = ({ edge, nodes }) => {
    const fromNode = nodes.find(n => n.id === edge.from);
    const toNode = nodes.find(n => n.id === edge.to);
    
    if (!fromNode || !toNode) return null;

    const midX = (fromNode.x + toNode.x) / 2;
    const midY = (fromNode.y + toNode.y) / 2;

    return (
      <g>
        <line
          className="graph-edge transition-all duration-300"
          x1={fromNode.x}
          y1={fromNode.y}
          x2={toNode.x}
          y2={toNode.y}
          stroke="#94a3b8"
          strokeWidth="2"
          data-from={edge.from}
          data-to={edge.to}
        />
        <circle
          cx={midX}
          cy={midY}
          r="12"
          fill="#fff"
          stroke="#94a3b8"
          strokeWidth="1"
        />
        <text
          x={midX}
          y={midY + 4}
          textAnchor="middle"
          className="text-xs font-bold fill-gray-700"
        >
          {edge.weight}
        </text>
      </g>
    );
  };

  const GraphStructure = () => (
    <div className="relative w-full h-96 border border-gray-300 rounded-lg overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
        {graphData.edges.map((edge, index) => (
          <GraphEdge key={index} edge={edge} nodes={graphData.nodes} />
        ))}
      </svg>
      {graphData.nodes.map((node) => (
        <GraphNode key={node.id} node={node} />
      ))}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-end mb-6">
        <button
          onClick={() => runAnimations()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow transition-colors"
        >
          🔄 Reset Animation
        </button>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
          📊 Graph Algorithms Visualization
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Explore fundamental graph algorithms with visual animations. Watch how different 
          traversal and optimization algorithms work on a weighted graph.
        </p>
      </div>

      {/* BFS */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">🔸 Breadth-First Search (BFS)</h3>
        <p className="text-gray-700 mb-6 max-w-3xl">
          BFS explores nodes level by level, visiting all neighbors before moving deeper. 
          Uses a queue data structure. Time complexity: <code className="bg-gray-100 px-2 py-1 rounded">O(V + E)</code>
        </p>
        <div ref={bfsRef} className="bg-gray-50 p-8 rounded-lg">
          <GraphStructure />
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          BFS traversal order: A → B, C → D, E, F (level by level)
        </p>
      </div>

      {/* DFS */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">🔸 Depth-First Search (DFS)</h3>
        <p className="text-gray-700 mb-6 max-w-3xl">
          DFS explores as far as possible along each branch before backtracking. 
          Uses a stack (or recursion). Time complexity: <code className="bg-gray-100 px-2 py-1 rounded">O(V + E)</code>
        </p>
        <div ref={dfsRef} className="bg-gray-50 p-8 rounded-lg">
          <GraphStructure />
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          DFS traversal order: A → B → D → E → C → F (depth-first exploration)
        </p>
      </div>

      {/* Dijkstra */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">🔸 Dijkstra's Shortest Path</h3>
        <p className="text-gray-700 mb-6 max-w-3xl">
          Finds shortest paths from source to all other vertices in weighted graph. 
          Uses priority queue. Time complexity: <code className="bg-gray-100 px-2 py-1 rounded">O(V² + E) or O((V + E) log V)</code>
        </p>
        <div ref={dijkstraRef} className="bg-gray-50 p-8 rounded-lg">
          <GraphStructure />
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Shortest distances from A: A(0) → C(2) → E(3) → B(4) → D(5) → F(7)
        </p>
      </div>

      {/* MST */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">🔸 Minimum Spanning Tree (MST)</h3>
        <p className="text-gray-700 mb-6 max-w-3xl">
          Finds minimum weight tree that connects all vertices. Using Kruskal's algorithm with Union-Find. 
          Time complexity: <code className="bg-gray-100 px-2 py-1 rounded">O(E log E)</code>
        </p>
        <div ref={mstRef} className="bg-gray-50 p-8 rounded-lg">
          <GraphStructure />
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          MST edges selected: C-E(1), A-C(2), D-E(2), B-E(3), E-F(4) | Total weight: 12
        </p>
      </div>

      {/* Additional Info */}
      <div className="bg-green-50 p-6 rounded-lg">
        <h4 className="text-lg font-semibold mb-3 text-green-800">🔍 Graph Properties</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700">
          <div>
            <strong>Vertices (V):</strong> 6 nodes representing entities or states
          </div>
          <div>
            <strong>Edges (E):</strong> 8 weighted connections between vertices
          </div>
          <div>
            <strong>Graph Type:</strong> Undirected, weighted, connected graph
          </div>
          <div>
            <strong>Applications:</strong> Social networks, routing, optimization, AI pathfinding
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphVisualization;