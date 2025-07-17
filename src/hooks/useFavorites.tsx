import { useState, useEffect } from 'react';
import { IconItem } from '../types/types';

const MAX_FAVORITES = 8;

export default function useFavorites() {
  const [iconUsage, setIconUsage] = useState<Record<string, number>>({});
  const [favorites, setFavorites] = useState<IconItem[]>([]);
  
  // Load usage data from localStorage on init
  useEffect(() => {
    const savedUsage = localStorage.getItem('iconUsage');
    if (savedUsage) {
      setIconUsage(JSON.parse(savedUsage));
    }
  }, []);
  
  // Update localStorage when usage changes
  useEffect(() => {
    if (Object.keys(iconUsage).length > 0) {
      localStorage.setItem('iconUsage', JSON.stringify(iconUsage));
    }
  }, [iconUsage]);
  
  const trackIconUsage = (icon: IconItem) => {
    setIconUsage(prev => {
      const newCount = (prev[icon.id] || 0) + 1;
      return { ...prev, [icon.id]: newCount };
    });
  };
  
  const updateFavorites = (allIcons: IconItem[]) => {
    // Create array of [iconId, count] pairs and sort by count (descending)
    const sortedUsage = Object.entries(iconUsage)
      .sort((a, b) => b[1] - a[1])
      .slice(0, MAX_FAVORITES)
      .map(([id]) => id);
    
    // Map the sorted IDs back to icon objects
    const newFavorites = sortedUsage
      .map(id => allIcons.find(icon => icon.id === id))
      .filter((icon): icon is IconItem => icon !== undefined);
    
    setFavorites(newFavorites);
  };
  
  return { favorites, trackIconUsage, updateFavorites };
}
