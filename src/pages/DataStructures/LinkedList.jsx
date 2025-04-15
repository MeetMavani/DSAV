import LinkedListVisualization from './LinkedListVisualization';


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



    </div>
  );
};

export default LinkedList;
