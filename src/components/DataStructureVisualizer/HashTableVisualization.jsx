import { useState, useEffect } from 'react';

const HashTableVisualization = () => {
  const [tableSize, setTableSize] = useState(7);
  const [table, setTable] = useState(Array(7).fill(null).map(() => []));
  const [inputKey, setInputKey] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [animationStep, setAnimationStep] = useState('');
  const [hashValue, setHashValue] = useState(-1);
  const [loadFactor, setLoadFactor] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [lastOperation, setLastOperation] = useState('');
  const [collisionCount, setCollisionCount] = useState(0);

  // Simple hash function
  const hashFunction = (key) => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * (i + 1)) % tableSize;
    }
    return hash;
  };

  // Calculate load factor
  useEffect(() => {
    const items = table.reduce((sum, bucket) => sum + bucket.length, 0);
    setTotalItems(items);
    setLoadFactor(items / tableSize);
  }, [table, tableSize]);

  // Reset table
  const resetTable = () => {
    setTable(Array(tableSize).fill(null).map(() => []));
    setHighlightedIndex(-1);
    setAnimationStep('');
    setHashValue(-1);
    setLastOperation('');
    setCollisionCount(0);
  };

  // Animate hash calculation
  const animateHashCalculation = async (key) => {
    setIsAnimating(true);
    setAnimationStep('Calculating hash...');
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const hash = hashFunction(key);
    setHashValue(hash);
    setAnimationStep(`Hash(${key}) = ${hash}`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setHighlightedIndex(hash);
    setAnimationStep(`Index: ${hash}`);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return hash;
  };

  // Insert operation
  const insertItem = async () => {
    if (!inputKey || !inputValue) return;
    
    const hash = await animateHashCalculation(inputKey);
    
    setAnimationStep('Checking for collisions...');
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const newTable = [...table];
    const bucket = newTable[hash];
    
    // Check if key already exists
    const existingIndex = bucket.findIndex(([k]) => k === inputKey);
    if (existingIndex !== -1) {
      bucket[existingIndex] = [inputKey, inputValue];
      setAnimationStep('Key updated!');
      setLastOperation(`Updated: ${inputKey} = ${inputValue}`);
    } else {
      if (bucket.length > 0) {
        setCollisionCount(prev => prev + 1);
        setAnimationStep('Collision detected! Using chaining...');
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      bucket.push([inputKey, inputValue]);
      setAnimationStep('Item inserted!');
      setLastOperation(`Inserted: ${inputKey} = ${inputValue}`);
    }
    
    setTable(newTable);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if resize is needed
    const newLoadFactor = (totalItems + 1) / tableSize;
    if (newLoadFactor > 0.75) {
      setAnimationStep('Load factor > 0.75, resizing table...');
      await new Promise(resolve => setTimeout(resolve, 1500));
      await resizeTable();
    }
    
    setInputKey('');
    setInputValue('');
    setIsAnimating(false);
    setHighlightedIndex(-1);
    setAnimationStep('');
    setHashValue(-1);
  };

  // Search operation
  const searchItem = async () => {
    if (!searchKey) return;
    
    const hash = await animateHashCalculation(searchKey);
    
    setAnimationStep('Searching in bucket...');
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const bucket = table[hash];
    const found = bucket.find(([k]) => k === searchKey);
    
    if (found) {
      setAnimationStep(`Found: ${searchKey} = ${found[1]}`);
      setLastOperation(`Found: ${searchKey} = ${found[1]}`);
    } else {
      setAnimationStep(`Key "${searchKey}" not found`);
      setLastOperation(`Not found: ${searchKey}`);
    }
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSearchKey('');
    setIsAnimating(false);
    setHighlightedIndex(-1);
    setAnimationStep('');
    setHashValue(-1);
  };

  // Delete operation
  const deleteItem = async (key) => {
    const hash = await animateHashCalculation(key);
    
    setAnimationStep('Searching for item to delete...');
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const newTable = [...table];
    const bucket = newTable[hash];
    const itemIndex = bucket.findIndex(([k]) => k === key);
    
    if (itemIndex !== -1) {
      bucket.splice(itemIndex, 1);
      setTable(newTable);
      setAnimationStep(`Deleted: ${key}`);
      setLastOperation(`Deleted: ${key}`);
    } else {
      setAnimationStep(`Key "${key}" not found`);
      setLastOperation(`Delete failed: ${key} not found`);
    }
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsAnimating(false);
    setHighlightedIndex(-1);
    setAnimationStep('');
    setHashValue(-1);
  };

  // Resize table
  const resizeTable = async () => {
    const oldTable = table;
    const newSize = tableSize * 2;
    const newTable = Array(newSize).fill(null).map(() => []);
    
    setTableSize(newSize);
    setTable(newTable);
    setAnimationStep(`Resizing to ${newSize} buckets...`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Rehash all items
    for (let i = 0; i < oldTable.length; i++) {
      for (const [key, value] of oldTable[i]) {
        const newHash = key.split('').reduce((hash, char, idx) => 
          (hash + char.charCodeAt(0) * (idx + 1)) % newSize, 0);
        newTable[newHash].push([key, value]);
        
        setHighlightedIndex(newHash);
        setAnimationStep(`Rehashing: ${key} → index ${newHash}`);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
    
    setTable(newTable);
    setAnimationStep('Resize complete!');
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  // Get bucket color based on content
  const getBucketColor = (bucket, index) => {
    if (highlightedIndex === index) {
      return 'bg-yellow-300 border-yellow-500 animate-pulse';
    }
    if (bucket.length === 0) {
      return 'bg-gray-100 border-gray-300';
    }
    if (bucket.length === 1) {
      return 'bg-green-200 border-green-400';
    }
    return 'bg-orange-200 border-orange-400'; // Collision
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Interactive Hash Table</h2>
        <p className="text-gray-600">Visualize insertions, searches, collisions, and dynamic resizing</p>
      </div>

      {/* Controls */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {/* Insert */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
            <span className="mr-1">➕</span> Insert
          </h3>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Key"
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
              className="w-full px-3 py-1 border rounded text-sm"
              disabled={isAnimating}
            />
            <input
              type="text"
              placeholder="Value"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-3 py-1 border rounded text-sm"
              disabled={isAnimating}
            />
            <button
              onClick={insertItem}
              disabled={isAnimating || !inputKey || !inputValue}
              className="w-full bg-blue-600 text-white py-1 px-3 rounded text-sm hover:bg-blue-700 disabled:opacity-50"
            >
              Insert
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-2 flex items-center">
            <span className="mr-1">🔍</span> Search
          </h3>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Search key"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              className="w-full px-3 py-1 border rounded text-sm"
              disabled={isAnimating}
            />
            <button
              onClick={searchItem}
              disabled={isAnimating || !searchKey}
              className="w-full bg-green-600 text-white py-1 px-3 rounded text-sm hover:bg-green-700 disabled:opacity-50"
            >
              Search
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
            <span className="mr-1">🔄</span> Controls
          </h3>
          <div className="space-y-2">
            <button
              onClick={resetTable}
              disabled={isAnimating}
              className="w-full bg-gray-600 text-white py-1 px-3 rounded text-sm hover:bg-gray-700 disabled:opacity-50"
            >
              Reset Table
            </button>
            <button
              onClick={() => resizeTable()}
              disabled={isAnimating || totalItems === 0}
              className="w-full bg-purple-600 text-white py-1 px-3 rounded text-sm hover:bg-purple-700 disabled:opacity-50 flex items-center justify-center"
            >
              <span className="mr-1">⚡</span> Force Resize
            </button>
          </div>
        </div>
      </div>

      {/* Status Panel */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="font-semibold text-gray-700">Table Size:</span>
            <span className="ml-2 text-blue-600">{tableSize}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Items:</span>
            <span className="ml-2 text-green-600">{totalItems}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Load Factor:</span>
            <span className={`ml-2 ${loadFactor > 0.75 ? 'text-red-600 font-bold' : 'text-orange-600'}`}>
              {loadFactor.toFixed(2)}
            </span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Collisions:</span>
            <span className="ml-2 text-purple-600">{collisionCount}</span>
          </div>
        </div>
        
        {hashValue !== -1 && (
          <div className="mt-2 text-sm">
            <span className="font-semibold text-gray-700">Hash Value:</span>
            <span className="ml-2 text-red-600 font-mono">{hashValue}</span>
          </div>
        )}
        
        {animationStep && (
          <div className="mt-2 p-2 bg-blue-100 rounded text-sm text-blue-800 font-medium">
            {animationStep}
          </div>
        )}
        
        {lastOperation && !animationStep && (
          <div className="mt-2 p-2 bg-green-100 rounded text-sm text-green-800">
            Last: {lastOperation}
          </div>
        )}
      </div>

      {/* Hash Table Visualization */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">Hash Table Contents</h3>
        <div className="grid grid-cols-1 gap-2">
          {table.map((bucket, index) => (
            <div key={index} className="flex items-center gap-3">
              {/* Index */}
              <div className="w-12 text-center text-sm font-mono text-gray-500">
                {index}
              </div>
              
              {/* Bucket */}
              <div className={`min-h-12 p-2 border-2 rounded-md flex-1 transition-all duration-300 ${getBucketColor(bucket, index)}`}>
                {bucket.length === 0 ? (
                  <div className="text-gray-400 text-sm">empty</div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {bucket.map(([key, value], pairIndex) => (
                      <div key={pairIndex} className="flex items-center gap-2">
                        <div className="bg-white px-2 py-1 rounded border text-sm font-mono">
                          {key}: {value}
                        </div>
                        <button
                          onClick={() => deleteItem(key)}
                          disabled={isAnimating}
                          className="text-red-500 hover:text-red-700 disabled:opacity-50 text-sm"
                          title="Delete this item"
                        >
                          ❌
                        </button>
                        {pairIndex < bucket.length - 1 && (
                          <span className="text-gray-400">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Chain indicator */}
              {bucket.length > 1 && (
                <div className="text-xs text-orange-600 font-semibold">
                  Chain ({bucket.length})
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
          <span className="mr-1">ℹ️</span> Legend
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded"></div>
            <span>Empty bucket</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-200 border border-green-400 rounded"></div>
            <span>Single item</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-200 border border-orange-400 rounded"></div>
            <span>Collision (chain)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-300 border border-yellow-500 rounded"></div>
            <span>Currently highlighted</span>
          </div>
        </div>
        
        <div className="mt-3 text-xs text-gray-600">
          <p><strong>Tips:</strong> Try inserting keys like "apple", "banana", "cherry" to see collisions. 
          The table automatically resizes when load factor exceeds 0.75.</p>
        </div>
      </div>

      {/* Sample Data Button */}
      <div className="mt-4 text-center">
        <button
          onClick={async () => {
            const sampleData = [
              ['apple', '150'], ['banana', '75'], ['cherry', '200'], 
              ['date', '120'], ['elderberry', '90'], ['fig', '80']
            ];
            
            for (const [key, value] of sampleData) {
              setInputKey(key);
              setInputValue(value);
              await new Promise(resolve => setTimeout(resolve, 100));
              await insertItem();
              await new Promise(resolve => setTimeout(resolve, 500));
            }
          }}
          disabled={isAnimating}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
        >
          Load Sample Data
        </button>
      </div>
    </div>
  );
};

export default HashTableVisualization;