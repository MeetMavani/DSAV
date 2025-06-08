import HashTableVisualization from '../../components/DataStructureVisualizer/HashTableVisualization';
import Hashvis2 from '../../components/DataStructureVisualizer/Hashvis2';
import MCQSection from '../../components/Shared/MCQSection';
import { stackQuestions } from '../../utils/mcq';

const HashTable = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      {/* Intro Section */}
      <section className="mt-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">🔹 What is a Hash Table?</h2>
        <p className="text-gray-700 mb-4">
          A <strong>Hash Table</strong> (also called Hash Map) is a data structure that implements an associative array, 
          mapping <strong>keys to values</strong>. It uses a <strong>hash function</strong> to compute an index 
          into an array of buckets or slots, from which the desired value can be found.
        </p>
        <p className="text-gray-700 mb-4">
          Think of a hash table like a library catalog - you don't search through every book, 
          instead you use the catalog system to jump directly to the section where your book is located.
        </p>

        <h3 className="text-xl font-semibold mb-2">🔹 Visual Representation</h3>
        <div className="flex flex-col items-center gap-4 mt-4">
          <div className="text-sm text-gray-500 mb-2">Hash Function: key → hash(key) % table_size</div>
          
          {/* Hash Function Visualization */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="text-xs text-gray-500 mb-1">Key</div>
              <div className="w-20 h-12 flex justify-center items-center bg-blue-200 text-gray-800 font-bold rounded-md shadow-md">
                "apple"
              </div>
            </div>
            <div className="text-xl">→</div>
            <div className="flex flex-col items-center">
              <div className="text-xs text-gray-500 mb-1">Hash Function</div>
              <div className="w-24 h-12 flex justify-center items-center bg-yellow-200 text-gray-800 font-bold rounded-md shadow-md text-sm">
                hash()
              </div>
            </div>
            <div className="text-xl">→</div>
            <div className="flex flex-col items-center">
              <div className="text-xs text-gray-500 mb-1">Index</div>
              <div className="w-16 h-12 flex justify-center items-center bg-green-200 text-gray-800 font-bold rounded-md shadow-md">
                5
              </div>
            </div>
          </div>

          {/* Hash Table Structure */}
          <div className="flex items-center gap-2 mt-4">
            <div className="text-sm text-gray-500 mr-2">Index:</div>
            {[0, 1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-xs text-gray-500 mb-1">{i}</div>
                <div className={`w-16 h-12 flex justify-center items-center font-bold rounded-md shadow-md text-sm ${
                  i === 1 ? 'bg-purple-300 text-gray-800' : 
                  i === 2 ? 'bg-orange-300 text-gray-800' :
                  i === 5 ? 'bg-red-300 text-gray-800' :
                  'bg-gray-100 text-gray-400'
                }`}>
                  {i === 1 ? 'banana' : i === 2 ? 'cherry' : i === 5 ? 'apple' : '-'}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-600 mt-4 text-center">
          Keys are transformed into array indices using a <strong>hash function</strong>, 
          enabling direct access to values.
        </p>
      </section>

      {/* Hash Function Section */}
      <section className="mt-8 max-w-7xl mx-auto p-8 bg-gray-50">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Hash Function & Collision Resolution</h3>

        {/* Hash Function Types */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-blue-700 mb-2">Common Hash Functions</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h5 className="font-semibold text-gray-800 mb-2">Division Method</h5>
              <code className="text-sm bg-gray-100 p-2 rounded block mb-2">h(k) = k mod m</code>
              <p className="text-gray-600 text-sm">Simple and fast, where m is table size (preferably prime)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h5 className="font-semibold text-gray-800 mb-2">Multiplication Method</h5>
              <code className="text-sm bg-gray-100 p-2 rounded block mb-2">h(k) = ⌊m(kA mod 1)⌋</code>
              <p className="text-gray-600 text-sm">Works well with any table size, A ≈ 0.618 (golden ratio)</p>
            </div>
          </div>
        </div>

        {/* Collision Resolution Methods */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-purple-700 mb-2">Collision Resolution Methods</h4>
          
          {/* Chaining */}
          <div className="mb-6">
            <h5 className="font-semibold text-gray-800 mb-2">1. Separate Chaining (Linked Lists)</h5>
            <div className="flex justify-center items-center gap-4 bg-white p-4 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="text-xs text-gray-500 mb-1">Index 3</div>
                <div className="w-16 h-12 flex justify-center items-center bg-purple-300 text-gray-800 font-bold rounded-md shadow-md text-sm">
                  key1
                </div>
              </div>
              <div className="text-xl">→</div>
              <div className="w-16 h-12 flex justify-center items-center bg-purple-400 text-gray-800 font-bold rounded-md shadow-md text-sm">
                key2
              </div>
              <div className="text-xl">→</div>
              <div className="w-16 h-12 flex justify-center items-center bg-purple-500 text-gray-800 font-bold rounded-md shadow-md text-sm">
                key3
              </div>
              <div className="text-xl">→</div>
              <div className="w-16 h-12 flex justify-center items-center bg-gray-400 text-white font-bold rounded-md shadow-md text-sm">
                null
              </div>
            </div>
            <p className="text-gray-600 text-sm text-center mt-2">
              Multiple keys with same hash value form a linked list
            </p>
          </div>

          {/* Open Addressing */}
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">2. Open Addressing (Linear Probing)</h5>
            <div className="flex justify-center items-center gap-2 bg-white p-4 rounded-lg">
              <div className="text-sm text-gray-500 mr-2">Probe sequence:</div>
              {[0, 1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="flex flex-col items-center">
                  <div className="text-xs text-gray-500 mb-1">{i}</div>
                  <div className={`w-12 h-12 flex justify-center items-center font-bold rounded-md shadow-md text-xs ${
                    i === 3 ? 'bg-red-300 text-gray-800' : 
                    i === 4 ? 'bg-yellow-300 text-gray-800' :
                    i === 5 ? 'bg-green-300 text-gray-800' :
                    'bg-gray-100 text-gray-400'
                  }`}>
                    {i === 3 ? 'key1' : i === 4 ? 'key2' : i === 5 ? 'key3' : '-'}
                  </div>
                  {i === 4 && <div className="text-xs text-red-500 mt-1">collision</div>}
                  {i === 5 && <div className="text-xs text-red-500 mt-1">collision</div>}
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm text-center mt-2">
              If slot is occupied, probe next slot until empty one is found
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Visualization Section */}
      <section className="w-full py-10 px-4 md:px-20 flex flex-col items-center">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Hash Table Operations 🗂️</h2>
          <p className="text-lg text-gray-600 mt-2">
            Visualizing insertion, search, collision handling, and dynamic resizing in hash tables.
          </p>
        </div>

        {/* Why Hash Tables? Section */}
        <div className="w-[70vw] mb-10 bg-gray-100 p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Hash Tables?</h3>
          <p className="text-gray-600">
            Hash tables provide average O(1) time complexity for search, insertion, and deletion operations. 
            They're the backbone of many systems: databases use them for indexing, programming languages 
            implement objects/dictionaries with them, and caches rely on them for fast lookups.
          </p>
        </div>

        {/* Key Operations Section */}
        <div className="w-[70vw] mb-10 bg-gray-100 p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Operations</h3>
          <ul className="text-gray-600">
            <li>🔹 **Insert**: Adding a key-value pair using hash function to find position.</li>
            <li>🔹 **Search**: Finding a value by hashing the key and checking the calculated position.</li>
            <li>🔹 **Delete**: Removing a key-value pair (requires careful handling in open addressing).</li>
            <li>🔹 **Resize**: Growing the table when load factor becomes too high to maintain performance.</li>
            <li>🔹 **Hash**: Converting keys into array indices using mathematical functions.</li>
          </ul>
        </div>

        {/* Hash Table Visualization */}
        <div className="flex justify-center">
          <HashTableVisualization />
        </div>
        {/* Hash Table Visualization */}
        {/* <div className="flex justify-center">
          <Hashvis2 />
        </div> */}
      </section>
      
          

      {/* Sample Code Section */}
      <section className="mt-8 max-w-7xl mx-auto p-8 bg-gray-50">
        <div className="w-full bg-gray-100 p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Sample Code for Hash Table Implementation</h3>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
            <code className="text-sm">
              {`class HashTable {
    constructor(size = 7) {
        this.size = size;
        this.table = new Array(size);
        this.count = 0;
    }

    // Simple hash function - O(k) where k is key length
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * (i + 1)) % this.size;
        }
        return hash;
    }

    // Insert operation - O(1) average, O(n) worst case
    insert(key, value) {
        const index = this.hash(key);
        
        if (!this.table[index]) {
            this.table[index] = [];
        }
        
        // Check if key already exists
        const existingPair = this.table[index].find(pair => pair[0] === key);
        if (existingPair) {
            existingPair[1] = value; // Update existing value
        } else {
            this.table[index].push([key, value]);
            this.count++;
        }
        
        // Resize if load factor > 0.75
        if (this.count / this.size > 0.75) {
            this.resize();
        }
    }

    // Search operation - O(1) average, O(n) worst case
    search(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        
        if (bucket) {
            const pair = bucket.find(pair => pair[0] === key);
            return pair ? pair[1] : null;
        }
        return null;
    }

    // Delete operation - O(1) average, O(n) worst case
    delete(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        
        if (bucket) {
            const pairIndex = bucket.findIndex(pair => pair[0] === key);
            if (pairIndex !== -1) {
                bucket.splice(pairIndex, 1);
                this.count--;
                return true;
            }
        }
        return false;
    }

    // Resize table when load factor gets too high
    resize() {
        const oldTable = this.table;
        this.size = this.size * 2;
        this.table = new Array(this.size);
        this.count = 0;
        
        // Rehash all existing key-value pairs
        for (const bucket of oldTable) {
            if (bucket) {
                for (const [key, value] of bucket) {
                    this.insert(key, value);
                }
            }
        }
    }

    // Get load factor
    getLoadFactor() {
        return this.count / this.size;
    }

    // Display table contents
    display() {
        console.log("Hash Table Contents:");
        for (let i = 0; i < this.size; i++) {
            if (this.table[i] && this.table[i].length > 0) {
                console.log(\`Index \${i}:\`, this.table[i]);
            }
        }
        console.log(\`Load Factor: \${this.getLoadFactor().toFixed(2)}\`);
    }
}

// Example usage:
const hashTable = new HashTable();
hashTable.insert("apple", 150);
hashTable.insert("banana", 75);
hashTable.insert("cherry", 200);

console.log("Search apple:", hashTable.search("apple")); // 150
console.log("Search grape:", hashTable.search("grape")); // null

hashTable.display();
hashTable.delete("banana");
console.log("After deleting banana:");
hashTable.display();`}
            </code>
          </pre>
        </div>
      </section>

      {/* Hash Table Memory Layout Section */}
      <section className="mt-16 mx-auto max-w-7xl">
        <h3 className="text-xl font-semibold mb-2">🔹 Hash Table Memory Layout</h3>
        <p className="text-gray-700 mb-6">
          Hash tables use an array of buckets, where each bucket can store one or more key-value pairs. 
          The hash function determines which bucket to use for each key.
        </p>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="text-sm text-gray-500 w-20">Bucket Index:</div>
            {[0, 1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="w-16 text-xs text-center text-gray-500">
                {index}
              </div>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <div className="text-sm text-gray-500 w-20">Contents:</div>
            {[
              { content: "-", isEmpty: true },
              { content: "banana:75", isEmpty: false },
              { content: "cherry:200", isEmpty: false },
              { content: "grape:95\n→mango:110", isEmpty: false, hasChain: true },
              { content: "-", isEmpty: true },
              { content: "apple:150", isEmpty: false },
              { content: "date:120", isEmpty: false }
            ].map((bucket, index) => (
              <div
                key={index}
                className={`w-16 h-16 flex flex-col justify-center items-center border rounded-md shadow-sm text-xs ${
                  bucket.isEmpty 
                    ? 'bg-gray-100 text-gray-400' 
                    : bucket.hasChain
                    ? 'bg-yellow-200 text-gray-800 font-semibold'
                    : 'bg-green-200 text-gray-800 font-semibold'
                }`}
              >
                {bucket.content.split('\n').map((line, i) => (
                  <div key={i} className="text-center leading-tight">
                    {line}
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          <div className="flex items-center gap-2 mt-2">
            <div className="text-sm font-semibold text-blue-600">Load Factor = 5/7 ≈ 0.71</div>
            <div className="text-sm text-gray-500 ml-4">↑ Number of items / Table size</div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Yellow bucket shows chaining - multiple items with same hash value stored as linked list
        </p>
      </section>

      {/* Time & Space Complexity Section */}
      <section className="mt-16 mx-auto max-w-7xl">
        <h3 className="text-xl font-semibold mb-2">🔹 Time & Space Complexity</h3>
        <p className="text-gray-700 mb-4">
          Hash table performance depends on hash function quality and load factor:
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Operation</th>
                <th className="px-4 py-2 border">Average Case</th>
                <th className="px-4 py-2 border">Worst Case</th>
                <th className="px-4 py-2 border">Space Complexity</th>
                <th className="px-4 py-2 border">Notes</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {[
                ["Insert", "O(1)", "O(n)", "O(1)", "May trigger resize"],
                ["Search", "O(1)", "O(n)", "O(1)", "Direct hash lookup"],
                ["Delete", "O(1)", "O(n)", "O(1)", "Find then remove"],
                ["Resize", "O(n)", "O(n)", "O(n)", "Rehash all elements"],
              ].map(([op, avg, worst, space, notes], index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2 border font-semibold">{op}</td>
                  <td className="px-4 py-2 border text-green-600 font-mono">{avg}</td>
                  <td className="px-4 py-2 border text-red-600 font-mono">{worst}</td>
                  <td className="px-4 py-2 border text-blue-600 font-mono">{space}</td>
                  <td className="px-4 py-2 border text-gray-600 text-sm">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 p-4 bg-yellow-50 rounded-md">
          <h4 className="font-semibold text-yellow-800 mb-2">Performance Factors</h4>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>• <strong>Hash Function Quality:</strong> Should distribute keys uniformly</li>
            <li>• <strong>Load Factor:</strong> Keep below 0.75 for optimal performance</li>
            <li>• <strong>Collision Resolution:</strong> Chaining vs. open addressing trade-offs</li>
            <li>• <strong>Table Size:</strong> Prime numbers often work better for division method</li>
          </ul>
        </div>
      </section>

      {/* Real-world Applications Section */}
      <section className="mt-16 mx-auto max-w-7xl">
        <h3 className="text-xl font-semibold mb-2">🔹 Real-world Applications of Hash Tables</h3>
        <p className="text-gray-700 mb-4">
          Hash tables are fundamental to modern computing, powering everything from databases to programming languages:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-700 mb-2">💾 System & Storage</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Database indexing and B+ trees</li>
              <li>• File system directory structures</li>
              <li>• Memory management and page tables</li>
              <li>• Cache implementations (CPU, web, Redis)</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <h4 className="font-semibold text-green-700 mb-2">🖥️ Programming Languages</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Python dictionaries and sets</li>
              <li>• JavaScript objects and Maps</li>
              <li>• Java HashMap and HashSet</li>
              <li>• Symbol tables in compilers</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-700 mb-2">🌐 Web & Networking</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• DNS name resolution</li>
              <li>• URL routing in web frameworks</li>
              <li>• Session management</li>
              <li>• Load balancing algorithms</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
            <h4 className="font-semibold text-orange-700 mb-2">📊 Data Processing</h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Counting unique elements</li>
              <li>• Grouping and aggregation</li>
              <li>• Duplicate detection</li>
              <li>• Frequency analysis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison with Other Data Structures */}
      <section className="mt-16 mx-auto max-w-7xl">
        <h3 className="text-xl font-semibold mb-2">🔹 Hash Table vs Other Data Structures</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Feature</th>
                <th className="px-4 py-2 border">Hash Table</th>
                <th className="px-4 py-2 border">Array</th>
                <th className="px-4 py-2 border">Binary Search Tree</th>
                <th className="px-4 py-2 border">Linked List</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {[
                ["Search Time", "O(1) avg", "O(n)", "O(log n)", "O(n)"],
                ["Insert Time", "O(1) avg", "O(n)", "O(log n)", "O(1)"],
                ["Delete Time", "O(1) avg", "O(n)", "O(log n)", "O(n)"],
                ["Memory Usage", "Higher", "Lower", "Higher", "Higher"],
                ["Ordered Data", "No", "Yes", "Yes", "No"],
                ["Key-Value Pairs", "Native", "Index-based", "Yes", "Custom"],
              ].map(([feature, hash, array, bst, ll], index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2 border font-semibold">{feature}</td>
                  <td className="px-4 py-2 border bg-green-50 font-semibold">{hash}</td>
                  <td className="px-4 py-2 border">{array}</td>
                  <td className="px-4 py-2 border">{bst}</td>
                  <td className="px-4 py-2 border">{ll}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      {/* MCQ Section */}
      <MCQSection title="🧠 Hash Table Exercises" questions={stackQuestions} />
    </div>
  );
};

export default HashTable;