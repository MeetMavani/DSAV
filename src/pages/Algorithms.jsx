import { useState } from 'react';
import { Link } from 'react-router-dom';


const algorithms = [
  { name: 'QuickSort', description: 'Quick sort is an efficient sorting algorithm that uses divide-and-conquer...' },
  { name: 'BubbleSort', description: 'Bubble sort is a simple sorting algorithm that compares adjacent elements...' },
  // Add more algorithms here
];

const Algorithms = () => {
  const [selectedAlg, setSelectedAlg] = useState(null);

  const handleAlgClick = (alg) => {
    setSelectedAlg(alg);
  };
 
  return (
    <div className="algorithms">
      <h2>Algorithms</h2>
      {algorithms.map((alg) => (
        <div
          key={alg.name}
          className={`alg-item ${selectedAlg === alg ? 'enlarged' : ''}`}
          onClick={() => handleAlgClick(alg)}
        >
          <h3>{alg.name}</h3>
          {selectedAlg === alg && (
            <p>
              {alg.description}
              <br />
              <Link to={`/${alg.name}`}>Learn about {alg.name}</Link>
            </p>
          )}
        </div>
      ))}

      {/* Render the SortingVisualizer when Bubble Sort is selected */}
      {/* {selectedAlg?.name === 'Bubble Sort' && <SortingVisualizer />} */}
    </div>
  );
};

export default Algorithms;
