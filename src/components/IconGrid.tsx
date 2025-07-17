import { IconItem } from '../types/types';

interface IconGridProps {
  icons: IconItem[];
  onSelect: (icon: IconItem) => void;
  suggestedIcons?: IconItem[];
}

export default function IconGrid({ icons, onSelect, suggestedIcons = [] }: IconGridProps) {
  return (
    <div>
      {suggestedIcons.length > 0 && (
        <div className="mb-2">
          <div className="text-xs text-blue-700 mb-1">Suggested Icons:</div>
          <div className="flex flex-wrap gap-2">
            {suggestedIcons.map((icon, idx) => (
              <button key={idx} onClick={() => onSelect(icon)} className="bg-blue-100 hover:bg-blue-200 rounded px-2 py-1 flex items-center">
                <img src={icon.image} alt={icon.text} className="w-5 h-5 mr-1" />
                <span className="text-xs">{icon.text}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="grid grid-cols-4 gap-3">
        {icons.map((icon, idx) => (
          <button key={idx} onClick={() => onSelect(icon)} className="bg-white hover:bg-blue-50 rounded-xl shadow p-3 flex flex-col items-center">
            <img src={icon.image} alt={icon.text} className="w-8 h-8 mb-1" />
            <span className="text-xs font-medium">{icon.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
