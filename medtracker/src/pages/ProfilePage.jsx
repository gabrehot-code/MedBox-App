import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage({ userProfile, updateProfile, theme }) {
  const navigate = useNavigate();
  const [name, setName] = useState(userProfile.name);
  const [email, setEmail] = useState(userProfile.email);

  const handleSave = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("השם לא יכול להיות ריק");
    
    // יצירת ראשי תיבות אוטומטיים (למשל: מירה לוי -> מ"ל)
    const parts = name.trim().split(" ");
    let initials = parts[0] ? parts[0][0] : "";
    if (parts.length > 1) initials += parts[parts.length - 1][0];

    updateProfile({
      name: name.trim(),
      email: email.trim(),
      initials: initials || 'מש'
    });

    alert("הפרופיל עודכן בהצלחה!");
    navigate('/settings'); // מחזיר אותנו לעמוד ההגדרות
  };

  return (
    <div className={`flex-1 overflow-y-auto flex flex-col pb-20 ${theme === 'dark' ? 'bg-[#1E293B]' : 'bg-[#F8FAFC]'}`}>
      <header className={`h-14 flex flex-row items-center justify-between px-4 shadow-sm flex-shrink-0 ${theme === 'dark' ? 'bg-[#0F172A] border-b border-[#334155]' : 'bg-white border-b border-[#E2E8F0]'}`}>
        <button onClick={() => navigate('/settings')} className="p-2 rounded-full flex items-center justify-center hover:bg-[#F1F5F9]">
          <span className="material-symbols-outlined text-[#475569]">arrow_forward</span>
        </button>
        <h1 className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-[#1E3A8A]'}`}>עריכת פרופיל</h1>
        <div className="w-10"></div>
      </header>

      <main className="p-6 flex-1 space-y-6">
        <div className="flex flex-col items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-bold text-3xl shadow-md border-4 border-white">
            {userProfile.initials}
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div className="space-y-1">
            <label className="block font-bold text-[#475569] text-xs">שם מלא</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className={`w-full h-12 border rounded-xl px-4 text-sm outline-none ${theme === 'dark' ? 'bg-[#0F172A] border-[#334155] text-white focus:border-[#3B82F6]' : 'bg-[#F1F5F9] border-[#E2E8F0] text-[#0F172A] focus:border-[#3B82F6]'}`}
            />
          </div>

          <div className="space-y-1">
            <label className="block font-bold text-[#475569] text-xs">כתובת אימייל</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className={`w-full h-12 border rounded-xl px-4 text-sm outline-none ${theme === 'dark' ? 'bg-[#0F172A] border-[#334155] text-white focus:border-[#3B82F6]' : 'bg-[#F1F5F9] border-[#E2E8F0] text-[#0F172A] focus:border-[#3B82F6]'}`}
            />
          </div>

          <button type="submit" className="w-full h-12 bg-[#3B82F6] text-white font-extrabold rounded-xl shadow-md hover:bg-[#1E3A8A] transition-all pt-1">
            שמור שינויים בפרופיל
          </button>
        </form>
      </main>
    </div>
  );
}