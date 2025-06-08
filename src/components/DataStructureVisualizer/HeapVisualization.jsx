import { useEffect, useRef, useState } from "react";

const HeapVisualization = () => {
  const insertionRef = useRef();
  const extractionRef = useRef();
  const heapifyRef = useRef();
  const sortRef = useRef();
  
  const [isRunning, setIsRunning] = useState(false);
  const [heapType, setHeapType] = useState('min'); // 'min' or 'max'

  // Sample data for operations
  const sampleData = [42, 15, 28, 7, 31, 19, 8, 12, 25, 4];
  const heapifyData = [35, 20, 15, 40, 25, 10, 8, 30];

  // Heap operations
  const getParentIndex = (i) => Math.floor((i - 1) / 2);
  const getLeftChildIndex = (i) => 2 * i + 1;
  const getRightChildIndex = (i) => 2 * i + 2;

  const shouldSwap = (parent, child, isMinHeap) => {
    if (isMinHeap) return parent > child;
    return parent < child;
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

  const highlightElement = async (element, color = "#ef4444", duration = 500) => {
    if (!element) return;
    
    await animateElement(element, {
      backgroundColor: color,
      borderColor: color,
      color: "#fff",
      transform: "scale(1.2)",
      boxShadow: `0 0 20px ${color}`
    }, duration);
    
    await sleep(300);
    
    await animateElement(element, {
      backgroundColor: "#f0fdf4",
      borderColor: "#16a34a",
      color: "#000",
      transform: "scale(1)",
      boxShadow: "none"
    }, 300);
  };

  const swapElements = async (elem1, elem2, duration = 600) => {
    if (!elem1 || !elem2) return;
    
    const elem1Rect = elem1.getBoundingClientRect();
    const elem2Rect = elem2.getBoundingClientRect();
    
    const deltaX1 = elem2Rect.left - elem1Rect.left;
    const deltaY1 = elem2Rect.top - elem1Rect.top;
    const deltaX2 = elem1Rect.left - elem2Rect.left;
    const deltaY2 = elem1Rect.top - elem2Rect.top;
    
    // Animate the swap
    await Promise.all([
      animateElement(elem1, {
        transform: `translate(${deltaX1}px, ${deltaY1}px) scale(1.1)`,
        backgroundColor: "#fbbf24",
        zIndex: "10"
      }, duration),
      animateElement(elem2, {
        transform: `translate(${deltaX2}px, ${deltaY2}px) scale(1.1)`,
        backgroundColor: "#fbbf24",
        zIndex: "10"
      }, duration)
    ]);
    
    // Swap the text content
    const temp = elem1.textContent;
    elem1.textContent = elem2.textContent;
    elem2.textContent = temp;
    
    // Reset positions
    await Promise.all([
      animateElement(elem1, {
        transform: "translate(0, 0) scale(1)",
        backgroundColor: "#f0fdf4",
        zIndex: "1"
      }, 300),
      animateElement(elem2, {
        transform: "translate(0, 0) scale(1)",
        backgroundColor: "#f0fdf4",
        zIndex: "1"
      }, 300)
    ]);
  };

  const runAnimations = async () => {
    if (isRunning) return;
    setIsRunning(true);

    // Reset all visualizations
    [insertionRef, extractionRef, heapifyRef, sortRef].forEach(ref => {
      if (ref.current) {
        const nodes = ref.current.querySelectorAll('.heap-node');
        const edges = ref.current.querySelectorAll('.heap-edge');
        
        nodes.forEach(node => {
          node.style.opacity = "0";
          node.style.transform = "scale(0)";
          node.style.backgroundColor = "#fff";
          node.style.borderColor = "#d1d5db";
        });
        
        edges.forEach(edge => {
          edge.style.opacity = "0";
        });
      }
    });

    await sleep(500);

    // Run all animations in sequence
    await animateInsertion();
    await sleep(2000);
    
    await animateExtraction();
    await sleep(2000);
    
    await animateHeapify();
    await sleep(2000);
    
    await animateHeapSort();
    
    setIsRunning(false);
  };

  const animateInsertion = async () => {
    const container = insertionRef.current;
    if (!container) return;

    const nodes = container.querySelectorAll('.heap-node');
    const edges = container.querySelectorAll('.heap-edge');
    const statusDisplay = container.querySelector('.operation-status');

    // Build heap step by step
    const insertValues = [15, 28, 7, 31, 19];
    const heap = [];

    for (let i = 0; i < insertValues.length; i++) {
      const value = insertValues[i];
      heap.push(value);

      // Show status
      if (statusDisplay) {
        statusDisplay.textContent = `Inserting ${value} into ${heapType}-heap`;
        await animateElement(statusDisplay, {
          backgroundColor: "#fef3c7",
          color: "#92400e"
        }, 300);
      }

      // Show new node
      const newNodeIndex = heap.length - 1;
      const newNode = nodes[newNodeIndex];
      if (newNode) {
        newNode.textContent = value;
        await animateElement(newNode, {
          opacity: "1",
          transform: "scale(1.2)",
          backgroundColor: "#3b82f6",
          borderColor: "#1d4ed8",
          color: "#fff"
        }, 500);
      }

      // Show edge to parent if not root
      if (newNodeIndex > 0) {
        const parentIndex = getParentIndex(newNodeIndex);
        const edgeIndex = newNodeIndex - 1; // Edge indices are offset
        const edge = edges[edgeIndex];
        if (edge) {
          await animateElement(edge, { opacity: "1" }, 300);
        }
      }

      await sleep(300);

      // Bubble up to maintain heap property
      let currentIndex = newNodeIndex;
      while (currentIndex > 0) {
        const parentIndex = getParentIndex(currentIndex);
        const currentValue = parseInt(nodes[currentIndex].textContent);
        const parentValue = parseInt(nodes[parentIndex].textContent);

        if (!shouldSwap(parentValue, currentValue, heapType === 'min')) {
          break;
        }

        // Highlight the comparison
        await Promise.all([
          highlightElement(nodes[currentIndex], "#f59e0b", 300),
          highlightElement(nodes[parentIndex], "#ef4444", 300)
        ]);

        // Perform the swap
        await swapElements(nodes[currentIndex], nodes[parentIndex]);

        // Update heap array
        [heap[currentIndex], heap[parentIndex]] = [heap[parentIndex], heap[currentIndex]];
        currentIndex = parentIndex;
      }

      // Reset new node styling
      if (newNode) {
        await animateElement(newNode, {
          transform: "scale(1)",
          backgroundColor: "#f0fdf4",
          borderColor: "#16a34a",
          color: "#000"
        }, 300);
      }

      await sleep(500);
    }

    if (statusDisplay) {
      statusDisplay.textContent = `${heapType}-heap construction complete!`;
      await animateElement(statusDisplay, {
        backgroundColor: "#d1fae5",
        color: "#065f46"
      }, 300);
    }
  };

  const animateExtraction = async () => {
    const container = extractionRef.current;
    if (!container) return;

    const nodes = container.querySelectorAll('.heap-node');
    const edges = container.querySelectorAll('.heap-edge');
    const statusDisplay = container.querySelector('.operation-status');

    // Initialize heap with pre-built state
    const heap = heapType === 'min' ? [7, 15, 19, 28, 31] : [31, 28, 19, 15, 7];
    
    // Show initial heap
    for (let i = 0; i < heap.length; i++) {
      const node = nodes[i];
      if (node) {
        node.textContent = heap[i];
        node.style.opacity = "1";
        node.style.transform = "scale(1)";
        node.style.backgroundColor = "#f0fdf4";
        node.style.borderColor = "#16a34a";
      }
      
      if (i > 0) {
        const edge = edges[i - 1];
        if (edge) edge.style.opacity = "1";
      }
    }

    await sleep(500);

    // Extract root (min/max element)
    const rootValue = heap[0];
    if (statusDisplay) {
      statusDisplay.textContent = `Extracting ${heapType === 'min' ? 'minimum' : 'maximum'}: ${rootValue}`;
      await animateElement(statusDisplay, {
        backgroundColor: "#fee2e2",
        color: "#dc2626"
      }, 300);
    }

    // Highlight root
    await highlightElement(nodes[0], "#dc2626", 600);

    // Move last element to root
    const lastIndex = heap.length - 1;
    const lastValue = heap[lastIndex];
    
    await animateElement(nodes[lastIndex], {
      opacity: "0",
      transform: "scale(0)"
    }, 400);

    nodes[0].textContent = lastValue;
    heap[0] = lastValue;
    heap.pop();

    await highlightElement(nodes[0], "#3b82f6", 400);

    // Heapify down
    let currentIndex = 0;
    while (true) {
      const leftChild = getLeftChildIndex(currentIndex);
      const rightChild = getRightChildIndex(currentIndex);
      let targetIndex = currentIndex;

      // Find the appropriate child to swap with
      if (leftChild < heap.length) {
        const currentValue = parseInt(nodes[currentIndex].textContent);
        const leftValue = parseInt(nodes[leftChild].textContent);
        
        if (shouldSwap(currentValue, leftValue, heapType === 'min')) {
          targetIndex = leftChild;
        }
      }

      if (rightChild < heap.length) {
        const targetValue = parseInt(nodes[targetIndex].textContent);
        const rightValue = parseInt(nodes[rightChild].textContent);
        
        if (shouldSwap(targetValue, rightValue, heapType === 'min')) {
          targetIndex = rightChild;
        }
      }

      if (targetIndex === currentIndex) break;

      // Highlight comparison
      await Promise.all([
        highlightElement(nodes[currentIndex], "#ef4444", 300),
        highlightElement(nodes[targetIndex], "#f59e0b", 300)
      ]);

      // Perform swap
      await swapElements(nodes[currentIndex], nodes[targetIndex]);
      [heap[currentIndex], heap[targetIndex]] = [heap[targetIndex], heap[currentIndex]];
      currentIndex = targetIndex;
    }

    if (statusDisplay) {
      statusDisplay.textContent = `Extraction complete! Heap property maintained`;
      await animateElement(statusDisplay, {
        backgroundColor: "#d1fae5",
        color: "#065f46"
      }, 300);
    }
  };

  const animateHeapify = async () => {
    const container = heapifyRef.current;
    if (!container) return;

    const nodes = container.querySelectorAll('.heap-node');
    const statusDisplay = container.querySelector('.operation-status');

    // Show unsorted array
    for (let i = 0; i < heapifyData.length; i++) {
      const node = nodes[i];
      if (node) {
        node.textContent = heapifyData[i];
        await animateElement(node, {
          opacity: "1",
          transform: "scale(1)",
          backgroundColor: "#fecaca",
          borderColor: "#dc2626"
        }, 100);
      }
    }

    if (statusDisplay) {
      statusDisplay.textContent = "Converting unsorted array to heap...";
      await animateElement(statusDisplay, {
        backgroundColor: "#fef3c7",
        color: "#92400e"
      }, 300);
    }

    await sleep(1000);

    // Heapify from bottom up (last non-leaf node to root)
    const heap = [...heapifyData];
    const startIndex = Math.floor(heap.length / 2) - 1;

    for (let i = startIndex; i >= 0; i--) {
      await heapifyDown(nodes, heap, i, statusDisplay);
      await sleep(600);
    }

    if (statusDisplay) {
      statusDisplay.textContent = `Array successfully heapified into ${heapType}-heap!`;
      await animateElement(statusDisplay, {
        backgroundColor: "#d1fae5",
        color: "#065f46"
      }, 300);
    }
  };

  const heapifyDown = async (nodes, heap, startIndex, statusDisplay) => {
    let currentIndex = startIndex;

    if (statusDisplay) {
      statusDisplay.textContent = `Heapifying from index ${startIndex}`;
    }

    // Highlight current node
    await highlightElement(nodes[currentIndex], "#8b5cf6", 400);

    while (true) {
      const leftChild = getLeftChildIndex(currentIndex);
      const rightChild = getRightChildIndex(currentIndex);
      let targetIndex = currentIndex;

      // Find target child to potentially swap with
      if (leftChild < heap.length) {
        if (shouldSwap(heap[targetIndex], heap[leftChild], heapType === 'min')) {
          targetIndex = leftChild;
        }
      }

      if (rightChild < heap.length) {
        if (shouldSwap(heap[targetIndex], heap[rightChild], heapType === 'min')) {
          targetIndex = rightChild;
        }
      }

      if (targetIndex === currentIndex) break;

      // Highlight comparison
      await Promise.all([
        highlightElement(nodes[currentIndex], "#ef4444", 300),
        highlightElement(nodes[targetIndex], "#f59e0b", 300)
      ]);

      // Perform swap
      await swapElements(nodes[currentIndex], nodes[targetIndex]);
      [heap[currentIndex], heap[targetIndex]] = [heap[targetIndex], heap[currentIndex]];
      currentIndex = targetIndex;
    }
  };

  const animateHeapSort = async () => {
    const container = sortRef.current;
    if (!container) return;

    const nodes = container.querySelectorAll('.heap-node');
    const statusDisplay = container.querySelector('.operation-status');
    const sortedArray = container.querySelector('.sorted-array');

    // Initialize with max-heap for ascending sort
    const heap = [40, 35, 30, 25, 20, 15, 10, 8];
    const sorted = [];

    // Show initial max-heap
    for (let i = 0; i < heap.length; i++) {
      const node = nodes[i];
      if (node) {
        node.textContent = heap[i];
        node.style.opacity = "1";
        node.style.transform = "scale(1)";
        node.style.backgroundColor = "#f0fdf4";
        node.style.borderColor = "#16a34a";
      }
    }

    if (statusDisplay) {
      statusDisplay.textContent = "Starting heap sort (max-heap → ascending order)";
      await animateElement(statusDisplay, {
        backgroundColor: "#fef3c7",
        color: "#92400e"
      }, 300);
    }

    await sleep(1000);

    // Heap sort process
    for (let i = heap.length - 1; i >= 0; i--) {
      // Extract maximum (root)
      const maxValue = heap[0];
      
      if (statusDisplay) {
        statusDisplay.textContent = `Extracting maximum: ${maxValue}`;
      }

      // Highlight root
      await highlightElement(nodes[0], "#dc2626", 400);

      // Move to sorted array
      sorted.unshift(maxValue);
      
      // Move last element to root
      if (i > 0) {
        heap[0] = heap[i];
        nodes[0].textContent = heap[0];
        
        // Hide the last node
        await animateElement(nodes[i], {
          opacity: "0.3",
          backgroundColor: "#d1fae5",
          borderColor: "#16a34a"
        }, 300);

        // Heapify down with reduced heap size
        await heapifyDownSort(nodes, heap, 0, i);
      } else {
        // Last element
        await animateElement(nodes[0], {
          opacity: "0.3",
          backgroundColor: "#d1fae5",
          borderColor: "#16a34a"
        }, 300);
      }

      // Update sorted display
      if (sortedArray) {
        sortedArray.textContent = `Sorted: [${sorted.join(', ')}]`;
        await animateElement(sortedArray, {
          backgroundColor: "#d1fae5",
          color: "#065f46"
        }, 200);
      }

      await sleep(800);
    }

    if (statusDisplay) {
      statusDisplay.textContent = "Heap sort complete! Array is now sorted";
      await animateElement(statusDisplay, {
        backgroundColor: "#d1fae5",
        color: "#065f46"
      }, 300);
    }
  };

  const heapifyDownSort = async (nodes, heap, startIndex, heapSize) => {
    let currentIndex = startIndex;

    while (true) {
      const leftChild = getLeftChildIndex(currentIndex);
      const rightChild = getRightChildIndex(currentIndex);
      let largest = currentIndex;

      // Find largest among parent and children (max-heap)
      if (leftChild < heapSize && heap[leftChild] > heap[largest]) {
        largest = leftChild;
      }

      if (rightChild < heapSize && heap[rightChild] > heap[largest]) {
        largest = rightChild;
      }

      if (largest === currentIndex) break;

      // Perform swap
      await swapElements(nodes[currentIndex], nodes[largest]);
      [heap[currentIndex], heap[largest]] = [heap[largest], heap[currentIndex]];
      currentIndex = largest;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      runAnimations();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [heapType]);

  const HeapNode = ({ value, index, className = "" }) => (
    <div className={`heap-node absolute w-12 h-12 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full font-bold text-sm transition-all duration-300 opacity-0 transform scale-0 ${className}`}>
      {value}
    </div>
  );

  const HeapEdge = ({ className = "" }) => (
    <div className={`heap-edge absolute bg-gray-400 transition-all duration-300 opacity-0 ${className}`} />
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setHeapType(heapType === 'min' ? 'max' : 'min')}
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded shadow transition-colors"
          >
            Switch to {heapType === 'min' ? 'Max' : 'Min'}-Heap
          </button>
          <span className="text-sm text-gray-600">
            Current: <span className="font-semibold capitalize">{heapType}-Heap</span>
          </span>
        </div>
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
          🌳 Heap Data Structure Operations
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Explore heap operations including insertion, extraction, heapification, 
          and heap sort. See how the heap property is maintained through tree operations.
        </p>
      </div>

      {/* Heap Insertion */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">🔸 Heap Insertion</h3>
        <p className="text-gray-700 mb-6 max-w-3xl">
          New elements are added at the bottom and bubbled up to maintain the heap property. 
          Time complexity: <code className="bg-gray-100 px-2 py-1 rounded">O(log n)</code>
        </p>
        <div ref={insertionRef} className="bg-gray-50 p-8 rounded-lg">
          <div className="operation-status mb-4 p-2 bg-gray-100 rounded text-center font-mono text-sm">
            Insertion operations will appear here
          </div>
          <div className="relative h-64 flex items-center justify-center">
            {/* Tree structure for 5 levels */}
            {/* Level 0 - Root */}
            <HeapNode index={0} className="top-4 left-1/2 transform -translate-x-1/2" />
            
            {/* Level 1 */}
            <HeapNode index={1} className="top-16 left-1/3 transform -translate-x-1/2" />
            <HeapNode index={2} className="top-16 right-1/3 transform translate-x-1/2" />
            
            {/* Level 2 */}
            <HeapNode index={3} className="top-28 left-1/6" />
            <HeapNode index={4} className="top-28 left-2/5" />
            
            {/* Edges */}
            <HeapEdge className="top-10 left-1/2 w-16 h-0.5 transform -translate-x-1/2 -rotate-45 origin-left" />
            <HeapEdge className="top-10 left-1/2 w-16 h-0.5 transform -translate-x-1/2 rotate-45 origin-left" />
            <HeapEdge className="top-22 left-1/3 w-12 h-0.5 transform -translate-x-1/2 -rotate-45 origin-left" />
            <HeapEdge className="top-22 left-1/3 w-12 h-0.5 transform -translate-x-1/2 rotate-45 origin-left" />
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Elements bubble up: 15→28→7→31→19 (maintaining {heapType}-heap property)
        </p>
      </div>

      {/* Extract Min/Max */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">🔸 Extract {heapType === 'min' ? 'Minimum' : 'Maximum'}</h3>
        <p className="text-gray-700 mb-6 max-w-3xl">
          The root element ({heapType === 'min' ? 'minimum' : 'maximum'}) is removed and replaced with the last element, 
          then heapified down. Time complexity: <code className="bg-gray-100 px-2 py-1 rounded">O(log n)</code>
        </p>
        <div ref={extractionRef} className="bg-gray-50 p-8 rounded-lg">
          <div className="operation-status mb-4 p-2 bg-gray-100 rounded text-center font-mono text-sm">
            Extraction operations will appear here
          </div>
          <div className="relative h-64 flex items-center justify-center">
            {/* Same tree structure */}
            <HeapNode index={0} className="top-4 left-1/2 transform -translate-x-1/2" />
            <HeapNode index={1} className="top-16 left-1/3 transform -translate-x-1/2" />
            <HeapNode index={2} className="top-16 right-1/3 transform translate-x-1/2" />
            <HeapNode index={3} className="top-28 left-1/6" />
            <HeapNode index={4} className="top-28 left-2/5" />
            
            <HeapEdge className="top-10 left-1/2 w-16 h-0.5 transform -translate-x-1/2 -rotate-45 origin-left" />
            <HeapEdge className="top-10 left-1/2 w-16 h-0.5 transform -translate-x-1/2 rotate-45 origin-left" />
            <HeapEdge className="top-22 left-1/3 w-12 h-0.5 transform -translate-x-1/2 -rotate-45 origin-left" />
            <HeapEdge className="top-22 left-1/3 w-12 h-0.5 transform -translate-x-1/2 rotate-45 origin-left" />
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Root removal → last element moves to root → heapify down to restore property
        </p>
      </div>

      {/* Heapify Array */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">🔸 Build Heap (Heapify)</h3>
        <p className="text-gray-700 mb-6 max-w-3xl">
          Convert an unsorted array into a heap by heapifying from the last non-leaf node upwards. 
          Time complexity: <code className="bg-gray-100 px-2 py-1 rounded">O(n)</code>
        </p>
        <div ref={heapifyRef} className="bg-gray-50 p-8 rounded-lg">
          <div className="operation-status mb-4 p-2 bg-gray-100 rounded text-center font-mono text-sm">
            Heapify operations will appear here
          </div>
          <div className="relative h-72 flex items-center justify-center">
            {/* Complete binary tree for 8 elements */}
            <HeapNode index={0} className="top-4 left-1/2 transform -translate-x-1/2" />
            <HeapNode index={1} className="top-16 left-1/3 transform -translate-x-1/2" />
            <HeapNode index={2} className="top-16 right-1/3 transform translate-x-1/2" />
            <HeapNode index={3} className="top-28 left-1/6" />
            <HeapNode index={4} className="top-28 left-5/12" />
            <HeapNode index={5} className="top-28 right-5/12" />
            <HeapNode index={6} className="top-28 right-1/6" />
            <HeapNode index={7} className="top-40 left-1/8" />
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Bottom-up heapification: start from last non-leaf, work towards root
        </p>
      </div>
    </div>

    )}
{/* 
      Heap Sort
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">🔸 Heap Sort</h3>
        <p className="text-gray-700 mb-6 max-w-3xl">
          Repeatedly extract the maximum from a max-heap to sort in ascending order. 
          Time complexity: <code className="bg-gray-100 px-2 py-1 rounded">O(n log n)</code>
        </p>
        <div ref={sortRef} className="bg-gray-50 p-8 rounded-lg">
          <div className="operation-status mb-4 p-2 bg-gray-100 rounded text-center font-mono text-sm">
            Heap sort operations will appear here
          </div>
          <div className="sorted-array mb-4 p-2 bg-blue-50 rounded text-center font-mono text-sm">
            Sorted array will appear here
          </div>
          <div className="relative h-72 flex items-center justify-center">
            <HeapNode index={0} className="top-4 left-1/2 transform -translate-x-1/2" />
            <HeapNode index={1} className="top-16 left-1/3 transform -translate-x-1/2" />
            <HeapNode index={2} className="top-16 right-1/3 transform translate-x-1/2" />
            <HeapNode index={3} className="top-28 left-1/6" />
            <HeapNode index={4} className="top-28 left-5/12" />
            <HeapNode index={5} className="top-28 right-5/12" />
            <HeapNode index={6} className="top-28 right-1/6" />
            <HeapNode index={7} className="top-40 left-1/8" */}

