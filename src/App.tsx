import { useState, useEffect } from 'react';
import './index.css';
import { categories, icons } from './data/iconData';
import { IconItem } from './types/types';
import SentenceStrip from './components/SentenceStrip';
import SpeakButton from './components/SpeakButton';
import CategoryTabs from './components/CategoryTabs';
import IconGrid from './components/IconGrid';
import FavoritesSection from './components/FavoritesSection';
import useFavorites from './hooks/useFavorites';
import { geminiSuggest, buildPrompt } from './api/gemini';

export function App() {
  const [sentence, setSentence] = useState<IconItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('common');
  const { favorites, trackIconUsage, updateFavorites } = useFavorites();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loadingSuggestion, setLoadingSuggestion] = useState(false);
  
  // Load Google Fonts - Using Plus Jakarta Sans as GM Sans alternative
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  // Update favorites when component mounts
  useEffect(() => {
    updateFavorites(icons);
  }, []);
  
  const handleIconSelect = (icon: IconItem) => {
    setSentence(prev => [...prev, icon]);
    trackIconUsage(icon);
    updateFavorites(icons);
  };
  
  const handleRemoveIcon = (index: number) => {
    setSentence(prev => prev.filter((_, i) => i !== index));
  };
  
  const handleClearSentence = () => {
    setSentence([]);
  };
  
  const getSentenceText = () => sentence.map(icon => icon.text).join(' ');

  const handleGemini = async (type: 'suggest'|'complete'|'rewrite'|'expand') => {
    setLoadingSuggestion(true);
    setSuggestions([]);
    try {
      const prompt = buildPrompt(getSentenceText(), type);
      const result = await geminiSuggest({ prompt });
      // For 'suggest', split by comma or newlines for multiple suggestions
      if (type === 'suggest') {
        setSuggestions(result.split(/[,\n]/).map((s: string) => s.trim()).filter(Boolean));
      } else {
        setSuggestions([result]);
      }
    } catch (e) {
      setSuggestions(['Error getting suggestion']);
    } finally {
      setLoadingSuggestion(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    const icon = icons.find(ic => ic.text.toLowerCase() === suggestion.toLowerCase());
    if (icon) {
      setSentence(prev => [...prev, icon]);
    } else {
      // Add as a text-only icon with a placeholder image and unique id
      setSentence(prev => [
        ...prev,
        {
          id: `custom-${Date.now()}`,
          text: suggestion,
          image: 'https://api.iconify.design/twemoji/speech-balloon.svg',
          category: 'custom',
        }
      ]);
    }
    setSuggestions([]);
  };
  
  const filteredIcons = 
    activeCategory === 'favorites' 
      ? favorites 
      : icons.filter(icon => icon.category === activeCategory);
  
  // After suggestions state
  const suggestedIcons = suggestions
    .map((s: string) => icons.find(ic => ic.text.toLowerCase() === s.toLowerCase()))
    .filter((ic): ic is IconItem => Boolean(ic));
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <header className="game-header text-white p-5 shadow-md">
        <div className="flex items-center">
          <div className="mr-4 bg-white/20 p-2.5 rounded-xl">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">SpeakEasy</h1>
            <p className="text-sm text-blue-100 opacity-90">Communication Adventure</p>
          </div>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto p-5">
        {/* Sentence building area */}
        <SentenceStrip 
          sentence={sentence} 
          onRemove={handleRemoveIcon} 
          onClear={handleClearSentence} 
          onSuggestNext={() => handleGemini('suggest')}
          onCompleteSentence={() => handleGemini('complete')}
          onRewrite={() => handleGemini('rewrite')}
          onExpand={() => handleGemini('expand')}
          suggestions={loadingSuggestion ? ['Loading...'] : suggestions}
          onSuggestionClick={handleSuggestionClick}
        />
        
        {/* Category navigation */}
        <CategoryTabs 
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        
        {/* Favorites section */}
        {activeCategory !== 'favorites' && favorites.length > 0 && (
          <FavoritesSection 
            favorites={favorites} 
            onSelect={handleIconSelect} 
          />
        )}
        
        {/* Main icon grid */}
        <div className="mt-3">
          <IconGrid 
            icons={filteredIcons} 
            onSelect={handleIconSelect} 
            suggestedIcons={suggestedIcons}
          />
        </div>
      </main>
      
      {/* Speak button */}
      <SpeakButton 
        sentence={sentence} 
        isActive={sentence.length > 0} 
      />
    </div>
  );
}

export default App;
