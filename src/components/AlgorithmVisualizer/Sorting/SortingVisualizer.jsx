import { useState, useEffect } from "react";
import { bubbleSort } from "../../../utils/sortingAlgorithms";
import "./SortingVisualizer.css";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(500); // Default speed (in ms)
  const [manualInput, setManualInput] = useState("");

  // Generate a new random array
  const generateArray = () => {
    const newArr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);
    setArray(newArr);
  };

  // Generate a sorted array
  const generateSortedArray = () => {
    const newArr = Array.from({ length: 20 }, (_, i) => i * 5 + 5);
    setArray(newArr);
  };

  // Generate a reversed array
  const generateReversedArray = () => {
    const newArr = Array.from({ length: 20 }, (_, i) => (20 - i) * 5);
    setArray(newArr);
  };

  // Handle manual array input
  const handleManualInput = () => {
    const parsedArray = manualInput
      .split(",")
      .map((num) => parseInt(num.trim()))
      .filter((num) => !isNaN(num)); // Filter out invalid inputs
    if (parsedArray.length > 0) {
      setArray(parsedArray);
    }
  };

  useEffect(() => {
    generateArray(); // Generate an initial array on mount
  }, []);

  const handleSort = () => {
    const animations = bubbleSort(array);
    animations.forEach((step, i) => {
      setTimeout(() => {
        setArray([...step.array]);

        const boxes = document.getElementsByClassName("array-box");
        const bars = document.getElementsByClassName("array-bar");

        for (let j = 0; j < boxes.length; j++) {
          boxes[j].classList.remove("comparing", "swapping", "sorted");
          bars[j].classList.remove("comparing", "swapping", "sorted");
        }

        if (step.type === "compare") {
          boxes[step.indices[0]].classList.add("comparing");
          boxes[step.indices[1]].classList.add("comparing");
          bars[step.indices[0]].classList.add("comparing");
          bars[step.indices[1]].classList.add("comparing");
        } else if (step.type === "swap") {
          boxes[step.indices[0]].classList.add("swapping");
          boxes[step.indices[1]].classList.add("swapping");
          bars[step.indices[0]].classList.add("swapping");
          bars[step.indices[1]].classList.add("swapping");
        }

        if (i === animations.length - 1) {
          for (let k = 0; k < boxes.length; k++) {
            boxes[k].classList.add("sorted");
            bars[k].classList.add("sorted");
          }
        }
      }, i * speed); // Adjust speed dynamically
    });
  };

  return (
    <div className="visualizer">
      <div className="controls">
        <button onClick={generateArray}>Random Array</button>
        <button onClick={generateSortedArray}>Sorted Array</button>
        <button onClick={generateReversedArray}>Reversed Array</button>

        {/* Manual Input */}
        <input
          type="text"
          placeholder="Enter numbers (comma-separated)"
          value={manualInput}
          onChange={(e) => setManualInput(e.target.value)}
          style={{
            border: "2px solid black",
            padding: "7px",
            width: "262px"
          }}
        />
        <button onClick={handleManualInput}>Set Custom Array</button>

        {/* Speed Control */}
        <label>
          Speed:
          <input
            type="range"
            min="100"
            max="1000"
            step="100"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
          {speed}ms
        </label>

        {/* Sorting Button */}
        <button onClick={handleSort}>Bubble Sort</button>
      </div>

      <div className="array-container">
        {/* Bar Visualization */}
        <div className="bar-visualization">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={`bar-${idx}`}
              style={{ height: `${value * 3}px`, width: "40px" }}
            ></div>
          ))}
        </div>

        {/* Box Visualization */}
        <div className="box-visualization">
          {array.map((value, idx) => (
            <div className="array-box" key={`box-${idx}`}>
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortingVisualizer;
