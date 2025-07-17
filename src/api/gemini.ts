// Gemini API utility for text generation
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const getApiKey = () => import.meta.env.VITE_GEMINI_API_KEY;

export async function geminiSuggest({ prompt }: { prompt: string }) {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error('Missing Gemini API key');
  const res = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
  });
  if (!res.ok) throw new Error('Gemini API error');
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

// Helper to build prompts for different features
export function buildPrompt(sentence: string, type: 'suggest'|'complete'|'rewrite'|'expand') {
  switch(type) {
    case 'suggest':
      return `Given the sentence: "${sentence}", suggest the next most relevant word or phrase to continue the sentence. Only reply with the word or phrase, no explanation.`;
    case 'complete':
      return `Complete the following sentence in a natural way: "${sentence}". Only reply with the completed sentence, no explanation.`;
    case 'rewrite':
      return `Rewrite the following sentence to be clearer or more natural: "${sentence}". Only reply with the rewritten sentence, no explanation.`;
    case 'expand':
      return `Expand the following sentence to add more detail or context: "${sentence}". Only reply with the expanded sentence, no explanation.`;
    default:
      return sentence;
  }
} 