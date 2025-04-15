
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const BinarySearchVisualizer = () => {
  const [array, setArray] = useState([5, 12, 18, 25, 34, 45, 60]); // must be sorted
  const [target, setTarget] = useState(25);
  const boxRefs = useRef([]);
  const [foundIndex, setFoundIndex] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    setIsSearching(true);
    setFoundIndex(null);
    setHasSearched(true);

    // Reset all box styles
    boxRefs.current.forEach((box) => {
      gsap.set(box, { backgroundColor: "#bfdbfe", scale: 1 });
    });

    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      // Highlight mid element
      await gsap.to(boxRefs.current[mid], {
        backgroundColor: "#fde68a",
        duration: 0.5,
      });

      if (array[mid] === target) {
        // Found
        await gsap.to(boxRefs.current[mid], {
          backgroundColor: "#86efac",
          scale: 1.2,
          duration: 0.5,
          ease: "back.out(1.7)",
        });
        setFoundIndex(mid);
        break;
      } else {
        // Not found - mark red
        await gsap.to(boxRefs.current[mid], {
          backgroundColor: "#f87171",
          duration: 0.3,
        });

        if (array[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }

    setIsSearching(false);
  };

  const handleReset = () => {
    setFoundIndex(null);
    setIsSearching(false);
    setHasSearched(false);

    boxRefs.current.forEach((box) => {
      gsap.set(box, { backgroundColor: "#bfdbfe", scale: 1 });
    });
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Array Display */}
      <div className="flex gap-4">
        {array.map((num, i) => (
          <div
            key={i}
            ref={(el) => (boxRefs.current[i] = el)}
            className="w-16 h-16 bg-blue-100 border border-gray-400 flex flex-col items-center justify-center rounded-md shadow-md"
          >
            <span className="text-lg font-semibold">{num}</span>
            <span className="text-xs text-gray-600">Index {i}</span>
          </div>
        ))}
      </div>

      {/* Input & Buttons */}
      <div className="flex gap-4 mt-4">
        <input
          type="number"
          value={target}
          disabled={isSearching}
          onChange={(e) => setTarget(Number(e.target.value))}
          className="border px-4 py-2 rounded-md shadow-sm text-gray-700"
          placeholder="Enter target"
        />
        <button
          disabled={isSearching}
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all disabled:opacity-50"
        >
          Start Search
        </button>
        <button
          onClick={handleReset}
          disabled={isSearching}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-all disabled:opacity-50"
        >
          Reset
        </button>
      </div>

      {/* Result Messages */}
      {hasSearched && foundIndex !== null && (
        <p className="text-green-600 font-medium">
          ✅ Element found at index {foundIndex}
        </p>
      )}
      {hasSearched && !isSearching && foundIndex === null && (
        <p className="text-red-500 font-medium">
          ❌ Element not found in the array
        </p>
      )}
    </div>
  );
};

export default BinarySearchVisualizer;
