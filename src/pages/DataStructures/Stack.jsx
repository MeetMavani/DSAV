import StackVisualization from '../../components/DataStructureVisualizer/StackVisualization';
import MCQSection from '../../components/Shared/MCQSection';
import {stackQuestions} from '../../utils/mcq'

const Stack = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8"> {/* Container for padding */}
        {/* Intro Section */}
        <section className="mt-8 max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">🔹 What is a Stack?</h2>
            <p className="text-gray-700 mb-4">
            A <strong>Stack</strong> is a linear data structure that follows the <strong>Last In, First Out (LIFO)</strong> principle.
            Elements are added and removed from the same end, called the <strong>top</strong> of the stack.
            </p>
            <p className="text-gray-700 mb-4">
            Think of a stack of plates - you can only add or remove plates from the top. Similarly, in a stack data structure,
            the last element inserted is the first one to be removed.
            </p>

            <h3 className="text-xl font-semibold mb-2">🔹 Visual Representation</h3>
            <div className="flex flex-col items-center gap-2 mt-4">
                <div className="text-sm text-gray-500 mb-2">← Top of Stack</div>
                <div className="w-32 h-12 flex justify-center items-center bg-red-300 text-gray-800 font-bold rounded-md shadow-md">
                    30
                </div>
                <div className="w-32 h-12 flex justify-center items-center bg-red-400 text-gray-800 font-bold rounded-md shadow-md">
                    20
                </div>
                <div className="w-32 h-12 flex justify-center items-center bg-red-500 text-gray-800 font-bold rounded-md shadow-md">
                    10
                </div>
                <div className="text-sm text-gray-500 mt-2">← Bottom of Stack</div>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-2">🔹 Stack Structure</h3>
            <div className="flex justify-center items-center gap-8">
                <div className="flex flex-col items-center">
                    <div className="w-32 h-16 flex flex-col items-center justify-center border-2 border-red-400 rounded-md shadow-md">
                        <span className="text-lg font-bold">TOP</span>
                        <span className="text-sm text-gray-500">pointer</span>
                    </div>
                    <div className="text-2xl mt-2">↓</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-32 h-12 flex justify-center items-center bg-red-300 text-gray-800 font-bold rounded-md shadow-md">
                        Element 3
                    </div>
                    <div className="w-32 h-12 flex justify-center items-center bg-red-400 text-gray-800 font-bold rounded-md shadow-md">
                        Element 2
                    </div>
                    <div className="w-32 h-12 flex justify-center items-center bg-red-500 text-gray-800 font-bold rounded-md shadow-md">
                        Element 1
                    </div>
                </div>
            </div>
            <p className="text-gray-600 mt-4 text-center">
            The <strong>TOP</strong> pointer always points to the last inserted element (top of the stack).
            </p>
        </section>

        {/* Section for Types of Stack Implementation */}
        <section className="mt-8 max-w-7xl mx-auto p-8 bg-gray-50">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Stack Implementation Types</h3>

            {/* Array-based Stack */}
            <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-700 mb-2">Array-based Stack</h4>
                <p className="text-gray-700 mb-4">
                An <strong>Array-based Stack</strong> uses a fixed-size array to store elements. A <strong>top</strong> variable keeps track of the index of the topmost element.
                </p>
                <div className="flex justify-center items-center gap-2">
                    <div className="flex flex-col items-center">
                        <div className="text-sm text-gray-500 mb-1">Index:</div>
                        <div className="flex gap-1">
                            <div className="w-12 h-8 flex justify-center items-center bg-gray-200 text-xs">0</div>
                            <div className="w-12 h-8 flex justify-center items-center bg-gray-200 text-xs">1</div>
                            <div className="w-12 h-8 flex justify-center items-center bg-gray-200 text-xs">2</div>
                            <div className="w-12 h-8 flex justify-center items-center bg-gray-200 text-xs">3</div>
                            <div className="w-12 h-8 flex justify-center items-center bg-gray-200 text-xs">4</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2 mt-2">
                    <div className="flex gap-1">
                        <div className="w-12 h-12 flex justify-center items-center bg-blue-300 text-gray-800 font-bold border">10</div>
                        <div className="w-12 h-12 flex justify-center items-center bg-blue-400 text-gray-800 font-bold border">20</div>
                        <div className="w-12 h-12 flex justify-center items-center bg-blue-500 text-gray-800 font-bold border">30</div>
                        <div className="w-12 h-12 flex justify-center items-center bg-gray-200 text-gray-400 border">-</div>
                        <div className="w-12 h-12 flex justify-center items-center bg-gray-200 text-gray-400 border">-</div>
                    </div>
                </div>
                <div className="flex justify-center mt-2">
                    <div className="text-sm text-red-600 font-semibold">top = 2</div>
                </div>
            </div>

            {/* Linked List-based Stack */}
            <div className="mb-8">
                <h4 className="text-xl font-semibold text-purple-700 mb-2">Linked List-based Stack</h4>
                <p className="text-gray-700 mb-4">
                A <strong>Linked List-based Stack</strong> uses a linked list where the head of the list acts as the top of the stack. No size limitation.
                </p>
                <div className="flex justify-center items-center gap-4">
                    <div className="flex flex-col items-center">
                        <div className="text-sm text-gray-500 mb-1">TOP</div>
                        <div className="text-2xl">↓</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-16 h-12 flex justify-center items-center bg-purple-300 text-gray-800 font-bold rounded-md shadow-md">
                            30
                        </div>
                        <span className="text-xl">→</span>
                        <div className="w-16 h-12 flex justify-center items-center bg-purple-400 text-gray-800 font-bold rounded-md shadow-md">
                            20
                        </div>
                        <span className="text-xl">→</span>
                        <div className="w-16 h-12 flex justify-center items-center bg-purple-500 text-gray-800 font-bold rounded-md shadow-md">
                            10
                        </div>
                        <span className="text-xl">→</span>
                        <div className="w-16 h-12 flex justify-center items-center bg-gray-400 text-white font-bold rounded-md shadow-md">
                            null
                        </div>
                    </div>
                </div>
            </div>

            {/* Dynamic Array Stack */}
            <div>
                <h4 className="text-xl font-semibold text-green-700 mb-2">Dynamic Array Stack</h4>
                <p className="text-gray-700 mb-4">
                A <strong>Dynamic Array Stack</strong> automatically resizes when the stack becomes full, combining the benefits of arrays with dynamic sizing.
                </p>
                <div className="flex justify-center items-center gap-4">
                    <div className="flex flex-col items-center">
                        <div className="text-sm text-gray-500 mb-1">Capacity: 8</div>
                        <div className="flex gap-1">
                            <div className="w-10 h-10 flex justify-center items-center bg-green-300 text-gray-800 font-bold border text-xs">10</div>
                            <div className="w-10 h-10 flex justify-center items-center bg-green-400 text-gray-800 font-bold border text-xs">20</div>
                            <div className="w-10 h-10 flex justify-center items-center bg-green-500 text-gray-800 font-bold border text-xs">30</div>
                            <div className="w-10 h-10 flex justify-center items-center bg-green-600 text-gray-800 font-bold border text-xs">40</div>
                            <div className="w-10 h-10 flex justify-center items-center bg-gray-200 text-gray-400 border text-xs">-</div>
                            <div className="w-10 h-10 flex justify-center items-center bg-gray-200 text-gray-400 border text-xs">-</div>
                            <div className="w-10 h-10 flex justify-center items-center bg-gray-200 text-gray-400 border text-xs">-</div>
                            <div className="w-10 h-10 flex justify-center items-center bg-gray-200 text-gray-400 border text-xs">-</div>
                        </div>
                        <div className="text-sm text-red-600 font-semibold mt-1">top = 3</div>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full py-10 px-4 md:px-20 flex flex-col items-center">
            {/* Title Section */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">Stack Operations 🥞</h2>
                <p className="text-lg text-gray-600 mt-2">Visualizing key operations in a Stack: Push, Pop, Peek, and isEmpty.</p>
            </div>

            {/* Why Stacks? Section */}
            <div className="w-[70vw] mb-10 bg-gray-100 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Stacks?</h3>
                <p className="text-gray-600">
                Stacks are fundamental in computer science due to their LIFO nature. They're used in function calls, expression evaluation, 
                undo operations, and many algorithms. The simplicity of having only one access point makes them efficient and predictable.
                </p>
            </div>

            {/* Key Operations Section */}
            <div className="w-[70vw] mb-10 bg-gray-100 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Operations</h3>
                <ul className="text-gray-600">
                <li>🔹 **Push**: Adding an element to the top of the stack.</li>
                <li>🔹 **Pop**: Removing and returning the top element from the stack.</li>
                <li>🔹 **Peek/Top**: Viewing the top element without removing it.</li>
                <li>🔹 **isEmpty**: Checking if the stack is empty.</li>
                <li>🔹 **Size**: Getting the number of elements in the stack.</li>
                </ul>
            </div>

            {/* Stack Visualization Section */}
            <div className="flex justify-center">
                <StackVisualization />
            </div>
        </section>

        {/* Separate Code Section */}
        <section className="mt-8 max-w-7xl mx-auto p-8 bg-gray-50">
            <div className="w-full bg-gray-100 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Sample Code for Stack Implementation</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md">
                <code className="text-sm">
                    {`class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    // Push operation - O(1)
    push(element) {
        this.top++;
        this.items[this.top] = element;
        console.log(\`Pushed \${element} to stack\`);
    }

    // Pop operation - O(1)
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        const poppedElement = this.items[this.top];
        this.top--;
        console.log(\`Popped \${poppedElement} from stack\`);
        return poppedElement;
    }

    // Peek operation - O(1)
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        return this.items[this.top];
    }

    // Check if stack is empty - O(1)
    isEmpty() {
        return this.top === -1;
    }

    // Get stack size - O(1)
    size() {
        return this.top + 1;
    }

    // Display stack
    display() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return;
        }
        console.log("Stack:", this.items.slice(0, this.top + 1));
    }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Top element:", stack.peek()); // 30
stack.pop(); // Removes 30
stack.display(); // [10, 20]
                    `}
                </code>
                </pre>
            </div>
        </section>
        
        {/* Stack Structure Explanation */}
        <section className="mt-10 px-4 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2 text-center sm:text-left">
                🔹 How Stacks Work in Memory
            </h3>
            
            <p className="text-gray-600 mb-4 text-sm sm:text-base text-center sm:text-left">
                Stacks maintain a <code>top</code> pointer that always points to the most recently added element.
                All operations happen at this single access point, ensuring LIFO behavior.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-6 items-center justify-center mt-6">
                <div className="flex flex-col items-center space-y-2">
                    <div className="text-sm text-gray-500">Stack Operations</div>
                    <div className="flex items-center space-x-4">
                        <div className="px-4 py-2 bg-green-200 text-green-800 font-bold rounded shadow-md">
                            PUSH ↑
                        </div>
                        <div className="px-4 py-2 bg-red-200 text-red-800 font-bold rounded shadow-md">
                            POP ↓
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center">
                Push adds elements to the top, Pop removes from the top - maintaining LIFO order.
            </p>
            {/* <StackStructure /> */}
        </section>
        
        {/* Stack Memory Layout Section */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2">🔹 Stack Memory Layout</h3>
            <p className="text-gray-700 mb-6">
                In array-based implementation, stack elements are stored in contiguous memory locations with a top pointer tracking the current position.
            </p>

            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="text-sm text-gray-500 w-16">Address:</div>
                    {["0x100", "0x104", "0x108", "0x10C", "0x110"].map((addr, index) => (
                        <div key={index} className="w-16 text-xs text-center text-gray-500">
                            {addr}
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-sm text-gray-500 w-16">Stack:</div>
                    {[
                        { value: "10", filled: true },
                        { value: "20", filled: true },
                        { value: "30", filled: true },
                        { value: "-", filled: false },
                        { value: "-", filled: false }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`w-16 h-12 flex justify-center items-center border rounded-md shadow-sm ${
                                item.filled 
                                    ? 'bg-orange-300 text-gray-800 font-bold' 
                                    : 'bg-gray-100 text-gray-400'
                            }`}
                        >
                            {item.value}
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-sm text-gray-500 w-16">Index:</div>
                    {[0, 1, 2, 3, 4].map((idx, index) => (
                        <div key={index} className="w-16 text-xs text-center text-gray-500">
                            {idx}
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <div className="text-sm font-semibold text-red-600">top = 2</div>
                    <div className="text-sm text-gray-500 ml-4">↑ Points to index of top element</div>
                </div>
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center">
                The top pointer keeps track of the last inserted element's index for efficient access.
            </p>
        </section>

        {/* Time & Space Complexity Section */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2">🔹 Time & Space Complexity</h3>
            <p className="text-gray-700 mb-4">
                Stack operations are highly efficient with constant time complexity:
            </p>

            <div className="overflow-x-auto">
                <table className="min-w-full text-left border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                    <th className="px-4 py-2 border">Operation</th>
                    <th className="px-4 py-2 border">Time Complexity</th>
                    <th className="px-4 py-2 border">Space Complexity</th>
                    <th className="px-4 py-2 border">Description</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {[
                    ["Push", "O(1)", "O(1)", "Add element to top"],
                    ["Pop", "O(1)", "O(1)", "Remove top element"],
                    ["Peek/Top", "O(1)", "O(1)", "View top element"],
                    ["isEmpty", "O(1)", "O(1)", "Check if stack is empty"],
                    ["Size", "O(1)", "O(1)", "Get number of elements"],
                    ].map(([op, time, space, desc], index) => (
                    <tr key={index} className="border-t">
                        <td className="px-4 py-2 border font-semibold">{op}</td>
                        <td className="px-4 py-2 border text-green-600 font-mono">{time}</td>
                        <td className="px-4 py-2 border text-blue-600 font-mono">{space}</td>
                        <td className="px-4 py-2 border text-gray-600">{desc}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
                <h4 className="font-semibold text-blue-800 mb-2">Why O(1) for all operations?</h4>
                <p className="text-blue-700 text-sm">
                    Since stacks only allow access at one end (the top), we always know exactly where to add or remove elements. 
                    No searching or shifting is required, making all operations constant time.
                </p>
            </div>
        </section>

        {/* Use Cases Section */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2">🔹 Real-world Applications of Stacks</h3>
            <p className="text-gray-700 mb-4">
                Stacks are everywhere in computing due to their LIFO nature. Here are some common applications:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-700 mb-2">🔧 System Level</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Function call management (Call Stack)</li>
                        <li>• Memory allocation in programs</li>
                        <li>• Interrupt handling in OS</li>
                        <li>• Recursion implementation</li>
                    </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-700 mb-2">💻 Applications</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Undo/Redo functionality</li>
                        <li>• Browser back button</li>
                        <li>• Expression evaluation</li>
                        <li>• Parentheses matching</li>
                    </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-700 mb-2">🧮 Algorithms</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Depth-First Search (DFS)</li>
                        <li>• Backtracking algorithms</li>
                        <li>• Infix to Postfix conversion</li>
                        <li>• Tower of Hanoi</li>
                    </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-700 mb-2">🌐 Web Development</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• JavaScript execution context</li>
                        <li>• React component lifecycle</li>
                        <li>• Error handling (try-catch)</li>
                        <li>• Navigation history</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Comparison with Other Data Structures */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2">🔹 Stack vs Other Data Structures</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full text-left border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                    <th className="px-4 py-2 border">Feature</th>
                    <th className="px-4 py-2 border">Stack</th>
                    <th className="px-4 py-2 border">Queue</th>
                    <th className="px-4 py-2 border">Array</th>
                    <th className="px-4 py-2 border">Linked List</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {[
                    ["Access Pattern", "LIFO", "FIFO", "Random", "Sequential"],
                    ["Insertion", "Top only", "Rear only", "Any position", "Any position"],
                    ["Deletion", "Top only", "Front only", "Any position", "Any position"],
                    ["Use Case", "Function calls", "Process scheduling", "Data storage", "Dynamic lists"],
                    ].map(([feature, stack, queue, array, ll], index) => (
                    <tr key={index} className="border-t">
                        <td className="px-4 py-2 border font-semibold">{feature}</td>
                        <td className="px-4 py-2 border bg-red-50">{stack}</td>
                        <td className="px-4 py-2 border">{queue}</td>
                        <td className="px-4 py-2 border">{array}</td>
                        <td className="px-4 py-2 border">{ll}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </section>
        
        {/* MCQ Section */}
        <MCQSection title="🧠 Stack Exercises" questions={stackQuestions} />
    </div>
  );
};

export default Stack;