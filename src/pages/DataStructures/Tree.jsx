import MCQSection from '../../components/Shared/MCQSection';
import {treeQuestions} from '../../utils/mcq'
import TreeVisualization from '../../components/DataStructureVisualizer/TreeVisualization';

const Tree = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Intro Section */}
        <section className="mt-8 max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">🌳 What is a Tree?</h2>
            <p className="text-gray-700 mb-4">
            A <strong>Tree</strong> is a hierarchical data structure consisting of nodes connected by edges. It's a non-linear data structure that resembles an upside-down tree, with a root at the top and leaves at the bottom.
            Each node can have zero or more child nodes, and every node (except the root) has exactly one parent.
            </p>
            <p className="text-gray-700 mb-4">
            Trees are fundamental in computer science and are used in file systems, databases, decision-making algorithms, and many other applications where hierarchical relationships need to be represented.
            </p>

            <h3 className="text-xl font-semibold mb-2">🌳 Visual Representation</h3>
            <div className="flex flex-col items-center mt-6 space-y-4">
              {/* Root */}
              <div className="w-16 h-16 flex justify-center items-center bg-green-400 text-white font-bold rounded-full shadow-lg">
                A
              </div>

              {/* Connecting lines from root to B, C, D */}
              <div className="relative">
                <svg width="300" height="40" className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <line x1="150" y1="0" x2="75" y2="40" stroke="#6B7280" strokeWidth="2"/>
                  <line x1="150" y1="0" x2="225" y2="40" stroke="#6B7280" strokeWidth="2"/>
                </svg>
              </div>

              {/* Level 1: B, C, D */}
              <div className="flex items-center space-x-16 mt-5">
                {/* B with children */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex justify-center items-center bg-blue-400 text-white font-bold rounded-full shadow-lg">
                    B
                  </div>

                  {/* SVG lines for E and F */}
                  <div className="relative h-12 mt-2">
                    <svg width="120" height="40" className="absolute left-1/2 transform -translate-x-1/2">
                      <line x1="60" y1="0" x2="30" y2="40" stroke="#6B7280" strokeWidth="2"/>
                      <line x1="60" y1="0" x2="90" y2="40" stroke="#6B7280" strokeWidth="2"/>
                    </svg>
                  </div>

                  {/* E and F */}
                  <div className="flex space-x-8">
                    <div className="w-12 h-12 flex justify-center items-center bg-purple-400 text-white font-bold rounded-full shadow-md">
                      E
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center bg-purple-400 text-white font-bold rounded-full shadow-md">
                      F
                    </div>
                  </div>
                </div>

                {/* D with children */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex justify-center items-center bg-blue-400 text-white font-bold rounded-full shadow-lg">
                    D
                  </div>

                  {/* SVG lines for G and H */}
                  <div className="relative h-12 mt-2">
                    <svg width="120" height="40" className="absolute left-1/2 transform -translate-x-1/2">
                      <line x1="60" y1="0" x2="30" y2="40" stroke="#6B7280" strokeWidth="2"/>
                      <line x1="60" y1="0" x2="90" y2="40" stroke="#6B7280" strokeWidth="2"/>
                    </svg>
                  </div>

                  {/* G and H */}
                  <div className="flex space-x-8 ">
                    <div className="w-12 h-12 flex justify-center items-center bg-purple-400 text-white font-bold rounded-full shadow-md">
                      G
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center bg-purple-400 text-white font-bold rounded-full shadow-md">
                      H
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <h3 className="text-xl font-semibold mt-8 mb-2">🌳 Tree Terminology</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-green-700">Root</h4>
                    <p className="text-gray-600 text-sm">The topmost node with no parent (Node A)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-blue-700">Parent</h4>
                    <p className="text-gray-600 text-sm">Node with one or more children (A is parent of B, C, D)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-purple-700">Child</h4>
                    <p className="text-gray-600 text-sm">Node connected to its parent (B, C, D are children of A)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-orange-700">Leaf</h4>
                    <p className="text-gray-600 text-sm">Node with no children (E, F, G are leaves)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-red-700">Height</h4>
                    <p className="text-gray-600 text-sm">Maximum depth from root to any leaf</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-indigo-700">Depth</h4>
                    <p className="text-gray-600 text-sm">Distance from root to a specific node</p>
                </div>
            </div>
        </section>

        {/* Section for Types of Trees */}
        <section className="mt-12 max-w-7xl mx-auto p-8 bg-gray-50">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Types of Trees</h3>

            {/* Binary Tree */}
            <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-700 mb-2">Binary Tree</h4>
                <p className="text-gray-700 mb-4">
                A <strong>Binary Tree</strong> is a tree where each node has at most two children, referred to as left child and right child.
                </p>
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-14 h-14 flex justify-center items-center bg-blue-400 text-white font-bold rounded-full shadow-lg">
                        1
                    </div>
                    <div className="relative">
                      <svg width="300" height="20" className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <line x1="150" y1="0" x2="75" y2="40" stroke="#6B7280" strokeWidth="2"/>
                        <line x1="150" y1="0" x2="225" y2="40" stroke="#6B7280" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="flex items-center space-x-12">
                        <div className="flex flex-col items-center">
                            
                            <div className="w-12 h-12 flex justify-center items-center bg-blue-300 text-white font-bold rounded-full shadow-md">
                                2
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            
                            <div className="w-12 h-12 flex justify-center items-center bg-blue-300 text-white font-bold rounded-full shadow-md">
                                3
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-8">
                        <div className="flex space-x-4">
                            <div className="w-10 h-10 flex justify-center items-center bg-blue-200 text-gray-800 font-bold rounded-full shadow-sm">
                                4
                            </div>
                            <div className="w-10 h-10 flex justify-center items-center bg-blue-200 text-gray-800 font-bold rounded-full shadow-sm">
                                5
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="w-10 h-10 flex justify-center items-center bg-blue-200 text-gray-800 font-bold rounded-full shadow-sm">
                                6
                            </div>
                            <div className="w-10 h-10 flex justify-center items-center bg-blue-200 text-gray-800 font-bold rounded-full shadow-sm">
                                7
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Binary Search Tree */}
            <div className="mb-8">
                <h4 className="text-xl font-semibold text-purple-700 mb-2">Binary Search Tree (BST)</h4>
                <p className="text-gray-700 mb-4">
                A <strong>Binary Search Tree</strong> is a binary tree where the left subtree contains values less than the root, and the right subtree contains values greater than the root.
                </p>
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-14 h-14 flex justify-center items-center bg-purple-400 text-white font-bold rounded-full shadow-lg">
                        8
                    </div>
                     <div className="relative">
                      <svg width="300" height="20" className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <line x1="150" y1="0" x2="75" y2="40" stroke="#6B7280" strokeWidth="2"/>
                        <line x1="150" y1="0" x2="225" y2="40" stroke="#6B7280" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="flex items-center space-x-12">
                        <div className="flex flex-col items-center">
                            
                            <div className="w-12 h-12 flex justify-center items-center bg-purple-300 text-white font-bold rounded-full shadow-md">
                                3
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            
                            <div className="w-12 h-12 flex justify-center items-center bg-purple-300 text-white font-bold rounded-full shadow-md">
                                10
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-8">
                        <div className="flex space-x-4">
                            <div className="w-10 h-10 flex justify-center items-center bg-purple-200 text-gray-800 font-bold rounded-full shadow-sm">
                                1
                            </div>
                            <div className="w-10 h-10 flex justify-center items-center bg-purple-200 text-gray-800 font-bold rounded-full shadow-sm">
                                6
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="w-10 h-10 flex justify-center items-center bg-purple-200 text-gray-800 font-bold rounded-full shadow-sm">
                                9
                            </div>
                            <div className="w-10 h-10 flex justify-center items-center bg-purple-200 text-gray-800 font-bold rounded-full shadow-sm">
                                14
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-sm text-gray-600 mt-2 text-center">
                    Left subtree ≤ Root ≤ Right subtree
                </p>
            </div>

            {/* AVL Tree */}
            <div className="mb-8">
                <h4 className="text-xl font-semibold text-green-700 mb-2">AVL Tree (Self-Balancing)</h4>
                <p className="text-gray-700 mb-4">
                An <strong>AVL Tree</strong> is a self-balancing binary search tree where the height difference between left and right subtrees is at most 1.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-800 text-sm">
                        <strong>Balance Factor:</strong> Height(Left Subtree) - Height(Right Subtree) ∈ {-1, 0, 1}
                    </p>
                </div>
            </div>

            {/* N-ary Tree */}
            <div>
                <h4 className="text-xl font-semibold text-orange-700 mb-2">N-ary Tree</h4>
                <p className="text-gray-700 mb-4">
                An <strong>N-ary Tree</strong> is a tree where each node can have at most N children. Common examples include ternary trees (3 children) and quad trees (4 children).
                </p>
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-14 h-14 flex justify-center items-center bg-orange-400 text-white font-bold rounded-full shadow-lg">
                        A
                    </div>
                    <div className="flex items-center space-x-6">
                        {['B', 'C', 'D', 'E'].map((letter, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="h-6 w-0.5 bg-gray-400"></div>
                                <div className="w-10 h-10 flex justify-center items-center bg-orange-300 text-white font-bold rounded-full shadow-md">
                                    {letter}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Tree Operations Section */}
        <section className="w-full py-10 px-4 md:px-20 flex flex-col items-center">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">Tree Operations 🧠</h2>
                <p className="text-lg text-gray-600 mt-2">Understanding key operations: Traversal, Insertion, Deletion, and Search.</p>
            </div>

            {/* Why Trees? Section */}
            <div className="w-[70vw] mb-10 bg-gray-100 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Trees?</h3>
                <p className="text-gray-600">
                Trees provide efficient hierarchical data organization with logarithmic time complexity for search, insertion, and deletion operations in balanced trees. They're ideal for representing hierarchical relationships and enable efficient searching and sorting algorithms.
                </p>
            </div>

            {/* Key Operations Section */}
            <div className="w-[70vw] mb-10 bg-gray-100 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Operations</h3>
                <ul className="text-gray-600 space-y-2">
                    <li>🌳 <strong>Traversal</strong>: Visiting nodes in specific order (Inorder, Preorder, Postorder, Level-order)</li>
                    <li>🔍 <strong>Search</strong>: Finding a specific value in the tree</li>
                    <li>➕ <strong>Insertion</strong>: Adding a new node while maintaining tree properties</li>
                    <li>🗑️ <strong>Deletion</strong>: Removing a node and restructuring the tree</li>
                </ul>
            </div>

            {/* Tree Visualization will be added here later */}
            <TreeVisualization/>
        </section>

        {/* Tree Traversals Section */}
        <section className="mt-8 max-w-7xl mx-auto p-8 bg-gray-50">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Tree Traversal Methods</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inorder Traversal */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-blue-700 mb-2">Inorder Traversal</h4>
                    <p className="text-gray-600 mb-3">Left → Root → Right</p>
                    <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                        Result: 4, 2, 5, 1, 6, 3, 7
                    </div>
                    <p className="text-sm text-gray-500 mt-2">For BST: gives sorted order</p>
                </div>

                {/* Preorder Traversal */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-green-700 mb-2">Preorder Traversal</h4>
                    <p className="text-gray-600 mb-3">Root → Left → Right</p>
                    <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                        Result: 1, 2, 4, 5, 3, 6, 7
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Useful for copying tree structure</p>
                </div>

                {/* Postorder Traversal */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-purple-700 mb-2">Postorder Traversal</h4>
                    <p className="text-gray-600 mb-3">Left → Right → Root</p>
                    <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                        Result: 4, 5, 2, 6, 7, 3, 1
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Useful for deleting trees</p>
                </div>

                {/* Level-order Traversal */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold text-orange-700 mb-2">Level-order Traversal</h4>
                    <p className="text-gray-600 mb-3">Level by Level (BFS)</p>
                    <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                        Result: 1, 2, 3, 4, 5, 6, 7
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Uses queue data structure</p>
                </div>
            </div>
        </section>

        {/* Sample Code Section */}
        <section className="mt-8 max-w-7xl mx-auto p-8 bg-gray-50">
            <div className="w-full bg-gray-100 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Sample Code for Binary Search Tree</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                    <code className="text-sm">
{`class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    break;
                } else {
                    current = current.left;
                }
            } else {
                if (!current.right) {
                    current.right = newNode;
                    break;
                } else {
                    current = current.right;
                }
            }
        }
    }

    inorderTraversal(node = this.root, result = []) {
        if (node) {
            this.inorderTraversal(node.left, result);
            result.push(node.value);
            this.inorderTraversal(node.right, result);
        }
        return result;
    }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
console.log(bst.inorderTraversal()); // [1, 3, 6, 8, 10]`}
                    </code>
                </pre>
            </div>
        </section>

        {/* Node Structure Explanation */}
        <section className="mt-10 px-4 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2 text-center sm:text-left">
                🌳 How Trees Use Pointers
            </h3>
            
            <p className="text-gray-600 mb-4 text-sm sm:text-base text-center sm:text-left">
                In a tree, each node contains data and references (pointers) to its child nodes.
                Binary trees use <code>left</code> and <code>right</code> pointers, while n-ary trees may use arrays or lists to store multiple child references.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-6 items-center justify-center mt-6">
                <div className="flex flex-col items-center space-y-2">
                    <div className="w-32 h-24 bg-white border border-gray-400 rounded shadow-md flex flex-col items-center justify-center">
                        <span className="font-bold text-lg">10</span>
                        <span className="text-xs text-gray-500">Data</span>
                    </div>
                    <div className="flex space-x-4">
                        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Left</div>
                        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Right</div>
                    </div>
                </div>
                <div className="text-gray-700 font-bold text-2xl">➡️</div>
                <div className="text-sm text-gray-500">Child Pointers</div>
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center">
                This structure enables hierarchical data organization and efficient tree operations.
            </p>
        </section>

        {/* Time & Space Complexity Section */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2">🌳 Time & Space Complexity</h3>
            <p className="text-gray-700 mb-4">
                Performance varies based on tree type and balance. Here's a comparison:
            </p>

            <div className="overflow-x-auto">
                <table className="min-w-full text-left border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border">Tree Type</th>
                            <th className="px-4 py-2 border">Search</th>
                            <th className="px-4 py-2 border">Insert</th>
                            <th className="px-4 py-2 border">Delete</th>
                            <th className="px-4 py-2 border">Space</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {[
                            ["Binary Tree", "O(n)", "O(n)", "O(n)", "O(n)"],
                            ["Binary Search Tree (Balanced)", "O(log n)", "O(log n)", "O(log n)", "O(n)"],
                            ["Binary Search Tree (Worst)", "O(n)", "O(n)", "O(n)", "O(n)"],
                            ["AVL Tree", "O(log n)", "O(log n)", "O(log n)", "O(n)"],
                            ["Red-Black Tree", "O(log n)", "O(log n)", "O(log n)", "O(n)"],
                        ].map(([type, search, insert, del, space], index) => (
                            <tr key={index} className="border-t">
                                <td className="px-4 py-2 border font-medium">{type}</td>
                                <td className="px-4 py-2 border">{search}</td>
                                <td className="px-4 py-2 border">{insert}</td>
                                <td className="px-4 py-2 border">{del}</td>
                                <td className="px-4 py-2 border">{space}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

        {/* Use Cases Section */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2">🌳 Use Cases of Trees</h3>
            <p className="text-gray-700 mb-4">
                Trees are versatile data structures used in various applications:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">File Systems</h4>
                    <p className="text-gray-700 text-sm">Directory structures, file hierarchies</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">Databases</h4>
                    <p className="text-gray-700 text-sm">B-trees, indexing, query optimization</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">Compilers</h4>
                    <p className="text-gray-700 text-sm">Syntax trees, expression parsing</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-700 mb-2">Decision Making</h4>
                    <p className="text-gray-700 text-sm">Decision trees, game theory</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 mb-2">Network Routing</h4>
                    <p className="text-gray-700 text-sm">Shortest path algorithms, spanning trees</p>                    
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-700 mb-2">Machine Learning</h4>
                    <p className="text-gray-700 text-sm">Random forests, decision trees</p>
                </div>
            </div>
        </section>

        {/* Advantages and Disadvantages */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-6">🌳 Advantages vs Disadvantages</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h4 className="text-lg font-semibold text-green-700 mb-4">✅ Advantages</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li>• Efficient searching in balanced trees (O(log n))</li>
                        <li>• Natural hierarchical data representation</li>
                        <li>• Dynamic size - grows and shrinks as needed</li>
                        <li>• Efficient insertion and deletion</li>
                        <li>• Supports various traversal methods</li>
                        <li>• No memory waste (unlike arrays)</li>
                    </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <h4 className="text-lg font-semibold text-red-700 mb-4">❌ Disadvantages</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li>• No random access to elements</li>
                        <li>• Extra memory for storing pointers</li>
                        <li>• Can become unbalanced (worst case O(n))</li>
                        <li>• More complex implementation</li>
                        <li>• No cache locality compared to arrays</li>
                        <li>• Requires balancing for optimal performance</li>
                    </ul>
                </div>
            </div>
        </section>
        
        {/* MCQ Section */}
        <MCQSection title="🧠 Tree Data Structure Exercises" questions={treeQuestions} />
    </div>
  );
};

export default Tree;