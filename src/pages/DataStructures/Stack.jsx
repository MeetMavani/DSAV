import React from 'react';
import { stackQuestions } from '../../utils/mcq';

const Stack = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-10 space-y-16 text-white">
      {/* Section 1: Overview */}
      <section>
        <h2 className="text-3xl font-bold mb-4">📦 What is a Stack?</h2>
        <p className="text-lg leading-relaxed">
          A <strong>Stack</strong> is a linear data structure that follows the <strong>LIFO (Last-In, First-Out)</strong> principle.
          This means the last item added is the first one to be removed.
        </p>
        <p className="mt-4 text-lg">
          🔁 <strong>Analogy:</strong> Think of a stack of plates in a cafeteria. You always take the top plate off first and
          put new plates on top.
        </p>
      </section>

      {/* Section 2: Visual Representation */}
      <section>
        <h2 className="text-3xl font-bold mb-4">👁️ Visual Representation</h2>
        <div className="w-full max-w-xs border-2 border-gray-500 rounded-lg mx-auto p-4 space-y-2 text-center">
          <div className="bg-blue-600 p-2 rounded text-white">30</div>
          <div className="bg-blue-500 p-2 rounded text-white">20</div>
          <div className="bg-blue-400 p-2 rounded text-white">10</div>
          <div className="text-sm text-gray-300 mt-2">← Top of Stack</div>
        </div>
      </section>

      {/* Section 3: Key Operations */}
      <section>
        <h2 className="text-3xl font-bold mb-4">⚙️ Stack Operations</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Push:</strong> Add an element to the top.</li>
          <li><strong>Pop:</strong> Remove and return the top element.</li>
          <li><strong>Peek/Top:</strong> View the top element without removing it.</li>
          <li><strong>isEmpty:</strong> Check if the stack is empty.</li>
        </ul>
      </section>

      {/* Section 4: Advantages */}
      <section>
        <h2 className="text-3xl font-bold mb-4">🎯 Why Use Stacks?</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Simple and fast LIFO access.</li>
          <li>Used in function calls (call stack), undo operations, and expression evaluation.</li>
          <li>Memory-efficient for backtracking problems.</li>
        </ul>
      </section>

      {/* Section 5: Sample Code */}
      <section>
        <h2 className="text-3xl font-bold mb-4">💻 Sample Code (in Java)</h2>
        <pre className="bg-gray-800 text-green-300 p-4 rounded-lg overflow-x-auto text-sm">
{`class Stack {
  int top = -1;
  int[] stack = new int[100];

  void push(int x) {
    stack[++top] = x;
  }

  int pop() {
    if (top == -1) return -1;
    return stack[top--];
  }

  int peek() {
    if (top == -1) return -1;
    return stack[top];
  }

  boolean isEmpty() {
    return top == -1;
  }
}`}
        </pre>
      </section>

      {/* Section 6: Visualization Placeholder */}
      <section>
        <h2 className="text-3xl font-bold mb-4">🧠 Try It Yourself</h2>
        <div className="border-2 border-dashed border-gray-500 rounded-lg p-6 text-center text-gray-300">
          {/* Later replace this with <StackVisualization /> */}
          <p>Interactive Stack Playground coming soon...</p>
        </div>
      </section>

      {/* Section 7: Complexity Table */}
      <section>
        <h2 className="text-3xl font-bold mb-4">⏱ Time & Space Complexity</h2>
        <table className="w-full text-left table-auto border border-gray-700">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="p-2 border border-gray-600">Operation</th>
              <th className="p-2 border border-gray-600">Time Complexity</th>
              <th className="p-2 border border-gray-600">Space Complexity</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-800">
              <td className="p-2 border border-gray-600">Push</td>
              <td className="p-2 border border-gray-600">O(1)</td>
              <td className="p-2 border border-gray-600">O(1)</td>
            </tr>
            <tr className="bg-gray-900">
              <td className="p-2 border border-gray-600">Pop</td>
              <td className="p-2 border border-gray-600">O(1)</td>
              <td className="p-2 border border-gray-600">O(1)</td>
            </tr>
            <tr className="bg-gray-800">
              <td className="p-2 border border-gray-600">Peek</td>
              <td className="p-2 border border-gray-600">O(1)</td>
              <td className="p-2 border border-gray-600">O(1)</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Section 8: Use Cases */}
      <section>
        <h2 className="text-3xl font-bold mb-4">🧩 Real-Life Use Cases</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Function call stack in programming languages</li>
          <li>Undo/Redo functionality in editors</li>
          <li>Balancing parentheses or tags</li>
          <li>Backtracking algorithms like maze solving or recursion</li>
        </ul>
      </section>

      {/* Section 9: MCQs */}
      <section>
        <h2 className="text-3xl font-bold mb-4">📝 Quick Quiz</h2>
        <div className="space-y-6">
          {stackQuestions.map((q, idx) => (
            <div key={idx} className="bg-gray-800 p-4 rounded-lg">
              <p className="font-semibold mb-2">
                Q{idx + 1}: {q.question}
              </p>
              <ul className="space-y-1">
                {q.options.map((opt, i) => (
                  <li key={i} className="ml-4 list-disc">{opt}</li>
                ))}
              </ul>
              <p className="text-sm text-green-400 mt-2">
                Correct Answer: {q.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stack;
