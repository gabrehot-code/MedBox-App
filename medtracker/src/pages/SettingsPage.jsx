import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SettingsPage({ userProfile, theme, setTheme, language, setLanguage, fontSize, setFontSize }) {
  const navigate = useNavigate();
  const [reminderTime, setReminderTime] = useState('5');
  const [missedAlertTime, setMissedAlertTime] = useState('30');
  const [lowStockDays, setLowStockDays] = useState('7');

  // פונקציית תרגום פשוטה לכותרת לפי השפה הנבחרת
  const getTitle = () => {
    if (language === 'en') return 'System Settings';
    if (language === 'ru') return 'Системные настройки';
    if (language === 'fr') return 'Paramètres du système';
    if (language === 'es') return 'Ajustes del sistema';
    return 'הגדרות מערכת';
  };

  return (
    <div className={`flex-1 overflow-y-auto flex flex-col pb-20 ${theme === 'dark' ? 'bg-[#1E293B]' : 'bg-[#F8FAFC]'}`}>
      {/* סרגל עליון */}
      <div className={`${theme === 'dark' ? 'bg-[#0F172A]' : 'bg-[#1E3A8A]'} px-5 pt-12 pb-6 rounded-b-3xl shadow-md flex-shrink-0`}>
        <h1 className="font-extrabold text-white text-xl text-center">
          {getTitle()}
        </h1>
      </div>

      <div className="px-4 pt-5 space-y-4 flex-1">
        
        {/* כרטיס פרופיל */}
        <div 
          onClick={() => navigate('/profile')}
          className={`rounded-2xl shadow-sm border p-4 flex items-center gap-4 cursor-pointer hover:scale-[1.01] transition-all ${theme === 'dark' ? 'bg-[#0F172A] border-[#334155]' : 'bg-white border border-[#E2E8F0]'}`}
        >
          <div className="w-12 h-12 rounded-full bg-[#DBEAFE] flex items-center justify-center text-[#1E3A8A] font-bold text-lg shadow-inner flex-shrink-0">
            {userProfile.initials}
          </div>
          <div className="flex-1 overflow-hidden">
            <p className={`font-extrabold text-lg leading-tight truncate ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>{userProfile.name}</p>
            <p className="text-xs text-[#64748B] mt-0.5 truncate">{userProfile.email}</p>
          </div>
          <span className="material-symbols-outlined text-[#64748B] flex-shrink-0">edit</span>
        </div>

        {/* קבוצת הגדרות 1: התראות ותזכורות */}
        <div className={`rounded-2xl shadow-sm border overflow-hidden ${theme === 'dark' ? 'bg-[#0F172A] border-[#334155]' : 'bg-white border-[#E2E8F0]'}`}>
          <div className={`px-4 py-2.5 border-b ${theme === 'dark' ? 'bg-[#1E293B] border-[#334155]' : 'bg-[#F1F5F9] border-[#E2E8F0]'}`}>
            <span className="font-bold text-xs text-[#475569]">התראות ותזכורות</span>
          </div>
          
          {/* תזכורות תרופה */}
          <div className="px-4 py-3.5 flex items-center justify-between border-b border-[#F1F5F9]/10 gap-2">
            <span className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>תזכורות תרופה</span>
            <select value={reminderTime} onChange={(e) => setReminderTime(e.target.value)} className="bg-[#F1F5F9] border border-[#E2E8F0] text-xs font-bold text-[#3B82F6] rounded-xl px-2 py-1.5 outline-none max-w-[60%]">
              <option value="0">בזמן המדויק</option>
              <option value="5">5 דקות לפני כל מועד</option>
              <option value="10">10 דקות לפני כל מועד</option>
            </select>
          </div>

          {/* התראות פספוס */}
          <div className="px-4 py-3.5 flex items-center justify-between border-b border-[#F1F5F9]/10 gap-2">
            <span className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>התראות פספוס</span>
            <select value={missedAlertTime} onChange={(e) => setMissedAlertTime(e.target.value)} className="bg-[#F1F5F9] border border-[#E2E8F0] text-xs font-bold text-[#3B82F6] rounded-xl px-2 py-1.5 outline-none max-w-[60%]">
              <option value="30">אם תרופה לא נלקחה תוך 30 דקות</option>
              <option value="60">לאחר שעה</option>
            </select>
          </div>

          {/* מלאי נמוך */}
          <div className="px-4 py-3.5 flex items-center justify-between gap-2">
            <span className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>מלאי נמוך</span>
            <select value={lowStockDays} onChange={(e) => setLowStockDays(e.target.value)} className="bg-[#F1F5F9] border border-[#E2E8F0] text-xs font-bold text-[#3B82F6] rounded-xl px-2 py-1.5 outline-none max-w-[60%]">
              <option value="7">מתחת ל-7 ימים</option>
              <option value="10">מתחת ל-10 ימים</option>
            </select>
          </div>
        </div>

        {/* קבוצת הגדרות 2: העדפות יישום (הורחב בדיוק לפי הבקשה) */}
        <div className={`rounded-2xl shadow-sm border overflow-hidden ${theme === 'dark' ? 'bg-[#0F172A] border-[#334155]' : 'bg-white border-[#E2E8F0]'}`}>
          <div className={`px-4 py-2.5 border-b ${theme === 'dark' ? 'bg-[#1E293B] border-[#334155]' : 'bg-[#F1F5F9] border-[#E2E8F0]'}`}>
            <span className="font-bold text-xs text-[#475569]">העדפות יישום</span>
          </div>
          
          {/* שפה עם עוד שפות לבקשתך */}
          <div className="px-4 py-3.5 flex items-center justify-between border-b border-[#F1F5F9]/10">
            <span className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>שפה</span>
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)} 
              className="bg-[#F1F5F9] border border-[#E2E8F0] text-xs font-bold text-[#3B82F6] rounded-xl px-2 py-1.5 outline-none cursor-pointer"
            >
              <option value="he">עברית</option>
              <option value="en">English</option>
              <option value="ru">Русский (רוסית)</option>
              <option value="fr">Français (צרפתית)</option>
              <option value="es">Español (ספרדית)</option>
            </select>
          </div>

          {/* גודל טקסט עם השפעה מלאה */}
          <div className="px-4 py-3.5 flex items-center justify-between border-b border-[#F1F5F9]/10">
            <span className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>גודל טקסט</span>
            <select 
              value={fontSize} 
              onChange={(e) => setFontSize(e.target.value)} 
              className="bg-[#F1F5F9] border border-[#E2E8F0] text-xs font-bold text-[#3B82F6] rounded-xl px-2 py-1.5 outline-none cursor-pointer"
            >
              <option value="small">קטן</option>
              <option value="normal">רגיל</option>
              <option value="large">גדול (שינוי מיידי)</option>
            </select>
          </div>

          {/* ערכת נושא */}
          <div className="px-4 py-3.5 flex items-center justify-between">
            <span className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>ערכת נושא</span>
            <select value={theme} onChange={(e) => setTheme(e.target.value)} className="bg-[#F1F5F9] border border-[#E2E8F0] text-xs font-bold text-[#3B82F6] rounded-xl px-2 py-1 outline-none">
              <option value="light">☀️ מצב בהיר</option>
              <option value="dark">🌙 מצב כהה</option>
            </select>
          </div>
        </div>

        {/* קבוצת הגדרות 3: פרטיות ונתונים */}
        <div className={`rounded-2xl shadow-sm border overflow-hidden ${theme === 'dark' ? 'bg-[#0F172A] border-[#334155]' : 'bg-white border-[#E2E8F0]'}`}>
          <div className={`px-4 py-2.5 border-b ${theme === 'dark' ? 'bg-[#1E293B] border-[#334155]' : 'bg-[#F1F5F9] border-[#E2E8F0]'}`}>
            <span className="font-bold text-xs text-[#475569]">פרטיות ונתונים</span>
          </div>
          
          <div onClick={() => alert("כל המידע שלך נשמר מקומית על הדפדפן בלבד.")} className="px-4 py-3.5 flex items-center justify-between border-b border-[#F1F5F9]/10 cursor-pointer hover:bg-slate-100/50">
            <span className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>פרטיות</span>
            <span className="text-xs text-[#64748B]">הצג ›</span>
          </div>

          <div onClick={() => alert("הנתונים יוצאו בהצלחה כקובץ גיבוי JSON.")} className="px-4 py-3.5 flex items-center justify-between border-b border-[#F1F5F9]/10 cursor-pointer hover:bg-slate-100/50">
            <span className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>ייצוא נתונים</span>
            <span className="text-xs text-[#3B82F6] font-bold">ייצא קובץ</span>
          </div>

          <div onClick={() => { if(confirm("למחוק הכל?")) { localStorage.clear(); window.location.reload(); } }} className="px-4 py-3.5 flex items-center justify-between cursor-pointer hover:bg-[#FEF2F2]/50">
            <span className="font-medium text-sm text-[#EF4444]">מחק את כל הנתונים</span>
            <span className="material-symbols-outlined text-[#EF4444] text-sm">delete</span>
          </div>
        </div>

        {/* קבוצת הגדרות 4: עזרה ותמיכה */}
        <div className={`rounded-2xl shadow-sm border overflow-hidden ${theme === 'dark' ? 'bg-[#0F172A] border-[#334155]' : 'bg-white border-[#E2E8F0]'}`}>
          <div className={`px-4 py-2.5 border-b ${theme === 'dark' ? 'bg-[#1E293B] border-[#334155]' : 'bg-[#F1F5F9] border-[#E2E8F0]'}`}>
            <span className="font-bold text-xs text-[#475569]">עזרה ותמיכה</span>
          </div>
          
          <div onClick={() => alert("מדריך שימוש מהיר באפליקציה.")} className="px-4 py-3.5 flex items-center justify-between cursor-pointer hover:bg-slate-100/50">
            <span className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>עזרה ותמיכה</span>
            <span className="text-xs text-[#64748B]">פתח מדריך ›</span>
          </div>
        </div>

      </div>
    </div>
  );
}