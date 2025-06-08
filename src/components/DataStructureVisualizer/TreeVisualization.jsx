import { useEffect, useRef, useState } from "react";

const TreeVisualization = () => {
  const traversalRef = useRef();
  const searchingRef = useRef();
  const insertingRef = useRef();
  const deletingRef = useRef();
  const timelineRef = useRef(null);

  // Tree structure: Binary Search Tree
  const initialTree = {
    value: 50,
    left: { value: 30, left: { value: 20 }, right: { value: 40 } },
    right: { value: 70, left: { value: 60 }, right: { value: 80 } }
  };

  const searchValue = 40;
  const insertValue = 35;
  const deleteValue = 30;

  // Simple animation function to avoid external dependencies
  const animateNode = (node, styles, duration = 500) => {
    if (!node) return Promise.resolve();
    
    return new Promise(resolve => {
      // Apply styles immediately for demonstration
      Object.assign(node.style, styles);
      setTimeout(resolve, duration);
    });
  };

  const runAnimation = async () => {
    // Reset all nodes first
    [traversalRef, searchingRef, insertingRef, deletingRef].forEach(ref => {
      if (ref.current) {
        const nodes = ref.current.querySelectorAll('.tree-node');
        nodes.forEach(node => {
          node.style.backgroundColor = "#fff";
          node.style.color = "#000";
          node.style.transform = "scale(1)";
          node.style.boxShadow = "none";
          node.style.opacity = "1";
          node.style.visibility = "visible";
        });
      }
    });

    await new Promise(resolve => setTimeout(resolve, 500));

    // In-order Traversal Animation
    const traversalNodes = traversalRef.current.querySelectorAll('.tree-node');
    // Correct order for in-order traversal: 20, 30, 35, 40, 50, 60, 70, 80
    const traversalOrder = [3, 1, 7, 4, 0, 5, 2, 6]; // Adjusted indices
    
    for (let i = 0; i < traversalOrder.length; i++) {
      const nodeIndex = traversalOrder[i];
      const node = traversalNodes[nodeIndex];
      if (node) {
        await animateNode(node, {
          backgroundColor: "#10b981",
          color: "#fff",
          transform: "scale(1.2)",
          boxShadow: "0 0 20px #10b981"
        }, 300);
        
        await new Promise(resolve => setTimeout(resolve, 200));
        
        await animateNode(node, {
          backgroundColor: "#fff",
          color: "#000",
          transform: "scale(1)",
          boxShadow: "none"
        }, 200);
      }
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    // Search Animation (BST search for value 40)
    const searchNodes = searchingRef.current.querySelectorAll('.tree-node');
    const searchPath = [0, 1, 4]; // Path: 50 -> 30 -> 40
    
    for (let i = 0; i < searchPath.length; i++) {
      const nodeIndex = searchPath[i];
      const node = searchNodes[nodeIndex];
      if (node) {
        const isTarget = i === searchPath.length - 1;
        await animateNode(node, {
          backgroundColor: isTarget ? "#ef4444" : "#3b82f6",
          color: "#fff",
          transform: "scale(1.2)",
          boxShadow: `0 0 20px ${isTarget ? "#ef4444" : "#3b82f6"}`
        }, 600);
        
        if (!isTarget) {
          await new Promise(resolve => setTimeout(resolve, 300));
          await animateNode(node, {
            backgroundColor: "#e5e7eb",
            color: "#374151",
            transform: "scale(1)",
            boxShadow: "none"
          }, 300);
        }
      }
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Keep target highlighted longer
    await new Promise(resolve => setTimeout(resolve, 1000));
    await animateNode(searchNodes[4], {
      backgroundColor: "#fff",
      color: "#000",
      transform: "scale(1)",
      boxShadow: "none"
    }, 400);

    await new Promise(resolve => setTimeout(resolve, 1000));

    // Insertion Animation
    const insertNodes = insertingRef.current.querySelectorAll('.tree-node');
    const insertPath = [0, 1]; // Path to parent node (30)
    
    for (let i = 0; i < insertPath.length; i++) {
      const nodeIndex = insertPath[i];
      const node = insertNodes[nodeIndex];
      if (node) {
        await animateNode(node, {
          backgroundColor: "#8b5cf6",
          color: "#fff",
          transform: "scale(1.1)"
        }, 400);
        
        await new Promise(resolve => setTimeout(resolve, 300));
        
        await animateNode(node, {
          backgroundColor: "#e5e7eb",
          color: "#374151",
          transform: "scale(1)"
        }, 200);
      }
    }

    // Animate the new node (35) appearing
    const newNode = insertNodes[4]; // The new node (35) - corrected index
    if (newNode) {
      // Make sure it starts invisible
      newNode.style.transform = "scale(0)";
      newNode.style.opacity = "0";
      
      await animateNode(newNode, {
        transform: "scale(1.3)",
        opacity: "1",
        backgroundColor: "#22c55e",
        color: "#fff",
        boxShadow: "0 0 25px #22c55e"
      }, 800);
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      await animateNode(newNode, {
        backgroundColor: "#fff",
        color: "#000",
        transform: "scale(1)",
        boxShadow: "none"
      }, 400);
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    // Deletion Animation
    const deleteNodes = deletingRef.current.querySelectorAll('.tree-node');
    const nodeToDelete = deleteNodes[1]; // Node with value 30
    
    // Highlight node to be deleted
    await animateNode(nodeToDelete, {
      backgroundColor: "#dc2626",
      color: "#fff",
      transform: "scale(1.2)",
      boxShadow: "0 0 20px #dc2626"
    }, 600);

    await new Promise(resolve => setTimeout(resolve, 500));

    // Show restructuring (20 moves up to replace 30)
    const replacementNode = deleteNodes[3]; // Node with value 20
    await animateNode(replacementNode, {
      backgroundColor: "#f59e0b",
      color: "#fff",
      transform: "scale(1.1)"
    }, 500);

    await new Promise(resolve => setTimeout(resolve, 500));

    // Remove the deleted node
    await animateNode(nodeToDelete, {
      transform: "scale(0)",
      opacity: "0"
    }, 500);
    
    nodeToDelete.style.visibility = "hidden";

    // Reset replacement node
    await animateNode(replacementNode, {
      backgroundColor: "#fff",
      color: "#000",
      transform: "scale(1)"
    }, 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      runAnimation();
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const TreeNode = ({ value, className = "" }) => (
    <div className={`tree-node w-12 h-12 flex items-center justify-center border-2 border-gray-400 bg-white rounded-full shadow-lg font-bold text-lg transition-all duration-300 ${className}`}>
      {value}
    </div>
  );

  const TreeStructure = ({ showNewNode = false, hideNode = null }) => (
    <div className="flex flex-col items-center space-y-8 relative">
      {/* Level 1: Root */}
      <div className="flex justify-center">
        <TreeNode value="50" />
      </div>
      
      {/* Level 2 */}
      <div className="flex justify-center space-x-32">
        {hideNode !== 30 ? <TreeNode value="30" /> : <div className="w-12 h-12"></div>}
        <TreeNode value="70" />
      </div>
      
      {/* Level 3 */}
      <div className="flex justify-center space-x-16">
        <TreeNode value="20" />
        <TreeNode value="40" />
        <TreeNode value="60" />
        <TreeNode value="80" />
        {showNewNode && <TreeNode value="35" className="opacity-0 scale-0" />}
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-end mb-6">
        <button
          onClick={() => runAnimation()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow transition-colors"
        >
          🔄 Reset Animation
        </button>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
          🌳 Binary Search Tree Operations
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Explore fundamental tree operations with visual animations. Each operation demonstrates 
          how trees maintain their structure and properties.
        </p>
      </div>

      {/* Traversal */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">🔸 In-Order Traversal</h3>
        <p className="text-gray-700 mb-6 max-w-3xl">
          In-order traversal visits nodes in sorted order: <code className="bg-gray-100 px-2 py-1 rounded">Left → Root → Right</code>. 
          For BST, this gives us values in ascending order. Time complexity: <code className="bg-gray-100 px-2 py-1 rounded">O(n)</code>
        </p>
        <div ref={traversalRef} className="bg-gray-50 p-8 rounded-lg">
          <TreeStructure showNewNode={true} />
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Watch nodes highlight in order: 20 → 30 → 35 → 40 → 50 → 60 → 70 → 80
        </p>
      </div>

      {/* Search */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">🔸 Search Operation</h3>
        <p className="text-gray-700 mb-6 max-w-3xl">
          Searching for value <strong>{searchValue}</strong> in BST follows the binary search principle. 
          Compare with current node and go left/right. Average time: <code className="bg-gray-100 px-2 py-1 rounded">O(log n)</code>
        </p>
        <div ref={searchingRef} className="bg-gray-50 p-8 rounded-lg">
          <TreeStructure />
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Search path: 50 (go left) → 30 (go right) → 40 (found!)
        </p>
      </div>

      {/* Insertion */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">🔸 Insertion Operation</h3>
        <p className="text-gray-700 mb-6 max-w-3xl">
          Inserting value <strong>{insertValue}</strong> requires finding the correct position to maintain BST property. 
          Time complexity: <code className="bg-gray-100 px-2 py-1 rounded">O(log n)</code> average case.
        </p>
        <div ref={insertingRef} className="bg-gray-50 p-8 rounded-lg">
          <TreeStructure showNewNode={true} />
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          New node 35 is inserted as part of the tree structure
        </p>
      </div>

      {/* Deletion */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">🔸 Deletion Operation</h3>
        <p className="text-gray-700 mb-6 max-w-3xl">
          Deleting node <strong>{deleteValue}</strong> (has two children) requires finding inorder successor/predecessor. 
          Time complexity: <code className="bg-gray-100 px-2 py-1 rounded">O(log n)</code> average case.
        </p>
        <div ref={deletingRef} className="bg-gray-50 p-8 rounded-lg">
          <TreeStructure />
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Node 30 is deleted and replaced by its inorder predecessor (20)
        </p>
      </div>

      {/* Additional Info */}
      <div className="bg-blue-50 p-6 rounded-lg">
        <h4 className="text-lg font-semibold mb-3 text-blue-800">🔍 Tree Properties</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
          <div>
            <strong>Binary Search Tree:</strong> Left subtree values &lt; root &lt; right subtree values
          </div>
          <div>
            <strong>Height:</strong> Balanced tree has height O(log n), worst case O(n)
          </div>
          <div>
            <strong>Space Complexity:</strong> O(n) for storing n nodes
          </div>
          <div>
            <strong>Applications:</strong> Database indexing, expression parsing, file systems
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeVisualization;