import { useState } from 'react';
import { Link } from 'react-router-dom';

const AlgorithmCard = ({ alg, isSelected, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group cursor-pointer relative overflow-hidden rounded-3xl transition-all duration-500 ease-out transform min-h-[240px] bg-white border-2
        ${isSelected 
          ? 'scale-105 shadow-2xl border-blue-400' 
          : isHovered 
            ? 'scale-102 shadow-xl border-gray-300' 
            : 'shadow-md border-gray-200 hover:shadow-lg'
        }
        ${isHovered ? '-translate-y-1' : ''}`}
    >
      {/* Subtle background gradient when selected */}
      {isSelected && (
        <div className={`absolute inset-0 bg-gradient-to-br ${alg.color || 'from-blue-50 to-purple-50'} opacity-20`}></div>
      )}
      
      {/* Animated accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${alg.color || 'from-blue-400 to-purple-500'} transition-all duration-300 ${
        isSelected || isHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>

      <div className="relative z-10 p-8">
        {/* Header section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={`text-4xl transform transition-all duration-300 ${
              isHovered ? 'scale-110 rotate-6' : isSelected ? 'scale-105' : ''
            }`}>
              {alg.emoji}
            </div>
            <div>
              <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                isSelected ? 'text-blue-600' : 'text-gray-800'
              }`}>
                {alg.name}
              </h3>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-2 transition-all duration-300 ${
                isSelected || isHovered 
                  ? `bg-gradient-to-r ${alg.color || 'from-blue-400 to-purple-500'} text-white shadow-lg` 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {alg.type}
              </div>
            </div>
          </div>
          
          {/* Expand indicator */}
          <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            isSelected ? 'border-blue-500 text-blue-500 bg-blue-50 rotate-45' : 'border-gray-300 text-gray-400'
          } ${isHovered && !isSelected ? 'border-gray-400 text-gray-500' : ''}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>

        {/* Description section with smooth reveal */}
        <div className={`overflow-hidden transition-all duration-500 ease-out ${
          isSelected ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pb-4 border-t border-gray-200 pt-4">
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {alg.description}
            </p>
            
            {/* Enhanced Learn More Link */}
            <Link
              to={`/${alg.name}`}
              className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Learn More</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Subtle floating dots effect */}
        {isSelected && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1.5 h-1.5 rounded-full transition-all duration-1000 ${
                  alg.color?.includes('blue') ? 'bg-blue-400' :
                  alg.color?.includes('purple') ? 'bg-purple-400' :
                  alg.color?.includes('green') ? 'bg-green-400' :
                  alg.color?.includes('red') ? 'bg-red-400' :
                  alg.color?.includes('yellow') ? 'bg-yellow-400' :
                  'bg-blue-400'
                } opacity-60 animate-float`}
                style={{
                  left: `${15 + i * 20}%`,
                  top: `${20 + (i % 2) * 60}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: '4s'
                }}
              />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.6; 
          }
          50% { 
            transform: translateY(-15px) scale(1.2); 
            opacity: 0.9; 
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AlgorithmCard;