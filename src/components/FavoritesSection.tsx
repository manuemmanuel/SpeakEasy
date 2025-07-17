import React from 'react';
import { IconItem } from '../types/types';
import { Star } from 'lucide-react';

interface FavoritesSectionProps {
  favorites: IconItem[];
  onSelect: (icon: IconItem) => void;
}

export default function FavoritesSection({ favorites, onSelect }: FavoritesSectionProps) {
  if (favorites.length === 0) return null;
  
  return (
    <div className="mb-5 game-favorites p-4 fade-in">
      <div className="flex items-center mb-3">
        <Star size={16} className="text-amber-400 mr-2" fill="#fbbf24" />
        <h2 className="font-bold text-indigo-900 text-lg">Power Words</h2>
      </div>
      
      <div className="flex overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex space-x-4">
          {favorites.map((icon, index) => (
            <button
              key={icon.id}
              onClick={() => onSelect(icon)}
              className="game-card flex flex-col items-center p-3 transition-all hover:scale-105 min-w-20 card-transition"
              style={{ 
                animationDelay: `${index * 0.05}s`,
                opacity: 0,
                animation: 'fade-in 0.5s ease-out forwards'
              }}
            >
              <div className="icon-container w-14 h-14 flex items-center justify-center bg-white/50 rounded-xl p-1.5">
                <img
                  src={icon.image}
                  alt={icon.text}
                  className="max-w-full max-h-full object-contain"
                  style={{ filter: 'drop-shadow(0 2px 3px rgba(0, 0, 0, 0.1))' }}
                />
              </div>
              <span className="mt-1.5 text-sm text-center font-medium text-indigo-900">
                {icon.text}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
