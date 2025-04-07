import ArrayVisualization from "./ArrayVisualizations/ArrayVisualization";

const Array = () => {
    return ( 
      <>

        {/*  Section 1  */}
        <section className="flex flex-col max-w-7xl mx-auto px-4 py-8 md:px-12 lg:px-24 bg-gray-50">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Arrays Overview</h1>
    
          {/* Introduction */}
          <p className="text-lg md:text-xl text-gray-700 mb-6 text-center">
            An <strong>array</strong> is a collection of elements stored in contiguous memory locations.
            Each element can be accessed using an index starting from <code>0</code>.
          </p>
    
          {/* Importance of Arrays */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why are Arrays Important?</h2>
          <ul className="list-disc text-gray-600 space-y-4 text-left">
            <li>Used in <strong>sorting & searching algorithms</strong> (e.g., Binary Search, QuickSort).</li>
            <li>Helps in <strong>storing & processing</strong> large amounts of data efficiently.</li>
            <li>Forms the base for <strong>other data structures</strong> (Lists, Hash Tables, Stacks, etc.).</li>
          </ul>
    
          {/* Characteristics */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Characteristics of Arrays</h2>
          <ul className="list-disc text-gray-600 space-y-4 text-left">
            <li><strong>Fixed Size:</strong> Once declared, the size <em>cannot</em> change in most languages.</li>
            <li><strong>Fast Access:</strong> Direct access using <code>indexing</code> (<code>O(1)</code> complexity).</li>
            <li><strong>Efficient Traversal:</strong> Can loop through elements in <code>O(n)</code> time.</li>
          </ul>
    
          {/* Visualization */}
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Array Indexing Example</h2>
            <div className="flex justify-center items-center space-x-2">  
              {[10, 20, 30, 40, 50].map((num, index) => (
                <div key={index} className="w-16 h-16 flex flex-col items-center justify-center border border-gray-700 bg-white rounded-md shadow-md">
                  <span className="text-lg font-bold">{num}</span>
                  <span className="text-xs text-gray-500">Index {index}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col max-w-7xl mx-auto px-4 py-8 md:px-12 lg:px-24 bg-white mt-12">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Operations on Arrays</h2>

          {/* Intro */}
          <p className="text-lg md:text-xl text-gray-700 mb-6 text-center">
            Even though arrays are static in size, several essential operations can be performed during programming.
            These are the foundation of solving most array-based problems in DSA.
          </p>

          {/* Operations Table */}
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300 text-left text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border-r">Operation</th>
                  <th className="px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2 border-r font-semibold">Traversal</td>
                  <td className="px-4 py-2">Visiting every element in the array using loops.</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 border-r font-semibold">Accessing (Indexing)</td>
                  <td className="px-4 py-2">Directly retrieving an element using its index.</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 border-r font-semibold">Searching</td>
                  <td className="px-4 py-2">Looking for a specific element (e.g., Linear Search).</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 border-r font-semibold">Updating</td>
                  <td className="px-4 py-2">Changing the value at a specific index.</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 border-r font-semibold">Insertion (Logical)</td>
                  <td className="px-4 py-2">Shifting elements and adding a new value.</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 border-r font-semibold">Deletion (Logical)</td>
                  <td className="px-4 py-2">Removing an element logically (by shifting or marking).</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Key Notes */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Notes</h3>
            <ul className="list-disc text-gray-600 space-y-3 pl-5">
              <li>Arrays have <strong>fixed size</strong> — once declared, you can’t expand or shrink them.</li>
              <li>Most "insert" and "delete" operations involve <strong>shifting elements</strong>.</li>
              <li>Elements are stored in <strong>contiguous memory</strong>, allowing <code>O(1)</code> access.</li>
            </ul>
          </div>

          {/* Code Examples */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Code Examples (Java)</h3>
            <pre className="bg-white p-4 rounded-lg overflow-x-auto text-sm text-gray-800">
        <code>{`int[] arr = {10, 20, 30, 40, 50};

        // 🔹 Accessing
        System.out.println(arr[2]); // Output: 30

        // 🔹 Updating
        arr[2] = 99; // arr = [10, 20, 99, 40, 50]

        // 🔹 Traversal
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }

        // 🔹 Searching (Linear Search)
        int key = 40;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == key) {
                System.out.println("Found at index " + i);
                break;
            }
        }`}</code>
            </pre>
          </div>

          {/* Analogy */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
            <p className="text-gray-800">
              <strong>🔍 Analogy:</strong> Think of an array like a row of lockers — each locker (index) has a number, and you can directly open any locker to check or replace what's inside.
              But if you want to "insert" something in between, you need to shift everything — just like in real lockers.
            </p>
          </div>

          <p className="text-gray-700 mb-6">
            Now that we've explored the core operations, let's visually understand how a few of them work in a simple array.
          </p>

          {/* Accessing Explanation */}
          {/* Traversal Explanation */}
  
          <ArrayVisualization />


          


        </section>


      </>
    );
  };
  
  export default Array;
  