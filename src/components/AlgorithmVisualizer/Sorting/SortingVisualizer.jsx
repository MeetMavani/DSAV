import { useState, useEffect, useRef } from "react";
import "./SortingVisualizer.css";
import PropTypes from 'prop-types';

const SortingVisualizer = ({ title, algorithmFn }) => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(500);
  const [manualInput, setManualInput] = useState("");
  const [isSorting, setIsSorting] = useState(false);
  const timeouts = useRef([]);  // To track the timeouts for cleanup

  // Generate random array, sorted array, and reversed array
  const generateArray = () => {
    const newArr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);
    setArray(newArr);
  };

  const generateSortedArray = () => {
    const newArr = Array.from({ length: 20 }, (_, i) => i * 5 + 5);
    setArray(newArr);
  };

  const generateReversedArray = () => {
    const newArr = Array.from({ length: 20 }, (_, i) => (20 - i) * 5);
    setArray(newArr);
  };

  const handleManualInput = () => {
    const parsedArray = manualInput
      .split(",")
      .map((num) => parseInt(num.trim()))
      .filter((num) => !isNaN(num));
    if (parsedArray.length > 0) {
      setArray(parsedArray);
    }
  };

  useEffect(() => {
    generateArray();
    return () => {
      // Clean up timeouts when component unmounts
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
    };
  }, []);

  const handleSort = () => {
    if (isSorting) return; // Prevent sorting if it's already sorting

    setIsSorting(true); // Mark as sorting
    const animations = algorithmFn(array);

    animations.forEach((step, i) => {
      const timeoutId = setTimeout(() => {
        setArray([...step.array]);

        const boxes = document.getElementsByClassName("array-box");
        const bars = document.getElementsByClassName("array-bar");

        // Remove any previous highlights
        for (let j = 0; j < boxes.length; j++) {
          boxes[j].classList.remove("comparing", "swapping", "sorted");
          bars[j].classList.remove("comparing", "swapping", "sorted");
        }

        // Add new highlights based on animation step type
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

        // Mark elements as sorted once the last animation step completes
        if (i === animations.length - 1) {
          for (let k = 0; k < boxes.length; k++) {
            boxes[k].classList.add("sorted");
            bars[k].classList.add("sorted");
          }
          setIsSorting(false); // Sorting is complete
        }
      }, i * speed);

      timeouts.current.push(timeoutId); // Store the timeout id for cleanup
    });
  };

  // Reset the array and clear any ongoing animations
  const handleReset = () => {
    // Clear all timeouts and reset animations
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
    const boxes = document.getElementsByClassName("array-box");
    const bars = document.getElementsByClassName("array-bar");
    for (let j = 0; j < boxes.length; j++) {
      boxes[j].classList.remove("comparing", "swapping", "sorted");
      bars[j].classList.remove("comparing", "swapping", "sorted");
    }
    generateArray(); // Reset array to random values
    setIsSorting(false); // Reset sorting state
  };

  return (
    <div className="visualizer">
      <div className="controls">
        <button onClick={generateArray}>Random Array</button>
        <button onClick={generateSortedArray}>Sorted Array</button>
        <button onClick={generateReversedArray}>Reversed Array</button>

        <input
          type="text"
          placeholder="Enter numbers (comma-separated)"
          value={manualInput}
          onChange={(e) => setManualInput(e.target.value)}
          style={{ border: "2px solid black", padding: "7px", width: "262px" }}
        />
        <button onClick={handleManualInput}>Set Custom Array</button>

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

        <button onClick={handleSort}>Start {title} Sort</button>
        <button onClick={handleReset}>Reset</button> {/* Reset button */}
      </div>

      <div className="array-container">
        <div className="bar-visualization">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={`bar-${idx}`}
              style={{ height: `${value * 3}px`, width: "40px" }}
            ></div>
          ))}
        </div>

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

SortingVisualizer.propTypes = {
  title: PropTypes.string.isRequired,
  algorithmFn: PropTypes.func.isRequired,
};

export default SortingVisualizer;
