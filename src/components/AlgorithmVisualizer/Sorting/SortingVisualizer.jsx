import { useState, useEffect } from 'react';
import { bubbleSort } from '../../../utils/sortingAlgorithms';
import './SortingVisualizer.css';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  // Generate a new random array
  const generateArray = () => {
    const newArr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);
    setArray(newArr);
  };

  useEffect(() => {
    generateArray();
  }, []);

  const handleSort = () => {
    const animations = bubbleSort(array);
    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        setArray([...animations[i].array]);
        const boxes = document.getElementsByClassName('array-box');
        const bars = document.getElementsByClassName('array-bar');

        // Clear existing classes
        for (let j = 0; j < boxes.length; j++) {
          boxes[j].classList.remove('comparing', 'swapping', 'sorted');
          bars[j].classList.remove('comparing', 'swapping', 'sorted');
        }

        // Add comparing or swapping classes
        if (animations[i].type === 'compare') {
          boxes[animations[i].indices[0]].classList.add('comparing');
          boxes[animations[i].indices[1]].classList.add('comparing');
          bars[animations[i].indices[0]].classList.add('comparing');
          bars[animations[i].indices[1]].classList.add('comparing');
        } else if (animations[i].type === 'swap') {
          boxes[animations[i].indices[0]].classList.add('swapping');
          boxes[animations[i].indices[1]].classList.add('swapping');
          bars[animations[i].indices[0]].classList.add('swapping');
          bars[animations[i].indices[1]].classList.add('swapping');
        }

        // Set sorted class for the last elements
        if (i === animations.length - 1) {
          for (let k = 0; k < boxes.length; k++) {
            boxes[k].classList.add('sorted');
            bars[k].classList.add('sorted');
          }
        }
      }, i * 500); // speed of animations
    }
  };

  return (
    <div className="visualizer">
      <button onClick={generateArray}>Generate New Array</button>
      <button onClick={handleSort}>Bubble Sort</button>
      <div className="array-container">
        {/* Bar Visualization */}
        <div className="bar-visualization">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={`bar-${idx}`}
              style={{ height: `${value * 3}px`, width:'40px' }} // Scaled height for better visual impact
            >
              {/* {value} */}
            </div>
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
