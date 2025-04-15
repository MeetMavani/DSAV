import { Link } from 'react-router-dom';

const AlgorithmCard = ({ alg, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer border border-gray-300 rounded-2xl p-4 shadow-md transition-all duration-300 overflow-hidden 
        ${isSelected ? 'bg-blue-100 scale-105' : 'bg-white hover:shadow-lg'}`}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{alg.emoji}</span>
        <h3 className="text-xl font-semibold">{alg.name}</h3>
      </div>

      <p className="text-sm text-gray-600 mb-2">{alg.type}</p>

      {isSelected && (
        <div className="mt-2 text-sm text-gray-800">
          <p>{alg.description}</p>
          <Link
            to={`/${alg.name}`}
            className="inline-block mt-3 text-blue-600 hover:underline font-medium"
          >
            Learn more →
          </Link>
        </div>
      )}
    </div>
  );
};


export default AlgorithmCard;
