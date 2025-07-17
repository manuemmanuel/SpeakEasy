import React from 'react';
import { Category } from '../types/types';

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategoryTabs({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoryTabsProps) {
  return (
    <div className="flex overflow-x-auto py-2 mb-4 scrollbar-hide">
      <div className="flex space-x-3">
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`game-tab py-2.5 px-5 whitespace-nowrap transition-all card-transition ${
              activeCategory === category.id
                ? 'active text-white font-semibold'
                : 'bg-white/90 text-gray-700 hover:bg-white/95'
            }`}
            style={{ 
              animationDelay: `${index * 0.05}s`,
              opacity: 0,
              animation: 'fade-in 0.3s ease-out forwards'
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
