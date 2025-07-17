import React from 'react';
import { Trash2, X } from 'lucide-react';

interface SentenceStripProps {
  sentence: Array<{id: string, text: string, image: string}>;
  onRemove: (index: number) => void;
  onClear: () => void;
  onSuggestNext?: () => void;
  onCompleteSentence?: () => void;
  onRewrite?: () => void;
  onExpand?: () => void;
  suggestions?: string[];
  onSuggestionClick?: (suggestion: string) => void;
}

export default function SentenceStrip({ sentence, onRemove, onClear, onSuggestNext, onCompleteSentence, onRewrite, onExpand, suggestions = [], onSuggestionClick }: SentenceStripProps) {
  return (
    <div className="game-card p-5 rounded-xl mb-6 min-h-24 card-transition">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-indigo-900 text-xl">Your Message</h2>
        {sentence.length > 0 && (
          <button 
            onClick={onClear}
            className="text-sm bg-red-500/10 hover:bg-red-500/20 text-red-600 px-3.5 py-1.5 rounded-lg transition-all font-medium flex items-center"
          >
            <Trash2 size={14} className="mr-1.5" />
            Clear All
          </button>
        )}
      </div>
      
      {sentence.length === 0 ? (
        <div className="flex items-center justify-center h-20 text-indigo-400 italic border-2 border-dashed border-indigo-100 rounded-xl bg-indigo-50/50">
          Tap icons to build your message
        </div>
      ) : (
        <div className="mb-4">
          {/* Sentence display */}
          <div className="flex flex-wrap items-center gap-2 bg-white rounded-xl shadow p-3 min-h-[56px]">
            {sentence.map((icon, idx) => (
              <div key={idx} className="flex items-center bg-blue-100 rounded px-2 py-1 mr-1">
                <img src={icon.image} alt={icon.text} className="w-5 h-5 mr-1" />
                <span className="mr-1 text-sm">{icon.text}</span>
                <button onClick={() => onRemove(idx)} className="text-xs text-blue-500 hover:text-red-500 ml-1">×</button>
              </div>
            ))}
            {sentence.length > 0 && (
              <button onClick={onClear} className="ml-2 text-xs text-gray-400 hover:text-red-500">Clear</button>
            )}
          </div>
          {/* Suggestion buttons */}
          <div className="flex gap-2 mt-2">
            <button onClick={onSuggestNext} className="bg-blue-200 hover:bg-blue-300 text-blue-800 rounded px-2 py-1 text-xs">Suggest Next</button>
            <button onClick={onCompleteSentence} className="bg-green-200 hover:bg-green-300 text-green-800 rounded px-2 py-1 text-xs">Complete</button>
            <button onClick={onRewrite} className="bg-yellow-200 hover:bg-yellow-300 text-yellow-800 rounded px-2 py-1 text-xs">Rewrite</button>
            <button onClick={onExpand} className="bg-purple-200 hover:bg-purple-300 text-purple-800 rounded px-2 py-1 text-xs">Expand</button>
          </div>
          {/* Suggestions display */}
          {suggestions.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {suggestions.map((s, i) => (
                <button key={i} onClick={() => onSuggestionClick?.(s)} className="bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded px-2 py-1 text-xs text-blue-700">{s}</button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
