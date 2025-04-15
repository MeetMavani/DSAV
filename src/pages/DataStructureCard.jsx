import { Link } from 'react-router-dom';

const DataStructureCard = ({ ds, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer border border-gray-300 rounded-2xl p-4 shadow-md transition-all duration-300 overflow-hidden 
        ${isSelected ? 'bg-green-100 scale-105' : 'bg-white hover:shadow-lg'}`}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{ds.emoji}</span>
        <h3 className="text-xl font-semibold">{ds.name}</h3>
      </div>

      {isSelected && (
        <div className="mt-2 text-sm text-gray-800">
          <p>{ds.description}</p>
          <Link
            to={`/${ds.name}`}
            className="inline-block mt-3 text-green-600 hover:underline font-medium"
          >
            Learn more →
          </Link>
        </div>
      )}
    </div>
  );
};

export default DataStructureCard;
