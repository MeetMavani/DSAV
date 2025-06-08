import LinkedListVisualization from '../../components/DataStructureVisualizer/LinkedListVisualization';
import PointerStructure from '../../components/DataStructureVisualizer/PointerStructure';
import MCQSection from '../../components/Shared/MCQSection';
import {linkedListQuestions} from '../../utils/mcq'

const LinkedList = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8"> {/* Container for padding */}
        {/* Intro Section */}
        <section className="mt-8 max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">🔹 What is a Linked List?</h2>
            <p className="text-gray-700 mb-4">
            A <strong>Linked List</strong> is a linear data structure where elements (called nodes) are stored in non-contiguous memory locations.
            Each node contains two parts: the <strong>data</strong> and a reference to the next node in the sequence.
            </p>
            <p className="text-gray-700 mb-4">
            Unlike arrays, linked lists do not have a fixed size, which makes them more efficient for insertions and deletions in the middle of the list. However, they come with their own set of trade-offs, like random access being inefficient.
            </p>

            <h3 className="text-xl font-semibold mb-2">🔹 Visual Representation</h3>
            <div className="flex justify-center items-center gap-2 mt-4">
            <div className="w-24 h-16 flex justify-center items-center bg-blue-200 text-gray-800 font-bold rounded-md shadow-md">
                10
            </div>
            <span className="text-xl">→</span>
            <div className="w-24 h-16 flex justify-center items-center bg-blue-300 text-gray-800 font-bold rounded-md shadow-md">
                20
            </div>
            <span className="text-xl">→</span>
            <div className="w-24 h-16 flex justify-center items-center bg-blue-400 text-gray-800 font-bold rounded-md shadow-md">
                30
            </div>
            <span className="text-xl">→</span>
            <div className="w-24 h-16 flex justify-center items-center bg-gray-400 text-white font-bold rounded-md shadow-md">
                null
            </div>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-2">🔹 Node Structure</h3>
            <div className="flex justify-center items-center gap-4">
            <div className="w-24 h-16 flex flex-col items-center justify-center border-2 border-blue-400 rounded-md shadow-md">
                <span className="text-lg font-bold">data</span>
                <span className="text-sm text-gray-500">value</span>
            </div>
            <span className="text-xl">→</span>
            <div className="w-24 h-16 flex flex-col items-center justify-center border-2 border-blue-400 rounded-md shadow-md">
                <span className="text-lg font-bold">next</span>
                <span className="text-sm text-gray-500">pointer</span>
            </div>
            </div>
            <p className="text-gray-600 mt-2 text-center">
            Each node has a <strong>data</strong> part (stores the value) and a <strong>next</strong> part (stores the reference to the next node).
            </p>
        </section>

        {/* Section for Types of Linked Lists */}
        <section className="mt-8 max-w-7xl mx-auto p-8 bg-gray-50">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Types of Linked Lists</h3>

            {/* Singly Linked List */}
            <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-700 mb-2">Singly Linked List</h4>
                <p className="text-gray-700 mb-4">
                A <strong>Singly Linked List</strong> is a type of linked list where each node points to the next node in the sequence, and the last node points to <strong>null</strong>.
                </p>
                <div className="flex justify-center items-center gap-2">
                <div className="node w-24 h-16 flex justify-center items-center bg-blue-300 text-gray-800 font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                    10
                </div>
                <span className="text-xl">→</span>
                <div className="node w-24 h-16 flex justify-center items-center bg-blue-400 text-gray-800 font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                    20
                </div>
                <span className="text-xl">→</span>
                <div className="node w-24 h-16 flex justify-center items-center bg-blue-500 text-gray-800 font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                    30
                </div>
                <span className="text-xl">→</span>
                <div className="node w-24 h-16 flex justify-center items-center bg-gray-400 text-white font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                    null
                </div>
                </div>
            </div>

            {/* Doubly Linked List */}
            <div className="mb-8">
                <h4 className="text-xl font-semibold text-purple-700 mb-2">Doubly Linked List</h4>
                <p className="text-gray-700 mb-4">
                A <strong>Doubly Linked List</strong> is a type of linked list where each node contains a reference to both the next and previous nodes.
                </p>
                <div className="flex justify-center items-center gap-4">
                <div className="node w-24 h-16 flex justify-center items-center bg-purple-300 text-gray-800 font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                    10
                </div>
                <span className="text-xl">↔</span>
                <div className="node w-24 h-16 flex justify-center items-center bg-purple-400 text-gray-800 font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                    20
                </div>
                <span className="text-xl">↔</span>
                <div className="node w-24 h-16 flex justify-center items-center bg-purple-500 text-gray-800 font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                    30
                </div>
                <span className="text-xl">↔</span>
                <div className="node w-24 h-16 flex justify-center items-center bg-gray-400 text-white font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                    null
                </div>
                </div>
            </div>

            {/* Circular Linked List */}
            <div>
                <h4 className="text-xl font-semibold text-green-700 mb-2">Circular Linked List</h4>
                <p className="text-gray-700 mb-4">
                A <strong>Circular Linked List</strong> is a type of linked list where the last node points back to the first node, forming a circle.
                </p>
                <div className="flex justify-center items-center gap-4">
                <div className="node w-24 h-16 flex justify-center items-center bg-green-300 text-gray-800 font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                    10
                </div>
                <span className="text-xl">→</span>
                <div className="node w-24 h-16 flex justify-center items-center bg-green-400 text-gray-800 font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                    20
                </div>
                <span className="text-xl">→</span>
                <div className="node w-24 h-16 flex justify-center items-center bg-green-500 text-gray-800 font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                    30
                </div>
                <span className="text-xl">→</span>
                <div className="node w-24 h-16 flex justify-center items-center bg-green-600 text-gray-800 font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                    10
                </div>
                </div>
            </div>
        </section>

        <section className="w-full py-10 px-4 md:px-20 flex flex-col items-center">
            {/* Title Section */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">Linked List Operations 🧠</h2>
                <p className="text-lg text-gray-600 mt-2">Visualizing key operations in a Linked List: Traversal, Accessing, Insertion, and Deletion.</p>
            </div>

            {/* Why Linked Lists? Section */}
            <div className="w-[70vw] mb-10 bg-gray-100 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Linked Lists?</h3>
                <p className="text-gray-600">
                Linked Lists provide an efficient way to handle dynamic data. Unlike arrays, linked lists can grow or shrink in size without needing contiguous memory. They allow constant-time insertions and deletions, especially in the middle of the list.
                </p>
            </div>

            {/* Key Operations Section */}
            <div className="w-[70vw] mb-10 bg-gray-100 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Operations</h3>
                <ul className="text-gray-600">
                <li>🔹 **Traversal**: Visiting each node to print or access data.</li>
                <li>🔹 **Accessing**: Fetching a node's data by traversing from the head node.</li>
                <li>🔹 **Insertion**: Adding a new node at the beginning, middle, or end of the list.</li>
                <li>🔹 **Deletion**: Removing a node from the list.</li>
                </ul>
            </div>

            {/* Linked List Visualization Section */}
            <div className="flex justify-center">
                <LinkedListVisualization />
            </div>
        </section>

        {/* Separate Code Section */}
        <section className="mt-8 max-w-7xl mx-auto p-8 bg-gray-50">
            <div className="w-full bg-gray-100 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Sample Code for Insertion Operation</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md">
                <code className="text-sm">
                    {`class Node {
            constructor(value) {
                this.value = value;
                this.next = null;
            }
            }

            class LinkedList {
            constructor() {
                this.head = null;
            }

            insertAtEnd(value) {
                const newNode = new Node(value);
                if (!this.head) {
                this.head = newNode;
                return;
                }
                let current = this.head;
                while (current.next) {
                current = current.next;
                }
                current.next = newNode;
            }
            }

            // Example usage:
            const ll = new LinkedList();
            ll.insertAtEnd(10);
            ll.insertAtEnd(20);
            ll.insertAtEnd(30);
            `}
                </code>
                </pre>
            </div>
        </section>
        
        {/* Pointer Structure Explanation */}

        <section className="mt-10 px-4 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2 text-center sm:text-left">
                🔹 How Linked Lists Use Pointers
            </h3>
            
            <p className="text-gray-600 mb-4 text-sm sm:text-base text-center sm:text-left">
                In a linked list, each node contains two parts: <code>data</code> and a <code>pointer</code> (or reference) to the next node.
                Unlike arrays, which use indices, linked lists rely on pointers to navigate.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-6 items-center justify-center mt-6">
                <div className="flex items-center space-x-4">
                <div className="w-24 h-20 bg-white border border-gray-400 rounded shadow-md flex flex-col items-center justify-center">
                    <span className="font-bold text-lg">10</span>
                    <span className="text-xs text-gray-500">Data</span>
                </div>
                <div className="text-gray-700 font-bold text-2xl">➡️</div>
                <div className="text-sm text-gray-500">Pointer (Next)</div>
                </div>
                <div className="text-gray-400 text-2xl">...</div>
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center">
                This structure enables dynamic memory allocation and efficient insertions/removals.
            </p>
            <PointerStructure />
        </section>
        
        {/* Node Memory Mapping Section */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2">🔹 Node Memory Mapping</h3>
            <p className="text-gray-700 mb-6">
                Linked list nodes are dynamically allocated in memory and may not be stored in a contiguous block, unlike arrays.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center text-center">
                {[
                { value: 10, address: "0xA1" },
                { value: 20, address: "0xB7" },
                { value: 30, address: "0xD3" },
                ].map((node, index) => (
                <div
                    key={index}
                    className="border border-gray-300 rounded-md p-4 w-40 shadow-md bg-white"
                >
                    <div className="text-lg font-bold mb-1">{node.value}</div>
                    <div className="text-xs text-gray-500">@ {node.address}</div>
                    {index < 2 && (
                    <div className="mt-2 text-2xl text-gray-500">⬇</div>
                    )}
                </div>
                ))}
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center">
                Each node stores its own data and a pointer to the next node’s memory address.
            </p>
        </section>


        {/* Time & Space Complexity Section */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2">🔹 Time & Space Complexity</h3>
            <p className="text-gray-700 mb-4">
                Here's how different operations perform on a singly linked list:
            </p>

            <div className="overflow-x-auto">
                <table className="min-w-full text-left border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                    <th className="px-4 py-2 border">Operation</th>
                    <th className="px-4 py-2 border">Time Complexity</th>
                    <th className="px-4 py-2 border">Space Complexity</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {[
                    ["Access (at index)", "O(n)", "O(1)"],
                    ["Insert (at head)", "O(1)", "O(1)"],
                    ["Insert (at tail/index)", "O(n)", "O(1)"],
                    ["Delete (head)", "O(1)", "O(1)"],
                    ["Delete (tail/index)", "O(n)", "O(1)"],
                    ].map(([op, time, space], index) => (
                    <tr key={index} className="border-t">
                        <td className="px-4 py-2 border">{op}</td>
                        <td className="px-4 py-2 border">{time}</td>
                        <td className="px-4 py-2 border">{space}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </section>

        {/* Use Cases Section */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2">🔹 Use Cases of Linked Lists</h3>
            <p className="text-gray-700 mb-4">
                Linked Lists are ideal when dynamic memory allocation and frequent insertions/deletions are involved:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Implementing stacks and queues</li>
                <li>Undo/redo functionality in editors</li>
                <li>Browser history navigation</li>
                <li>Music or slideshow playlists</li>
                <li>Efficient memory management in OS</li>
            </ul>
        </section>
        
        {/* MCQ Section */}
        <MCQSection title="🧠 Linked List Exercises" questions={linkedListQuestions} />
    </div>
  );
};

export default LinkedList;

