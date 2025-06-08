import QueueVisualization from '../../components/DataStructureVisualizer/QueueVisualization';
import MCQSection from '../../components/Shared/MCQSection';
import {queueQuestions} from '../../utils/mcq'

const Queue = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8"> {/* Container for padding */}
        {/* Intro Section */}
        <section className="mt-8 max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">🔹 What is a Queue?</h2>
            <p className="text-gray-700 mb-4">
            A <strong>Queue</strong> is a linear data structure that follows the <strong>FIFO (First In, First Out)</strong> principle.
            Elements are added at one end (called the <strong>rear</strong> or <strong>back</strong>) and removed from the other end (called the <strong>front</strong>).
            </p>
            <p className="text-gray-700 mb-4">
            Think of a queue like a line of people waiting at a ticket counter - the first person in line is the first to be served.
            Queues are essential in computer science for scheduling, buffering, and managing resources in a fair, ordered manner.
            </p>

            <h3 className="text-xl font-semibold mb-2">🔹 Visual Representation</h3>
            <div className="flex flex-col items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-600">FRONT</span>
                    <div className="flex items-center gap-2">
                        <div className="w-16 h-12 flex justify-center items-center bg-red-300 text-gray-800 font-bold rounded-md shadow-md">
                            10
                        </div>
                        <div className="w-16 h-12 flex justify-center items-center bg-red-400 text-gray-800 font-bold rounded-md shadow-md">
                            20
                        </div>
                        <div className="w-16 h-12 flex justify-center items-center bg-red-500 text-gray-800 font-bold rounded-md shadow-md">
                            30
                        </div>
                        <div className="w-16 h-12 flex justify-center items-center bg-red-600 text-white font-bold rounded-md shadow-md">
                            40
                        </div>
                    </div>
                    <span className="text-sm font-semibold text-gray-600">REAR</span>
                </div>
                <div className="flex justify-between w-full max-w-md">
                    <div className="text-center">
                        <span className="text-xl">↑</span>
                        <p className="text-sm text-gray-600">Dequeue (Remove)</p>
                    </div>
                    <div className="text-center">
                        <span className="text-xl">↑</span>
                        <p className="text-sm text-gray-600">Enqueue (Add)</p>
                    </div>
                </div>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-2">🔹 Basic Operations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-green-400 rounded-md p-4 shadow-md bg-green-50">
                    <h4 className="font-bold text-green-700">Enqueue</h4>
                    <p className="text-sm text-gray-600">Add an element to the rear of the queue</p>
                </div>
                <div className="border-2 border-blue-400 rounded-md p-4 shadow-md bg-blue-50">
                    <h4 className="font-bold text-blue-700">Dequeue</h4>
                    <p className="text-sm text-gray-600">Remove an element from the front of the queue</p>
                </div>
                <div className="border-2 border-purple-400 rounded-md p-4 shadow-md bg-purple-50">
                    <h4 className="font-bold text-purple-700">Front/Peek</h4>
                    <p className="text-sm text-gray-600">View the front element without removing it</p>
                </div>
                <div className="border-2 border-orange-400 rounded-md p-4 shadow-md bg-orange-50">
                    <h4 className="font-bold text-orange-700">isEmpty</h4>
                    <p className="text-sm text-gray-600">Check if the queue is empty</p>
                </div>
            </div>
        </section>

        {/* Section for Types of Queues */}
        <section className="mt-8 max-w-7xl mx-auto p-8 bg-gray-50">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Types of Queues</h3>

            {/* Simple Queue */}
            <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-700 mb-2">Simple Queue (Linear Queue)</h4>
                <p className="text-gray-700 mb-4">
                A <strong>Simple Queue</strong> follows strict FIFO order. Elements are added at the rear and removed from the front.
                </p>
                <div className="flex justify-center items-center gap-2">
                    <span className="text-sm font-semibold text-gray-600">FRONT →</span>
                    <div className="w-20 h-14 flex justify-center items-center bg-blue-300 text-gray-800 font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                        A
                    </div>
                    <div className="w-20 h-14 flex justify-center items-center bg-blue-400 text-gray-800 font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                        B
                    </div>
                    <div className="w-20 h-14 flex justify-center items-center bg-blue-500 text-gray-800 font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                        C
                    </div>
                    <span className="text-sm font-semibold text-gray-600">← REAR</span>
                </div>
            </div>

            {/* Circular Queue */}
            <div className="mb-8">
                <h4 className="text-xl font-semibold text-purple-700 mb-2">Circular Queue</h4>
                <p className="text-gray-700 mb-4">
                A <strong>Circular Queue</strong> connects the rear back to the front, forming a circle. This efficiently uses memory by reusing empty spaces.
                </p>
                <div className="flex justify-center items-center">
                    <div className="relative w-48 h-48">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-12 flex justify-center items-center bg-purple-300 text-gray-800 font-bold rounded-md shadow-md">
                            A
                        </div>
                        <div className="absolute top-4 right-4 w-16 h-12 flex justify-center items-center bg-purple-400 text-gray-800 font-bold rounded-md shadow-md">
                            B
                        </div>
                        <div className="absolute bottom-4 right-4 w-16 h-12 flex justify-center items-center bg-purple-500 text-gray-800 font-bold rounded-md shadow-md">
                            C
                        </div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-12 flex justify-center items-center bg-purple-600 text-white font-bold rounded-md shadow-md">
                            D
                        </div>
                        <div className="absolute top-4 left-4 w-16 h-12 flex justify-center items-center bg-gray-300 text-gray-600 font-bold rounded-md shadow-md">
                            Empty
                        </div>
                        <div className="absolute bottom-4 left-4 w-16 h-12 flex justify-center items-center bg-gray-300 text-gray-600 font-bold rounded-md shadow-md">
                            Empty
                        </div>
                        {/* Circular arrows */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 border-2 border-dashed border-purple-400 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Priority Queue */}
            <div className="mb-8">
                <h4 className="text-xl font-semibold text-green-700 mb-2">Priority Queue</h4>
                <p className="text-gray-700 mb-4">
                A <strong>Priority Queue</strong> serves elements based on their priority rather than arrival order. Higher priority elements are served first.
                </p>
                <div className="flex justify-center items-center gap-4">
                    <div className="text-center">
                        <div className="w-20 h-16 flex flex-col justify-center items-center bg-green-300 text-gray-800 font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                            <span>Task A</span>
                            <span className="text-xs">P: 1</span>
                        </div>
                        <span className="text-xs text-green-700">Highest</span>
                    </div>
                    <div className="text-center">
                        <div className="w-20 h-16 flex flex-col justify-center items-center bg-green-400 text-gray-800 font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                            <span>Task B</span>
                            <span className="text-xs">P: 2</span>
                        </div>
                        <span className="text-xs text-green-700">Medium</span>
                    </div>
                    <div className="text-center">
                        <div className="w-20 h-16 flex flex-col justify-center items-center bg-green-500 text-gray-800 font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                            <span>Task C</span>
                            <span className="text-xs">P: 3</span>
                        </div>
                        <span className="text-xs text-green-700">Lowest</span>
                    </div>
                </div>
            </div>

            {/* Double-ended Queue (Deque) */}
            <div>
                <h4 className="text-xl font-semibold text-orange-700 mb-2">Double-ended Queue (Deque)</h4>
                <p className="text-gray-700 mb-4">
                A <strong>Deque</strong> allows insertion and deletion at both ends. Elements can be added or removed from either the front or rear.
                </p>
                <div className="flex justify-center items-center gap-2">
                    <div className="text-center">
                        <span className="text-xl">↕</span>
                        <p className="text-xs text-gray-600">Insert/Delete</p>
                    </div>
                    <div className="w-20 h-14 flex justify-center items-center bg-orange-300 text-gray-800 font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                        X
                    </div>
                    <div className="w-20 h-14 flex justify-center items-center bg-orange-400 text-gray-800 font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                        Y
                    </div>
                    <div className="w-20 h-14 flex justify-center items-center bg-orange-500 text-gray-800 font-bold rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
                        Z
                    </div>
                    <div className="text-center">
                        <span className="text-xl">↕</span>
                        <p className="text-xs text-gray-600">Insert/Delete</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full py-10 px-4 md:px-20 flex flex-col items-center">
            {/* Title Section */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">Queue Operations 🚀</h2>
                <p className="text-lg text-gray-600 mt-2">Visualizing key operations in a Queue: Enqueue, Dequeue, Front/Peek, and Checking if Empty.</p>
            </div>

            {/* Why Queues? Section */}
            <div className="w-[70vw] mb-10 bg-gray-100 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Queues?</h3>
                <p className="text-gray-600">
                Queues are fundamental for managing tasks in order of arrival. They ensure fairness in resource allocation, 
                are essential in operating systems for process scheduling, and are used in breadth-first search algorithms, 
                print job management, and handling requests in web servers.
                </p>
            </div>

            {/* Key Operations Section */}
            <div className="w-[70vw] mb-10 bg-gray-100 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Operations</h3>
                <ul className="text-gray-600">
                <li>🔹 **Enqueue**: Add an element to the rear of the queue.</li>
                <li>🔹 **Dequeue**: Remove and return the front element from the queue.</li>
                <li>🔹 **Front/Peek**: View the front element without removing it.</li>
                <li>🔹 **isEmpty**: Check if the queue contains any elements.</li>
                <li>🔹 **Size**: Get the number of elements in the queue.</li>
                </ul>
            </div>

            {/* Queue Visualization Section */}
            <div className="flex justify-center">
                { <QueueVisualization /> }
            </div>
        </section>

        {/* Separate Code Section */}
        <section className="mt-8 max-w-7xl mx-auto p-8 bg-gray-50">
            <div className="w-full bg-gray-100 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Sample Code for Queue Implementation</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md">
                <code className="text-sm">
                    {`class Queue {
            constructor() {
                this.items = [];
                this.front = 0;
                this.rear = 0;
            }

            // Add element to rear of queue
            enqueue(element) {
                this.items[this.rear] = element;
                this.rear++;
            }

            // Remove element from front of queue
            dequeue() {
                if (this.isEmpty()) {
                    return null;
                }
                const item = this.items[this.front];
                delete this.items[this.front];
                this.front++;
                return item;
            }

            // View front element without removing
            peek() {
                if (this.isEmpty()) {
                    return null;
                }
                return this.items[this.front];
            }

            // Check if queue is empty
            isEmpty() {
                return this.rear === this.front;
            }

            // Get queue size
            size() {
                return this.rear - this.front;
            }
            }

            // Example usage:
            const queue = new Queue();
            queue.enqueue(10);
            queue.enqueue(20);
            queue.enqueue(30);
            console.log(queue.dequeue()); // 10
            console.log(queue.peek());    // 20
            `}
                </code>
                </pre>
            </div>
        </section>
        
        {/* Queue Implementation Methods */}
        <section className="mt-10 px-4 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2 text-center sm:text-left">
                🔹 Queue Implementation Methods
            </h3>
            
            <p className="text-gray-600 mb-4 text-sm sm:text-base text-center sm:text-left">
                Queues can be implemented using different data structures, each with their own advantages and trade-offs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-blue-700 mb-2">Array Implementation</h4>
                    <p className="text-sm text-gray-600 mb-3">Uses arrays with front and rear pointers</p>
                    <div className="text-xs space-y-1">
                        <div className="text-green-600">✓ Simple to implement</div>
                        <div className="text-green-600">✓ Memory efficient</div>
                        <div className="text-red-600">✗ Fixed size limitation</div>
                        <div className="text-red-600">✗ Memory waste in simple implementation</div>
                    </div>
                </div>
                
                <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
                    <h4 className="font-bold text-lg text-purple-700 mb-2">Linked List Implementation</h4>
                    <p className="text-sm text-gray-600 mb-3">Uses nodes with pointers to next element</p>
                    <div className="text-xs space-y-1">
                        <div className="text-green-600">✓ Dynamic size</div>
                        <div className="text-green-600">✓ No memory waste</div>
                        <div className="text-red-600">✗ Extra memory for pointers</div>
                        <div className="text-red-600">✗ More complex implementation</div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Real-world Applications */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2">🔹 Real-world Applications</h3>
            <p className="text-gray-700 mb-6">
                Queues are everywhere in computer systems and real-world scenarios:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                    { title: "Operating Systems", desc: "Process scheduling, print job management" },
                    { title: "Web Servers", desc: "Handling incoming HTTP requests in order" },
                    { title: "Breadth-First Search", desc: "Graph traversal algorithms" },
                    { title: "Call Centers", desc: "Managing customer calls in waiting queues" },
                    { title: "Printer Queues", desc: "Managing print jobs in office environments" },
                    { title: "CPU Scheduling", desc: "Round-robin and FIFO scheduling algorithms" }
                ].map((app, index) => (
                    <div key={index} className="border border-gray-300 rounded-md p-4 shadow-md bg-white hover:shadow-lg transition-shadow">
                        <h4 className="font-bold text-gray-800 mb-2">{app.title}</h4>
                        <p className="text-sm text-gray-600">{app.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Time & Space Complexity Section */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2">🔹 Time & Space Complexity</h3>
            <p className="text-gray-700 mb-4">
                Here's how different operations perform in various queue implementations:
            </p>

            <div className="overflow-x-auto">
                <table className="min-w-full text-left border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                    <th className="px-4 py-2 border">Operation</th>
                    <th className="px-4 py-2 border">Array Implementation</th>
                    <th className="px-4 py-2 border">Linked List Implementation</th>
                    <th className="px-4 py-2 border">Space Complexity</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {[
                    ["Enqueue", "O(1)", "O(1)", "O(1)"],
                    ["Dequeue", "O(1)", "O(1)", "O(1)"],
                    ["Front/Peek", "O(1)", "O(1)", "O(1)"],
                    ["isEmpty", "O(1)", "O(1)", "O(1)"],
                    ["Size", "O(1)", "O(n)*", "O(1)"],
                    ].map(([op, array, linkedList, space], index) => (
                    <tr key={index} className="border-t">
                        <td className="px-4 py-2 border font-semibold">{op}</td>
                        <td className="px-4 py-2 border">{array}</td>
                        <td className="px-4 py-2 border">{linkedList}</td>
                        <td className="px-4 py-2 border">{space}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">
                *O(n) if size counter is not maintained; O(1) if size counter is used
            </p>
        </section>

        {/* Use Cases Section */}
        <section className="mt-16 mx-auto max-w-7xl">
            <h3 className="text-xl font-semibold mb-2">🔹 When to Use Different Queue Types</h3>
            <div className="space-y-4 text-gray-700">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <h4 className="font-semibold text-blue-800">Simple Queue</h4>
                    <p className="text-sm">Use when you need basic FIFO behavior: task scheduling, breadth-first search, handling requests in order.</p>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                    <h4 className="font-semibold text-purple-800">Circular Queue</h4>
                    <p className="text-sm">Use when memory efficiency is important: buffering systems, producer-consumer problems, CPU scheduling.</p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                    <h4 className="font-semibold text-green-800">Priority Queue</h4>
                    <p className="text-sm">Use when elements have different priorities: Dijkstra's algorithm, A* pathfinding, task scheduling with priorities.</p>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                    <h4 className="font-semibold text-orange-800">Deque</h4>
                    <p className="text-sm">Use when you need flexibility: palindrome checking, sliding window problems, undo-redo functionality.</p>
                </div>
            </div>
        </section>
        
        {/* MCQ Section */}
        <MCQSection title="🧠 Queue Exercises" questions={queueQuestions} />
    </div>
  );
};

export default Queue;