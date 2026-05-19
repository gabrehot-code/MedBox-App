import React, { useState } from 'react';

export default function AiAssistantPage({ theme }) {
  const [messages, setMessages] = useState([
    { id: 1, type: 'ai', text: 'שלום! אני עוזר ה-AI הרפואי שלך. אני רואה שאתה לוקח אקמול טיפול נמרץ וויטמין D. איך אני יכול לעזור לך היום?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = { id: Date.now(), type: 'user', text: inputValue.trim() };
    setMessages(prev => [...prev, userMsg]);
    const query = inputValue.toLowerCase();
    setInputValue('');

    setTimeout(() => {
      let response = "אני כאן כדי לעזור עם מידע על התרופות שלך. נסה לשאול אותי על 'אקמול', 'ויטמין D' או מתי מומלץ לקחת אותן.";
      
      if (query.includes('אקמול') || query.includes('קיבה')) {
        response = "ניתן ליטול אקמול (פרצטמול) עם או בלי אוכל, מכיוון שהוא אינו מגרה את רירית הקיבה. מומלץ לבלוע את הכדור עם כוס מים מלאה.";
      } else if (query.includes('ויטמין') || query.includes('ספיגה')) {
        response = "ויטמין D מומלץ ליטול יחד עם הארוחה המרכזית של היום, מכיוון שהוא נספג טוב יותר בגוף בשילוב עם מזון המכיל שומן בריא.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'ai', text: response }]);
    }, 800);
  };

  return (
    <div className={`flex-1 overflow-y-auto flex flex-col pb-20 ${theme === 'dark' ? 'bg-[#1E293B]' : 'bg-[#F8FAFC]'}`}>
      <div className={`px-5 pt-12 py-3 flex items-center justify-between shadow-sm z-10 flex-shrink-0 ${theme === 'dark' ? 'bg-[#0F172A] border-b border-[#334155]' : 'bg-white border-b border-[#E2E8F0]'}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
            <span className="material-symbols-outlined text-white">auto_awesome</span>
          </div>
          <div>
            <h1 className={`font-extrabold text-lg ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>Med AI</h1>
            <p className="text-[10px] text-[#475569]">התשובות למידע כללי בלבד. יש להתייעץ עם רופא.</p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 py-4 flex flex-col gap-4 overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-end gap-2 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.type === 'ai' && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 text-white">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
              </div>
            )}
            <div className={`rounded-2xl px-4 py-2.5 max-w-[85%] shadow-sm text-sm ${
              msg.type === 'user' 
                ? 'bg-[#3B82F6] text-white rounded-tl-sm' 
                : (theme === 'dark' ? 'bg-[#0F172A] text-white border border-[#334155] rounded-tr-sm' : 'bg-white text-[#0F172A] border border-[#E2E8F0] rounded-tr-sm')
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className={`p-3 flex gap-2 items-center flex-shrink-0 ${theme === 'dark' ? 'bg-[#0F172A] border-t border-[#334155]' : 'bg-white border-t border-[#E2E8F0]'}`}>
        <div className={`flex-1 rounded-2xl flex items-center px-3 min-h-[44px] ${theme === 'dark' ? 'bg-[#1E293B] border border-[#334155]' : 'bg-[#F1F5F9] border border-[#E2E8F0]'}`}>
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={`w-full bg-transparent border-none outline-none text-sm py-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`} 
            placeholder="שאל את ה-AI על התרופות שלך..." 
          />
        </div>
        <button type="submit" className="w-11 h-11 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shadow-md">
          <span className="material-symbols-outlined rtl:rotate-180 text-lg">send</span>
        </button>
      </form>
    </div>
  );
}