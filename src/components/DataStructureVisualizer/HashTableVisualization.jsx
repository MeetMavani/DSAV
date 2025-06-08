import { useEffect, useRef, useState } from "react";

const HashTableVisualization = () => {
  const insertionRef = useRef();
  const searchRef = useRef();
  const collisionRef = useRef();
  const resizingRef = useRef();
  
  const [isRunning, setIsRunning] = useState(false);

  // Hash table configuration
  const TABLE_SIZE = 7;
  const RESIZED_TABLE_SIZE = 13;

  // Sample data for operations
  const sampleData = [
    { key: "apple", value: 150 },
    { key: "banana", value: 75 },
    { key: "cherry", value: 200 },
    { key: "date", value: 120 },
    { key: "elderberry", value: 90 },
    { key: "fig", value: 80 }
  ];

  // Simple hash function
  const hashFunction = (key, tableSize = TABLE_SIZE) => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * (i + 1)) % tableSize;
    }
    return hash;
  };

  // Animation helper functions
  const animateElement = (element, styles, duration = 500) => {
    if (!element) return Promise.resolve();
    
    return new Promise(resolve => {
      Object.assign(element.style, styles);
      setTimeout(resolve, duration);
    });
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const highlightHashFunction = async (key, tableSize = TABLE_SIZE) => {
    const hashValue = hashFunction(key, tableSize);
    // In a real implementation, we'd show the hash calculation step by step
    return hashValue;
  };

  const runAnimations = async () => {
    if (isRunning) return;
    setIsRunning(true);

    // Reset all tables
    [insertionRef, searchRef, collisionRef, resizingRef].forEach(ref => {
      if (ref.current) {
        const slots = ref.current.querySelectorAll('.hash-slot');
        const items = ref.current.querySelectorAll('.hash-item');
        
        slots.forEach(slot => {
          slot.style.backgroundColor = "#f9fafb";
          slot.style.borderColor = "#e5e7eb";
          slot.style.transform = "scale(1)";
        });
        
        items.forEach(item => {
          item.style.opacity = "0";
          item.style.transform = "scale(0)";
          item.style.backgroundColor = "#fff";
          item.style.borderColor = "#d1d5db";
        });
      }
    });

    await sleep(500);

    // Run all animations in sequence
    await animateInsertion();
    await sleep(2000);
    
    await animateSearch();
    await sleep(2000);
    
    await animateCollisionHandling();
    await sleep(2000);
    
    await animateResizing();
    
    setIsRunning(false);
  };

  const animateInsertion = async () => {
    const container = insertionRef.current;
    if (!container) return;

    const slots = container.querySelectorAll('.hash-slot');
    const items = container.querySelectorAll('.hash-item');

    // Insert first 3 items to show basic insertion
    const itemsToInsert = sampleData.slice(0, 3);

    for (let i = 0; i < itemsToInsert.length; i++) {
      const item = itemsToInsert[i];
      const hashIndex = await highlightHashFunction(item.key);
      
      // Highlight the hash calculation
      const hashDisplay = container.querySelector('.hash-calculation');
      if (hashDisplay) {
        hashDisplay.textContent = `hash("${item.key}") = ${hashIndex}`;
        await animateElement(hashDisplay, {
          backgroundColor: "#fef3c7",
          color: "#92400e"
        }, 300);
      }

      await sleep(500);

      // Highlight target slot
      const targetSlot = slots[hashIndex];
      if (targetSlot) {
        await animateElement(targetSlot, {
          backgroundColor: "#dbeafe",
          borderColor: "#3b82f6",
          transform: "scale(1.05)"
        }, 400);
      }

      await sleep(300);

      // Animate item insertion
      const itemElement = items[i];
      if (itemElement) {
        await animateElement(itemElement, {
          opacity: "1",
          transform: "scale(1.1)",
          backgroundColor: "#10b981",
          borderColor: "#047857",
          color: "#fff"
        }, 600);

        await sleep(400);

        await animateElement(itemElement, {
          transform: "scale(1)",
          backgroundColor: "#f0fdf4",
          borderColor: "#16a34a",
          color: "#000"
        }, 300);
      }

      // Reset slot highlighting
      if (targetSlot) {
        await animateElement(targetSlot, {
          backgroundColor: "#f9fafb",
          borderColor: "#e5e7eb",
          transform: "scale(1)"
        }, 300);
      }

      // Reset hash display
      if (hashDisplay) {
        await animateElement(hashDisplay, {
          backgroundColor: "#f3f4f6",
          color: "#374151"
        }, 200);
      }

      await sleep(600);
    }
  };

  const animateSearch = async () => {
    const container = searchRef.current;
    if (!container) return;

    const slots = container.querySelectorAll('.hash-slot');
    const items = container.querySelectorAll('.hash-item');

    // First populate the table (instantly)
    const itemsToShow = sampleData.slice(0, 3);
    for (let i = 0; i < itemsToShow.length; i++) {
      const item = itemsToShow[i];
      const hashIndex = hashFunction(item.key);
      const itemElement = items[i];
      
      if (itemElement) {
        itemElement.style.opacity = "1";
        itemElement.style.transform = "scale(1)";
        itemElement.style.backgroundColor = "#f0fdf4";
        itemElement.style.borderColor = "#16a34a";
      }
    }

    await sleep(500);

    // Search for "banana"
    const searchKey = "banana";
    const searchHashIndex = hashFunction(searchKey);

    // Show hash calculation
    const hashDisplay = container.querySelector('.hash-calculation');
    if (hashDisplay) {
      hashDisplay.textContent = `Searching: hash("${searchKey}") = ${searchHashIndex}`;
      await animateElement(hashDisplay, {
        backgroundColor: "#fef3c7",
        color: "#92400e"
      }, 300);
    }

    await sleep(500);

    // Highlight search path
    const targetSlot = slots[searchHashIndex];
    if (targetSlot) {
      await animateElement(targetSlot, {
        backgroundColor: "#fecaca",
        borderColor: "#dc2626",
        transform: "scale(1.05)"
      }, 400);
    }

    const targetItem = items[1]; // banana is second item
    if (targetItem) {
      await animateElement(targetItem, {
        backgroundColor: "#ef4444",
        borderColor: "#dc2626",
        color: "#fff",
        transform: "scale(1.2)",
        boxShadow: "0 0 20px #ef4444"
      }, 600);

      await sleep(1000);

      await animateElement(targetItem, {
        backgroundColor: "#f0fdf4",
        borderColor: "#16a34a",
        color: "#000",
        transform: "scale(1)",
        boxShadow: "none"
      }, 400);
    }

    // Reset highlighting
    if (targetSlot) {
      await animateElement(targetSlot, {
        backgroundColor: "#f9fafb",
        borderColor: "#e5e7eb",
        transform: "scale(1)"
      }, 300);
    }

    if (hashDisplay) {
      hashDisplay.textContent = "Found! O(1) average time complexity";
      await animateElement(hashDisplay, {
        backgroundColor: "#d1fae5",
        color: "#065f46"
      }, 300);
    }
  };

  const animateCollisionHandling = async () => {
    const container = collisionRef.current;
    if (!container) return;

    const slots = container.querySelectorAll('.hash-slot');
    const chains = container.querySelectorAll('.collision-chain');

    // Show items that cause collisions
    const collisionItems = [
      { key: "apple", value: 150 },  // hash = 5
      { key: "grape", value: 95 },   // hash = 5 (collision!)
      { key: "mango", value: 110 }   // hash = 5 (another collision!)
    ];

    for (let i = 0; i < collisionItems.length; i++) {
      const item = collisionItems[i];
      const hashIndex = hashFunction(item.key);

      // Show hash calculation
      const hashDisplay = container.querySelector('.hash-calculation');
      if (hashDisplay) {
        const isCollision = i > 0;
        hashDisplay.textContent = isCollision 
          ? `Collision! hash("${item.key}") = ${hashIndex} (occupied)`
          : `hash("${item.key}") = ${hashIndex}`;
        
        await animateElement(hashDisplay, {
          backgroundColor: isCollision ? "#fee2e2" : "#fef3c7",
          color: isCollision ? "#dc2626" : "#92400e"
        }, 300);
      }

      await sleep(500);

      // Highlight target slot
      const targetSlot = slots[hashIndex];
      if (targetSlot) {
        await animateElement(targetSlot, {
          backgroundColor: i === 0 ? "#dbeafe" : "#fecaca",
          borderColor: i === 0 ? "#3b82f6" : "#dc2626",
          transform: "scale(1.05)"
        }, 400);
      }

      await sleep(300);

      // Show chaining for collisions
      const chain = chains[hashIndex];
      if (chain && i > 0) {
        const chainItem = chain.children[i - 1];
        if (chainItem) {
          await animateElement(chainItem, {
            opacity: "1",
            transform: "scale(1)",
            backgroundColor: "#fbbf24",
            borderColor: "#f59e0b"
          }, 500);
        }
      } else if (i === 0) {
        // First item goes directly in slot
        const slotItem = targetSlot.querySelector('.hash-item');
        if (slotItem) {
          await animateElement(slotItem, {
            opacity: "1",
            transform: "scale(1)",
            backgroundColor: "#10b981",
            borderColor: "#047857",
            color: "#fff"
          }, 500);

          await sleep(300);

          await animateElement(slotItem, {
            backgroundColor: "#f0fdf4",
            color: "#000"
          }, 300);
        }
      }

      // Reset slot highlighting
      if (targetSlot) {
        await animateElement(targetSlot, {
          backgroundColor: "#f9fafb",
          borderColor: "#e5e7eb",
          transform: "scale(1)"
        }, 300);
      }

      await sleep(800);
    }

    // Final message
    const hashDisplay = container.querySelector('.hash-calculation');
    if (hashDisplay) {
      hashDisplay.textContent = "Collision resolved using chaining (linked lists)";
      await animateElement(hashDisplay, {
        backgroundColor: "#d1fae5",
        color: "#065f46"
      }, 300);
    }
  };

  const animateResizing = async () => {
    const container = resizingRef.current;
    if (!container) return;

    const oldTable = container.querySelector('.old-table');
    const newTable = container.querySelector('.new-table');
    const arrow = container.querySelector('.resize-arrow');

    // Show old table with items
    if (oldTable) {
      const oldSlots = oldTable.querySelectorAll('.hash-slot');
      const oldItems = oldTable.querySelectorAll('.hash-item');
      
      // Populate old table
      for (let i = 0; i < 4; i++) {
        const item = oldItems[i];
        if (item) {
          item.style.opacity = "1";
          item.style.transform = "scale(1)";
          item.style.backgroundColor = "#f0fdf4";
        }
      }
    }

    await sleep(1000);

    // Show load factor warning
    const loadFactorDisplay = container.querySelector('.load-factor');
    if (loadFactorDisplay) {
      loadFactorDisplay.textContent = "Load Factor > 0.75 - Time to resize!";
      await animateElement(loadFactorDisplay, {
        backgroundColor: "#fee2e2",
        color: "#dc2626"
      }, 500);
    }

    await sleep(1000);

    // Show arrow and new table
    if (arrow) {
      await animateElement(arrow, {
        opacity: "1",
        transform: "translateX(0)"
      }, 600);
    }

    if (newTable) {
      await animateElement(newTable, {
        opacity: "1",
        transform: "scale(1)"
      }, 600);
    }

    await sleep(500);

    // Animate rehashing items to new positions
    if (newTable) {
      const newItems = newTable.querySelectorAll('.hash-item');
      const rehashData = [
        { key: "apple", oldPos: 0, newPos: 8 },
        { key: "banana", oldPos: 1, newPos: 3 },
        { key: "cherry", oldPos: 2, newPos: 11 },
        { key: "date", oldPos: 6, newPos: 5 }
      ];

      for (let i = 0; i < rehashData.length; i++) {
        const data = rehashData[i];
        const newHashIndex = hashFunction(data.key, RESIZED_TABLE_SIZE);
        
        // Show rehashing calculation
        if (loadFactorDisplay) {
          loadFactorDisplay.textContent = `Rehashing: hash("${data.key}") = ${newHashIndex} (new size: ${RESIZED_TABLE_SIZE})`;
          await animateElement(loadFactorDisplay, {
            backgroundColor: "#fef3c7",
            color: "#92400e"
          }, 300);
        }

        const newItem = newItems[data.newPos];
        if (newItem) {
          await animateElement(newItem, {
            opacity: "1",
            transform: "scale(1.1)",
            backgroundColor: "#3b82f6",
            borderColor: "#1d4ed8",
            color: "#fff"
          }, 500);

          await sleep(300);

          await animateElement(newItem, {
            transform: "scale(1)",
            backgroundColor: "#f0fdf4",
            borderColor: "#16a34a",
            color: "#000"
          }, 300);
        }

        await sleep(400);
      }
    }

    // Final message
    if (loadFactorDisplay) {
      loadFactorDisplay.textContent = "Resizing complete! Load factor reduced, performance maintained";
      await animateElement(loadFactorDisplay, {
        backgroundColor: "#d1fae5",
        color: "#065f46"
      }, 500);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      runAnimations();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const HashSlot = ({ index, children, className = "" }) => (
    <div className={`hash-slot relative flex items-center justify-center w-16 h-16 border-2 border-gray-300 bg-gray-50 rounded transition-all duration-300 ${className}`}>
      <span className="absolute -top-6 text-xs font-semibold text-gray-500">{index}</span>
      {children}
    </div>
  );

  const HashItem = ({ keyName, value, className = "" }) => (
    <div className={`hash-item absolute inset-1 flex flex-col items-center justify-center bg-white border border-gray-300 rounded text-xs font-semibold transition-all duration-300 opacity-0 transform scale-0 ${className}`}>
      <div className="truncate w-full text-center">{keyName}</div>
      <div className="text-gray-500">{value}</div>
    </div>
  );

  const ChainItem = ({ keyName, value, className = "" }) => (
    <div className={`chain-item w-12 h-8 flex flex-col items-center justify-center bg-yellow-100 border border-yellow-400 rounded text-xs font-semibold transition-all duration-300 opacity-0 transform scale-0 ${className}`}>
      <div className="truncate w-full text-center text-xs">{keyName}</div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-end mb-6">
        <button
          onClick={() => runAnimations()}
          disabled={isRunning}
          className={`font-semibold py-2 px-4 rounded shadow transition-colors ${
            isRunning 
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isRunning ? '⏳ Running...' : '🔄 Reset Animation'}
        </button>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
          🗂️ Hash Table Operations
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Explore hash table operations including insertion, search, collision handling, 
          and dynamic resizing. See how hash functions distribute data efficiently.
        </p>
      </div>

      {/* Basic Insertion */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">🔸 Basic Insertion</h3>
        <p className="text-gray-700 mb-6 max-w-3xl">
          Items are inserted using a hash function to determine their position. 
          Average time complexity: <code className="bg-gray-100 px-2 py-1 rounded">O(1)</code>
        </p>
        <div ref={insertionRef} className="bg-gray-50 p-8 rounded-lg">
          <div className="hash-calculation mb-4 p-2 bg-gray-100 rounded text-center font-mono text-sm">
            Hash calculation will appear here
          </div>
          <div className="flex justify-center space-x-2">
            {Array.from({ length: TABLE_SIZE }, (_, i) => (
              <HashSlot key={i} index={i}>
                {i < 3 && <HashItem keyName={sampleData[i].key} value={sampleData[i].value} />}
              </HashSlot>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Watch how keys are hashed to specific positions: apple→5, banana→1, cherry→2
        </p>
      </div>

      {/* Search Operation */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">🔸 Search Operation</h3>
        <p className="text-gray-700 mb-6 max-w-3xl">
          Searching uses the same hash function to locate items directly. 
          No need to scan through all elements! Time complexity: <code className="bg-gray-100 px-2 py-1 rounded">O(1)</code> average
        </p>
        <div ref={searchRef} className="bg-gray-50 p-8 rounded-lg">
          <div className="hash-calculation mb-4 p-2 bg-gray-100 rounded text-center font-mono text-sm">
            Search operation will appear here
          </div>
          <div className="flex justify-center space-x-2">
            {Array.from({ length: TABLE_SIZE }, (_, i) => (
              <HashSlot key={i} index={i}>
                {i < 3 && <HashItem keyName={sampleData[i].key} value={sampleData[i].value} />}
              </HashSlot>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Direct access: hash("banana") = 1 → go to index 1 → found!
        </p>
      </div>

      {/* Collision Handling */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">🔸 Collision Handling (Chaining)</h3>
        <p className="text-gray-700 mb-6 max-w-3xl">
          When multiple keys hash to the same index, we use chaining (linked lists) to store multiple items. 
          Worst case: <code className="bg-gray-100 px-2 py-1 rounded">O(n)</code>, but rare with good hash functions.
        </p>
        <div ref={collisionRef} className="bg-gray-50 p-8 rounded-lg">
          <div className="hash-calculation mb-4 p-2 bg-gray-100 rounded text-center font-mono text-sm">
            Collision handling will appear here
          </div>
          <div className="flex justify-center space-x-2">
            {Array.from({ length: TABLE_SIZE }, (_, i) => (
              <div key={i} className="relative">
                <HashSlot index={i}>
                  {i === 5 && <HashItem keyName="apple" value="150" />}
                </HashSlot>
                {i === 5 && (
                  <div className="collision-chain absolute top-full mt-1 space-y-1">
                    <ChainItem keyName="grape" value="95" />
                    <ChainItem keyName="mango" value="110" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Multiple items at index 5: apple → grape → mango (chained together)
        </p>
      </div>

      {/* Dynamic Resizing */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">🔸 Dynamic Resizing</h3>
        <p className="text-gray-700 mb-6 max-w-3xl">
          When load factor exceeds ~0.75, the table doubles in size and all items are rehashed. 
          This maintains O(1) performance by reducing collisions.
        </p>
        <div ref={resizingRef} className="bg-gray-50 p-8 rounded-lg">
          <div className="load-factor mb-4 p-2 bg-gray-100 rounded text-center font-mono text-sm">
            Load factor monitoring
          </div>
          <div className="flex items-center justify-center space-x-8">
            {/* Old Table */}
            <div className="old-table">
              <div className="text-center mb-2 font-semibold text-sm text-gray-600">Size: 7</div>
              <div className="flex flex-col space-y-1">
                {Array.from({ length: TABLE_SIZE }, (_, i) => (
                  <HashSlot key={i} index={i} className="w-12 h-8">
                    {[0, 1, 2, 6].includes(i) && (
                      <HashItem 
                        keyName={i === 0 ? 'apple' : i === 1 ? 'banana' : i === 2 ? 'cherry' : 'date'} 
                        value={i === 0 ? '150' : i === 1 ? '75' : i === 2 ? '200' : '120'} 
                      />
                    )}
                  </HashSlot>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="resize-arrow opacity-0 transform translate-x-4 transition-all duration-500">
              <div className="text-2xl">→</div>
              <div className="text-xs text-center">Resize</div>
            </div>

            {/* New Table */}
            <div className="new-table opacity-0 transform scale-95 transition-all duration-500">
              <div className="text-center mb-2 font-semibold text-sm text-gray-600">Size: 13</div>
              <div className="grid grid-cols-2 gap-1">
                {Array.from({ length: RESIZED_TABLE_SIZE }, (_, i) => (
                  <HashSlot key={i} index={i} className="w-10 h-6">
                    {[3, 5, 8, 11].includes(i) && (
                      <HashItem 
                        keyName={i === 8 ? 'apple' : i === 3 ? 'banana' : i === 11 ? 'cherry' : 'date'} 
                        value={i === 8 ? '150' : i === 3 ? '75' : i === 11 ? '200' : '120'} 
                      />
                    )}
                  </HashSlot>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Items are rehashed to new positions in the larger table, reducing collisions
        </p>
      </div>

      {/* Additional Info */}
      <div className="bg-purple-50 p-6 rounded-lg">
        <h4 className="text-lg font-semibold mb-3 text-purple-800">🔍 Hash Table Properties</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-700">
          <div>
            <strong>Average Operations:</strong> O(1) for insert, search, delete
          </div>
          <div>
            <strong>Worst Case:</strong> O(n) when many collisions occur
          </div>
          <div>
            <strong>Space Complexity:</strong> O(n) for storing n key-value pairs
          </div>
          <div>
            <strong>Load Factor:</strong> n/m where n = items, m = table size
          </div>
          <div>
            <strong>Good Hash Function:</strong> Uniform distribution, fast computation
          </div>
          <div>
            <strong>Applications:</strong> Databases, caches, symbol tables, sets
          </div>
        </div>
      </div>
    </div>
  );
};

export default HashTableVisualization;