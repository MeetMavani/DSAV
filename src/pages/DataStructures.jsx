import { useState } from 'react';
import DataStructureCard from './DataStructureCard';

const dataStructures = [
  {
    name: 'Array',
    emoji: '📦',
    description: 'Arrays are collections of items stored at contiguous memory locations, accessible via index.',
    gradient: {
      light: 'from-orange-50 via-amber-50 to-yellow-50',
      dark: 'from-orange-400/10 via-amber-400/10 to-yellow-400/10',
      border: 'border-orange-200',
      ring: 'from-orange-400 to-yellow-400',
      corner: 'border-t-orange-200',
    },
  },
  {
    name: 'LinkedList',
    emoji: '🔗',
    description: 'A linked list is a linear data structure where each element (node) points to the next.',
    gradient: {
      light: 'from-purple-50 via-fuchsia-50 to-pink-50',
      dark: 'from-purple-400/10 via-fuchsia-400/10 to-pink-400/10',
      border: 'border-fuchsia-200',
      ring: 'from-purple-400 to-pink-400',
      corner: 'border-t-fuchsia-200',
    },
  },
  {
    name: 'Stack',
    emoji: '📚',
    description: 'A stack is a linear data structure which follows LIFO (Last In First Out) principle.',
    gradient: {
      light: 'from-pink-50 via-rose-50 to-red-50',
      dark: 'from-pink-400/10 via-rose-400/10 to-red-400/10',
      border: 'border-pink-200',
      ring: 'from-pink-400 to-red-400',
      corner: 'border-t-pink-200',
    },
  },
  {
    name: 'Queue',
    emoji: '🚶',
    description: 'A queue is a linear data structure which follows FIFO (First In First Out) principle.',
    gradient: {
      light: 'from-sky-50 via-blue-50 to-indigo-50',
      dark: 'from-sky-400/10 via-blue-400/10 to-indigo-400/10',
      border: 'border-sky-200',
      ring: 'from-sky-400 to-indigo-400',
      corner: 'border-t-sky-200',
    },
  },
  {
    name: 'Tree',
    emoji: '🌳',
    description: 'A tree is a hierarchical data structure consisting of nodes with parent-child relationships.',
    gradient: {
      light: 'from-green-50 via-emerald-50 to-teal-50',
      dark: 'from-green-400/10 via-emerald-400/10 to-teal-400/10',
      border: 'border-green-200',
      ring: 'from-green-400 to-teal-400',
      corner: 'border-t-green-200',
    },
  },
  {
    name: 'Graph',
    emoji: '🕸️',
    description: 'A graph is a collection of nodes connected by edges, used to represent networks.',
    gradient: {
      light: 'from-indigo-50 via-violet-50 to-purple-50',
      dark: 'from-indigo-400/10 via-violet-400/10 to-purple-400/10',
      border: 'border-indigo-200',
      ring: 'from-indigo-400 to-purple-400',
      corner: 'border-t-indigo-200',
    },
  },
  {
    name: 'HashTable',
    emoji: '🔑',
    description: 'A hash table stores key-value pairs using a hash function to compute the index.',
    gradient: {
      light: 'from-lime-50 via-green-50 to-emerald-50',
      dark: 'from-lime-400/10 via-green-400/10 to-emerald-400/10',
      border: 'border-lime-200',
      ring: 'from-lime-400 to-emerald-400',
      corner: 'border-t-lime-200',
    },
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
