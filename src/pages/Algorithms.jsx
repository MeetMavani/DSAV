import { useState } from 'react';
import AlgorithmCard from './AlgorithmCard';

const algorithms = [
  { 
    name: 'QuickSort', 
    emoji: '⚡️', 
    type: 'Sorting', 
    description: 'Quick sort is a divide-and-conquer sorting algorithm that picks a pivot and partitions the array around it.',
    color: 'from-yellow-400 to-orange-500'
  },
  { 
    name: 'BubbleSort', 
    emoji: '🫧', 
    type: 'Sorting', 
    description: 'Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.',
    color: 'from-blue-400 to-cyan-500'
  },
  { 
    name: 'MergeSort', 
    emoji: '🧬', 
    type: 'Sorting', 
    description: 'Merge sort divides the array into halves, recursively sorts them, and merges the sorted halves.',
    color: 'from-purple-400 to-pink-500'
  },
  { 
    name: 'InsertionSort', 
    emoji: '🪄', 
    type: 'Sorting', 
    description: 'Insertion sort builds the sorted array one element at a time by comparing and inserting into the correct position.',
    color: 'from-indigo-400 to-purple-500'
  },
  { 
    name: 'SelectionSort', 
    emoji: '🎯', 
    type: 'Sorting', 
    description: 'Selection sort repeatedly selects the minimum element from the unsorted part and puts it at the beginning.',
    color: 'from-red-400 to-pink-500'
  },
  { 
    name: 'LinearSearch', 
    emoji: '🔍', 
    type: 'Searching', 
    description: 'Linear search sequentially checks each element of the list until a match is found or the list ends.',
    color: 'from-green-400 to-teal-500'
  },
  { 
    name: 'BinarySearch', 
    emoji: '🧠', 
    type: 'Searching', 
    description: 'Binary search works on sorted arrays by repeatedly dividing the search interval in half.',
    color: 'from-gray-400 to-gray-600'
  },
];

const Algorithms = () => {
  const [selectedAlgName, setSelectedAlgName] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAlgorithms = algorithms.filter((alg) =>
    alg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alg.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            🚀 Algorithms Library
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore and learn about fundamental algorithms with interactive visualizations
          </p>
        </div>

        {/* Enhanced Search */}
        <div className="relative max-w-xl mx-auto mb-12">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search algorithms or types..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl shadow-lg focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/80 backdrop-blur-sm"
          />
        </div>

        {/* Algorithm Grid - Enhanced for larger cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {filteredAlgorithms.map((alg, index) => (
            <div
              key={alg.name}
              className="animate-fade-in"
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: 0
              }}
            >
              <AlgorithmCard
                alg={alg}
                isSelected={selectedAlgName === alg.name}
                onClick={() =>
                  setSelectedAlgName(selectedAlgName === alg.name ? null : alg.name)
                }
              />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredAlgorithms.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No algorithms found</h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Algorithms;