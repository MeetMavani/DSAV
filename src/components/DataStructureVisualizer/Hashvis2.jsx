import { useEffect, useRef, useState } from "react";

// Hash table configuration
const TABLE_SIZE = 7;
const RESIZED_TABLE_SIZE = 13;

const HashTableVisualization = () => {
  const insertionRef = useRef();
  const searchRef = useRef();
  const collisionRef = useRef();
  const resizingRef = useRef();
  
  const [isRunning, setIsRunning] = useState(false);
  const [insertionTable, setInsertionTable] = useState(Array(TABLE_SIZE).fill({ key: "", value: "" }));

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
          item.style.color = "#000";
          item.style.boxShadow = "none";
          // Clear content
          const keyDiv = item.querySelector('.item-key');
          const valueDiv = item.querySelector('.item-value');
          if (keyDiv) keyDiv.textContent = "";
          if (valueDiv) valueDiv.textContent = "";
        });

        // Reset chain items
        const chainItems = ref.current.querySelectorAll('.chain-item');
        chainItems.forEach(item => {
          item.style.opacity = "0";
          item.style.transform = "scale(0)";
          // Clear content
          const keyDiv = item.querySelector('.item-key');
          const valueDiv = item.querySelector('.item-value');
          if (keyDiv) keyDiv.textContent = "";
          if (valueDiv) valueDiv.textContent = "";
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
    const itemsToInsert = sampleData.slice(0, 3);

    // Reset insertionTable state before animation
    setInsertionTable(Array(TABLE_SIZE).fill({ key: "", value: "" }));

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

      // Find the hash item inside the target slot
      const itemElement = targetSlot.querySelector('.hash-item');
      if (itemElement) {
        // Set the content FIRST, before making it visible
        const keyDiv = itemElement.querySelector('.item-key');
        const valueDiv = itemElement.querySelector('.item-value');
        if (keyDiv) keyDiv.textContent = item.key;
        if (valueDiv) valueDiv.textContent = item.value;
        
        // Then animate it
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

      // Update React state to show the value
      setInsertionTable(prev => {
        const newTable = [...prev];
        newTable[hashIndex] = { key: item.key, value: item.value };
        return newTable;
      });

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

    // First populate the table (instantly)
    const itemsToShow = sampleData.slice(0, 3);
    for (let i = 0; i < itemsToShow.length; i++) {
      const item = itemsToShow[i];
      const hashIndex = hashFunction(item.key);
      const targetSlot = slots[hashIndex];
      const itemElement = targetSlot?.querySelector('.hash-item');
      
      if (itemElement) {
        // Set content
        const keyDiv = itemElement.querySelector('.item-key');
        const valueDiv = itemElement.querySelector('.item-value');
        if (keyDiv) keyDiv.textContent = item.key;
        if (valueDiv) valueDiv.textContent = item.value;
        
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

    const targetItem = targetSlot?.querySelector('.hash-item');
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

    // Show items that cause collisions - using items that actually hash to same value
    const appleHash = hashFunction("apple");
    const collisionItems = [
      { key: "apple", value: 150 },
      { key: "grape", value: 95 }, 
      { key: "mango", value: 110 }
    ];

    for (let i = 0; i < collisionItems.length; i++) {
      const item = collisionItems[i];
      // Force all items to hash to same index as apple for demonstration
      const hashIndex = appleHash;

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
          // Set content for chain item FIRST
          const keyDiv = chainItem.querySelector('.item-key');
          const valueDiv = chainItem.querySelector('.item-value');
          if (keyDiv) keyDiv.textContent = item.key;
          if (valueDiv) valueDiv.textContent = item.value;

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
          // Set content FIRST
          const keyDiv = slotItem.querySelector('.item-key');
          const valueDiv = slotItem.querySelector('.item-value');
          if (keyDiv) keyDiv.textContent = item.key;
          if (valueDiv) valueDiv.textContent = item.value;

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
      
      // Populate old table at correct hash positions
      const itemsToShow = sampleData.slice(0, 4);
      itemsToShow.forEach((item) => {
        const hashIndex = hashFunction(item.key, TABLE_SIZE);
        const targetSlot = oldSlots[hashIndex];
        const itemElement = targetSlot?.querySelector('.hash-item');
        if (itemElement) {
          const keyDiv = itemElement.querySelector('.item-key');
          const valueDiv = itemElement.querySelector('.item-value');
          if (keyDiv) keyDiv.textContent = item.key;
          if (valueDiv) valueDiv.textContent = item.value;
          
          itemElement.style.opacity = "1";
          itemElement.style.transform = "scale(1)";
          itemElement.style.backgroundColor = "#f0fdf4";
        }
      });
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
      const newSlots = newTable.querySelectorAll('.hash-slot');
      const itemsToRehash = sampleData.slice(0, 4);

      for (let i = 0; i < itemsToRehash.length; i++) {
        const item = itemsToRehash[i];
        const newHashIndex = hashFunction(item.key, RESIZED_TABLE_SIZE);
        
        // Show rehashing calculation
        if (loadFactorDisplay) {
          loadFactorDisplay.textContent = `Rehashing: hash("${item.key}") = ${newHashIndex} (new size: ${RESIZED_TABLE_SIZE})`;
          await animateElement(loadFactorDisplay, {
            backgroundColor: "#fef3c7",
            color: "#92400e"
          }, 300);
        }

        const targetSlot = newSlots[newHashIndex];
        const newItem = targetSlot?.querySelector('.hash-item');
        if (newItem) {
          // Set content FIRST
          const keyDiv = newItem.querySelector('.item-key');
          const valueDiv = newItem.querySelector('.item-value');
          if (keyDiv) keyDiv.textContent = item.key;
          if (valueDiv) valueDiv.textContent = item.value;

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
      <div className="item-key truncate w-full text-center px-1 leading-tight text-xs">{keyName}</div>
      <div className="item-value text-gray-500 text-xs leading-tight">{value}</div>
    </div>
  );

  const ChainItem = ({ keyName, value, className = "" }) => (
    <div className={`chain-item w-14 h-10 flex flex-col items-center justify-center bg-yellow-100 border border-yellow-400 rounded text-xs font-semibold transition-all duration-300 opacity-0 transform scale-0 ${className}`}>
      <div className="item-key truncate w-full text-center text-xs px-1 leading-tight">{keyName}</div>
      <div className="item-value text-yellow-600 text-xs leading-tight">{value}</div>
    </div>
  );

  // Calculate hash positions for display
  const getHashPositions = (tableSize = TABLE_SIZE) => {
    return sampleData.map(item => ({
      ...item,
      hash: hashFunction(item.key, tableSize)
    }));
  };

  const insertionPositions = getHashPositions().slice(0, 3);
  const searchPositions = getHashPositions().slice(0, 3);
  const oldTablePositions = getHashPositions().slice(0, 4);
  const newTablePositions = getHashPositions(RESIZED_TABLE_SIZE).slice(0, 4);

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
                <HashItem keyName={insertionTable[i].key} value={insertionTable[i].value} />
              </HashSlot>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Watch how keys are hashed to specific positions: {insertionPositions.map(item => `${item.key}→${item.hash}`).join(', ')}
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
                <HashItem keyName="" value="" />
              </HashSlot>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Direct access: hash("banana") = {hashFunction("banana")} → go to index {hashFunction("banana")} → found!
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
                  <HashItem keyName="" value="" />
                </HashSlot>
                {i === hashFunction("apple") && (
                  <div className="collision-chain absolute top-full mt-1 space-y-1">
                    <ChainItem keyName="" value="" />
                    <ChainItem keyName="" value="" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Multiple items at index {hashFunction("apple")}: apple → grape → mango (chained together)
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
                    <HashItem keyName="" value="" />
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
                    <HashItem keyName="" value="" />
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