import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const QueueVisualization = () => {
  const enqueueRef = useRef();
  const dequeueRef = useRef();
  const peekRef = useRef();
  const isEmptyRef = useRef();
  const timelineRef = useRef(null); // for storing timeline instance
 
  const initialQueue = [10, 20, 30];
  const enqueueValue = 40;
  const maxQueueSize = 5;

  const runAnimation = () => {
    const tl = gsap.timeline({ delay: 0.5 });
    timelineRef.current = tl;

    // Enqueue Animation
    const enqueueBoxes = enqueueRef.current.children;
    const enqueueBox = enqueueBoxes[initialQueue.length]; // Next available position
    const enqueueSpan = enqueueBox.querySelector("span:first-child");
    
    // Highlight the rear position
    tl.to(enqueueBox, {
      backgroundColor: "#10b981",
      color: "#fff",
      scale: 1.1,
      boxShadow: "0 0 20px #10b981",
      duration: 0.6,
      onStart: () => {
        enqueueSpan.textContent = enqueueValue;
      },
    }).to(enqueueBox, {
      backgroundColor: "#fff",
      color: "#000",
      scale: 1,
      boxShadow: "none",
      duration: 0.4,
    });

    // Show "REAR" label movement
    const rearLabel = enqueueRef.current.parentElement.querySelector('.rear-label');
    if (rearLabel) {
      tl.to(rearLabel, {
        x: 80, // Move right by one box width + gap
        duration: 0.6,
      }, "-=1");
    }

    // Dequeue Animation
    const dequeueBoxes = dequeueRef.current.children;
    const frontBox = dequeueBoxes[0];
    const frontSpan = frontBox.querySelector("span:first-child");
    
    // Highlight front element being removed
    tl.to(frontBox, {
      backgroundColor: "#ef4444",
      color: "#fff",
      scale: 1.1,
      boxShadow: "0 0 20px #ef4444",
      duration: 0.6,
      delay: 0.5,
    }).to(frontBox, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        frontSpan.textContent = "";
      },
    });

    // Shift remaining elements
    for (let i = 1; i < initialQueue.length; i++) {
      const currentBox = dequeueBoxes[i];
      const prevBox = dequeueBoxes[i - 1];
      const currentSpan = currentBox.querySelector("span:first-child");
      const prevSpan = prevBox.querySelector("span:first-child");
      
      tl.to(currentBox, {
        backgroundColor: "#3b82f6",
        duration: 0.4,
        onStart: () => {
          prevSpan.textContent = currentSpan.textContent;
          currentSpan.textContent = "";
        },
      }).to(currentBox, {
        backgroundColor: "#fff",
        duration: 0.3,
      });
    }

    // Reset front box appearance
    tl.to(frontBox, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
    });

    // Peek Animation
    const peekBoxes = peekRef.current.children;
    const peekFrontBox = peekBoxes[0];
    
    tl.to(peekFrontBox, {
      backgroundColor: "#8b5cf6",
      color: "#fff",
      scale: 1.2,
      boxShadow: "0 0 25px #8b5cf6",
      duration: 0.8,
      repeat: 2,
      yoyo: true,
      delay: 0.5,
    });

    // isEmpty Animation
    const isEmptyBoxes = isEmptyRef.current.children;
    
    // Show all boxes are empty
    Array.from(isEmptyBoxes).forEach((box, index) => {
      tl.to(box, {
        backgroundColor: "#6b7280",
        color: "#fff",
        duration: 0.3,
        delay: index * 0.1,
      }).to(box, {
        backgroundColor: "#f3f4f6",
        color: "#6b7280",
        duration: 0.3,
      });
    });

    // Show "EMPTY" message
    const emptyMessage = isEmptyRef.current.parentElement.querySelector('.empty-message');
    if (emptyMessage) {
      tl.to(emptyMessage, {
        opacity: 1,
        scale: 1.1,
        duration: 0.5,
        color: "#ef4444",
      }).to(emptyMessage, {
        opacity: 0.7,
        scale: 1,
        duration: 0.3,
      });
    }

    return tl;
  };

  const resetAnimation = () => {
    // Kill any previous timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
  
    // Create a new timeline and assign it
    const tl = gsap.timeline({ delay: 0.5 });
    timelineRef.current = tl;
  
    // Reset enqueue boxes
    [...enqueueRef.current.children].forEach((box, i) => {
      box.style = "";
      box.querySelector("span:first-child").textContent = 
        i < initialQueue.length ? initialQueue[i] : "";
    });

    // Reset rear label position
    const rearLabel = enqueueRef.current.parentElement.querySelector('.rear-label');
    if (rearLabel) {
      rearLabel.style.transform = "translateX(0)";
    }
  
    // Reset dequeue boxes
    [...dequeueRef.current.children].forEach((box, i) => {
      box.style = "";
      box.querySelector("span:first-child").textContent = 
        i < initialQueue.length ? initialQueue[i] : "";
    });
  
    // Reset peek boxes
    [...peekRef.current.children].forEach((box, i) => {
      box.style = "";
      box.querySelector("span:first-child").textContent = 
        i < initialQueue.length ? initialQueue[i] : "";
    });
  
    // Reset isEmpty boxes
    [...isEmptyRef.current.children].forEach((box, i) => {
      box.style = "";
      box.querySelector("span:first-child").textContent = "";
    });

    // Reset empty message
    const emptyMessage = isEmptyRef.current.parentElement.querySelector('.empty-message');
    if (emptyMessage) {
      emptyMessage.style.opacity = "0";
    }
  
    runAnimation(); // Start fresh
  };

  useEffect(() => {
    resetAnimation();
  }, []);

  const renderQueueBoxes = (ref, values, showLabels = false) => (
    <div className="relative">
      <div ref={ref} className="flex justify-center items-center gap-4 mt-4 flex-wrap">
        {Array.from({ length: maxQueueSize }, (_, index) => (
          <div
            key={index}
            className="w-16 h-16 flex flex-col items-center justify-center border-2 border-gray-400 bg-white rounded-md shadow-md"
          >
            <span className="text-lg font-bold">
              {index < values.length ? values[index] : ""}
            </span>
            <span className="text-xs text-gray-500">
              {index < values.length ? `${index}` : ""}
            </span>
          </div>
        ))}
      </div>
      {showLabels && (
        <div className="flex justify-between items-center mt-2 px-2">
          <span className="text-sm font-semibold text-blue-600">
            FRONT ↑
          </span>
          <span className="rear-label text-sm font-semibold text-green-600" 
                style={{ transform: `translateX(${-80 * (maxQueueSize - initialQueue.length)}px)` }}>
            ↑ REAR
          </span>
        </div>
      )}
    </div>
  );

  const renderEmptyQueue = (ref) => (
    <div className="relative">
      <div ref={ref} className="flex justify-center items-center gap-4 mt-4 flex-wrap">
        {Array.from({ length: maxQueueSize }, (_, index) => (
          <div
            key={index}
            className="w-16 h-16 flex flex-col items-center justify-center border-2 border-gray-300 bg-gray-100 rounded-md shadow-md"
          >
            <span className="text-lg font-bold text-gray-400">—</span>
            <span className="text-xs text-gray-400">{index}</span>
          </div>
        ))}
      </div>
      <div className="empty-message text-center mt-4 text-lg font-bold text-red-500 opacity-0">
        QUEUE IS EMPTY!
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-end mb-6">
        <button
          onClick={resetAnimation}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded shadow"
        >
          🔄 Reset Animation
        </button>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-center">Queue Operations 🚀</h2>
      </div>

      {/* Enqueue */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">🔹 Enqueue (Add to Rear)</h3>
        <p className="text-gray-700 mb-4">
          Adding element <strong>{enqueueValue}</strong> to the rear of the queue. Time complexity: <code>O(1)</code>
        </p>
        {renderQueueBoxes(enqueueRef, initialQueue, true)}
        <p className="text-sm text-gray-500 mt-2 text-center">
          New elements are always added at the rear of the queue.
        </p>
      </div>

      {/* Dequeue */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">🔹 Dequeue (Remove from Front)</h3>
        <p className="text-gray-600 mb-4">
          Removing element from the front of the queue. Time complexity: <code>O(1)</code>
        </p>
        {renderQueueBoxes(dequeueRef, initialQueue)}
        <p className="text-sm text-gray-500 mt-2 text-center">
          Elements are always removed from the front, following FIFO principle.
        </p>
      </div>

      {/* Peek/Front */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">🔹 Front/Peek</h3>
        <p className="text-gray-600 mb-4">
          Viewing the front element without removing it. Time complexity: <code>O(1)</code>
        </p>
        {renderQueueBoxes(peekRef, initialQueue)}
        <p className="text-sm text-gray-500 mt-2 text-center">
          Peek allows you to see the next element to be dequeued without removing it.
        </p>
      </div>

      {/* isEmpty */}
      <div className="mt-10 mb-20">
        <h3 className="text-xl font-semibold mb-2">🔹 isEmpty Check</h3>
        <p className="text-gray-600 mb-4">
          Checking if the queue is empty. Time complexity: <code>O(1)</code>
        </p>
        {renderEmptyQueue(isEmptyRef)}
        <p className="text-sm text-gray-500 mt-2 text-center">
          Returns true if queue has no elements, false otherwise.
        </p>
      </div>
    </div>
  );
};

export default QueueVisualization;