import  { useState } from 'react';
// import DSEnlargedView from './DSEnlargedView';
import '../App.css';

const dataStructures = [
  { name: 'Array', description: 'Arrays are collections of items stored at contiguous memory locations...' },
  { name: 'Linked List', description: 'A linked list is a linear data structure where elements are stored in nodes...' },
  // Add more data structures here
];

const DataStructures = () => {
  const [selectedDS, setSelectedDS] = useState(null);

  const handleDSClick = (ds) => {
    setSelectedDS(ds);
  };

  return (
    <div className="data-structures">
      <h2>Data Structures</h2>
      {dataStructures.map((ds) => (
        <div
          key={ds.name}
          className={`ds-item ${selectedDS === ds ? 'enlarged' : ''}`}
          onClick={() => handleDSClick(ds)}
        >
          <h3>{ds.name}</h3>
          {selectedDS === ds && (
            <p>
              {ds.description}
              <br />
              <a href={`/${ds.name}`}>Click to learn about {ds.name}</a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default DataStructures;
