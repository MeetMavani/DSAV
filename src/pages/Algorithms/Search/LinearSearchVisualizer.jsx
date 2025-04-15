import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const LinearSearchVisualizer = () => {
  const [array, setArray] = useState([12, 25, 34, 45, 67]);
  const [target, setTarget] = useState(45);
  const boxRefs = useRef([]);
  const [foundIndex, setFoundIndex] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [comparisons, setComparisons] = useState(0);



  const handleSearch = async () => {
    setIsSearching(true);
    setFoundIndex(null);
    setHasSearched(true); 

     // Reset all box colors
    boxRefs.current.forEach((box) => {
        gsap.set(box, {
        backgroundColor: "#bfdbfe", // blue-100
        scale: 1,
        });
    });

  const tl = gsap.timeline();
  
    for (let i = 0; i < array.length; i++) {
        setComparisons((prev) => prev + 1);

      // Highlight current element (yellow)
      await gsap.to(boxRefs.current[i], {
        backgroundColor: "#fde68a",
        duration: 0.5,
      });

      await tl.addPause();
  
      if (array[i] === target) {
        // Found element (green + scale up)
        await gsap.to(boxRefs.current[i], {
          backgroundColor: "#86efac",
          scale: 1.2,
          duration: 0.5,
          ease: "back.out(1.7)",
          yoyo: true,
          repeat: 1,
        });
        setFoundIndex(i);
        break;
      } else {
        // Not the target (red)
        await gsap.to(boxRefs.current[i], {
          backgroundColor: "#f87171",
          duration: 0.3,
        });
      }
    }
  
    setIsSearching(false);
  };
  
  const handleReset = () => {
    setFoundIndex(null);
    setIsSearching(false);
    setHasSearched(false);
    setComparisons(0)
    
  
    boxRefs.current.forEach((box) => {
      gsap.set(box, {
        backgroundColor: "#bfdbfe", // blue-100
        scale: 1,
      });
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

      <p>Comparisons: {comparisons}</p>


      {/* Input and Button */}
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


      {/* Result */}
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

export default LinearSearchVisualizer;
