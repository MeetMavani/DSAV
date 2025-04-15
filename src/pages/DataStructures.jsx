import { useState } from 'react';
import DataStructureCard from './DataStructureCard';

const dataStructures = [
  {
    name: 'Array',
    emoji: '📦',
    description: 'Arrays are collections of items stored at contiguous memory locations, accessible via index.',
  },
  {
    name: 'LinkedList',
    emoji: '🔗',
    description: 'A linked list is a linear data structure where each element (node) points to the next.',
  },
  {
    name: 'Stack',
    emoji: '📚',
    description: 'A stack is a linear data structure which follows LIFO (Last In First Out) principle.',
  },
  {
    name: 'Queue',
    emoji: '🚶',
    description: 'A queue is a linear data structure which follows FIFO (First In First Out) principle.',
  },
  {
    name: 'Tree',
    emoji: '🌳',
    description: 'A tree is a hierarchical data structure consisting of nodes with parent-child relationships.',
  },
  {
    name: 'Graph',
    emoji: '🕸️',
    description: 'A graph is a collection of nodes connected by edges, used to represent networks.',
  },
  {
    name: 'Hash Table',
    emoji: '🔑',
    description: 'A hash table stores key-value pairs using a hash function to compute the index.',
  },
  {
    name: 'Heap',
    emoji: '🏔️',
    description: 'A heap is a special tree-based structure that satisfies the heap property (max or min).',
  },
];

const DataStructures = () => {
  const [selectedDSName, setSelectedDSName] = useState(null);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">📚 Data Structures Library</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dataStructures.map((ds) => (
          <DataStructureCard
            key={ds.name}
            ds={ds}
            isSelected={selectedDSName === ds.name}
            onClick={() => setSelectedDSName(selectedDSName === ds.name ? null : ds.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default DataStructures;
