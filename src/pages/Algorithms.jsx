import { useState } from 'react';
import AlgorithmCard from './AlgorithmCard'; 

const algorithms = [
  { name: 'QuickSort', emoji: '⚡️', type: 'Sorting', description: 'Quick sort is a divide-and-conquer sorting algorithm that picks a pivot and partitions the array around it.' },
  { name: 'BubbleSort', emoji: '🫧', type: 'Sorting', description: 'Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.' },
  { name: 'MergeSort', emoji: '🧬', type: 'Sorting', description: 'Merge sort divides the array into halves, recursively sorts them, and merges the sorted halves.' },
  { name: 'InsertionSort', emoji: '🪄', type: 'Sorting', description: 'Insertion sort builds the sorted array one element at a time by comparing and inserting into the correct position.' },
  { name: 'SelectionSort', emoji: '🎯', type: 'Sorting', description: 'Selection sort repeatedly selects the minimum element from the unsorted part and puts it at the beginning.' },
  { name: 'LinearSearch', emoji: '🔍', type: 'Searching', description: 'Linear search sequentially checks each element of the list until a match is found or the list ends.' },
  { name: 'BinarySearch', emoji: '🧠', type: 'Searching', description: 'Binary search works on sorted arrays by repeatedly dividing the search interval in half.' },
];

const Algorithms = () => {
  const [selectedAlgName, setSelectedAlgName] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAlgorithms = algorithms.filter((alg) =>
    alg.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">🚀 Algorithms Library</h2>

      <input
        type="text"
        placeholder="Search algorithm..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full mb-6 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredAlgorithms.map((alg) => (
          <AlgorithmCard
            key={alg.name}
            alg={alg}
            isSelected={selectedAlgName === alg.name}
            onClick={() =>
              setSelectedAlgName(selectedAlgName === alg.name ? null : alg.name)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Algorithms;
