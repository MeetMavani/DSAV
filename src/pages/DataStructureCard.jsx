import { Link } from 'react-router-dom';

const DataStructureCard = ({ ds, isSelected, onClick }) => {
  return (
    <div
  onClick={onClick}
  className={`group cursor-pointer relative overflow-hidden rounded-3xl p-6 min-h-[200px] transition-all duration-500 ease-out transform
    ${isSelected 
      ? `bg-gradient-to-br ${ds.gradient.light} scale-105 shadow-2xl border-2 ${ds.gradient.border}` 
      : `bg-white hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1 border border-gray-200`
    }
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent 
    before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out
  `}
>
  {/* Subtle animated color overlay */}
  <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 
    ${isSelected ? 'opacity-100' : 'group-hover:opacity-20'}
    bg-gradient-to-br ${ds.gradient.dark}`} 
  />

  {/* Floating particles effect (unchanged) */}
  {isSelected && (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse" />
      <div className="absolute top-8 right-6 w-1 h-1 bg-white/80 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  )}

  {/* Content section remains same except for color dynamic classes */}
  <div className="relative z-10">
    <div className="flex items-center gap-4 mb-4">
      <div className={`text-4xl transition-all duration-300 transform
        ${isSelected ? 'scale-110 animate-bounce' : 'group-hover:scale-110 group-hover:-rotate-3'}
      `}>
        {ds.emoji}
      </div>
      <div className="flex-1">
        <h3 className={`text-2xl font-bold transition-all duration-300
          ${isSelected 
            ? 'text-emerald-800 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent' 
            : 'text-gray-800 group-hover:text-gray-900'
          }
        `}>
          {ds.name}
        </h3>
        <div className={`h-0.5 w-0 transition-all duration-500 ease-out mt-1 rounded-full
          ${isSelected 
            ? `w-full bg-gradient-to-r ${ds.gradient.ring}` 
            : 'group-hover:w-full bg-gradient-to-r from-gray-400 to-gray-600'
          }
        `} />
      </div>
    </div>

    <div className={`transition-all duration-500 ease-out overflow-hidden
      ${isSelected ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
    `}>
      <div className="pt-2 pb-4">
        <p className="text-gray-700 leading-relaxed mb-4 text-base">
          {ds.description}
        </p>

        <Link
          to={`/${ds.name}`}
          className="group/link inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 
            text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 
            hover:shadow-lg hover:from-emerald-600 hover:to-teal-600 active:scale-95"
        >
          <span>Learn more</span>
          <svg className="w-4 h-4 transition-transform duration-300 transform group-hover/link:translate-x-1"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>

    {/* Bottom accent line */}
    <div className={`absolute bottom-0 left-0 h-1 transition-all duration-500 ease-out rounded-full
      ${isSelected 
        ? `w-full bg-gradient-to-r ${ds.gradient.ring}` 
        : 'w-0 group-hover:w-full bg-gradient-to-r from-gray-300 to-gray-500'
      }
    `} />
  </div>

  {/* Corner accent */}
  <div className={`absolute top-0 right-0 w-0 h-0 transition-all duration-300
    ${isSelected 
      ? `border-l-[30px] border-l-transparent border-t-[30px] ${ds.gradient.corner}` 
      : 'group-hover:border-l-[20px] group-hover:border-l-transparent group-hover:border-t-[20px] group-hover:border-t-gray-200'
    }
  `} />
</div>

  );
};

export default DataStructureCard;