import React from 'react';
import { Volume2 } from 'lucide-react';
import { useSpeechSynthesis } from 'react-speech-kit';

interface SpeakButtonProps {
  sentence: Array<{text: string}>;
  isActive: boolean;
}

export default function SpeakButton({ sentence, isActive }: SpeakButtonProps) {
  const { speak, speaking, supported } = useSpeechSynthesis();
  
  const handleSpeak = () => {
    if (!isActive || speaking || !supported) return;
    
    const text = sentence.map(item => item.text).join(' ');
    if (text) {
      speak({ text });
    }
  };
  
  return (
    <button
      onClick={handleSpeak}
      disabled={!isActive || speaking || !supported}
      className={`game-speak-button fixed bottom-6 right-6 flex items-center justify-center rounded-full w-20 h-20 shadow-xl transition-all ${
        !isActive 
          ? 'opacity-60 cursor-not-allowed' 
          : ''
      } ${speaking ? 'animate-pulse' : ''}`}
      style={{
        boxShadow: isActive ? '0 8px 32px rgba(249, 115, 22, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)' : undefined
      }}
    >
      <div className={`relative flex items-center justify-center ${isActive ? 'pulse-animation' : ''}`}>
        <Volume2 size={32} className="text-white" />
        {isActive && (
          <>
            <div className="absolute inset-0 bg-white rounded-full opacity-20 animate-ping"></div>
            <div className="absolute inset-[-8px] rounded-full border-2 border-white/30"></div>
          </>
        )}
      </div>
      {!supported && (
        <div className="absolute -top-10 right-0 bg-red-500/90 text-white text-xs p-2 rounded-lg shadow-lg">
          TTS not supported
        </div>
      )}
    </button>
  );
}
