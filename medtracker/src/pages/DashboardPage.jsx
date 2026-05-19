import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardPage({ medications, toggleTakenToday, userProfile, theme }) {
  const totalMeds = medications.length;
  const takenMeds = medications.filter(m => m.takenToday).length;
  const complianceRate = totalMeds > 0 ? Math.round((takenMeds / totalMeds) * 100) : 100;

  return (
    <div className={`flex-1 overflow-y-auto flex flex-col pb-20 ${theme === 'dark' ? 'bg-[#1E293B]' : 'bg-[#F8FAFC]'}`}>
      {/* סרגל עליון חכם */}
      <div className={`${theme === 'dark' ? 'bg-[#0F172A]' : 'bg-[#1E3A8A]'} px-5 pt-12 pb-6 rounded-b-3xl shadow-md flex-shrink-0`}>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-extrabold text-white text-xl leading-tight">שלום, {userProfile.name}</h1>
            <p className="text-xs mt-0.5 text-[#DBEAFE]">יום שלישי, 19 למאי, 2026</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-bold border-2 border-white/20">
            {userProfile.initials}
          </div>
        </div>
      </div>

      <div className="px-4 pt-5 space-y-4 flex-1">
        
        {/* כרטיסיית תזכורת דחופה לנטילת תרופה */}
        <div className={`bg-white rounded-2xl border border-[#E2E8F0] p-4 shadow-sm flex items-center justify-between ${theme === 'dark' ? 'bg-[#0F172A] border-[#334155]' : 'bg-white'}`}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#FEF2F2] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#EF4444] text-2xl">alarm</span>
            </div>
            <div>
              <p className={`font-bold text-base ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>הגיע הזמן לנטול תרופה</p>
              <p className="text-xs text-[#64748B]">אקמול טיפול נמרץ · 08:00</p>
            </div>
          </div>
        </div>

        {/* רשימת תרופות דינמית לנטילה היום */}
        <h2 className={`font-bold text-sm px-1 ${theme === 'dark' ? 'text-slate-400' : 'text-[#475569]'}`}>תרופות לנטילה היום</h2>
        
        {totalMeds === 0 ? (
          <p className="text-center text-sm text-[#64748B] py-4">אין תרופות במערכת. כנס ללשונית הוספה!</p>
        ) : (
          medications.map(med => (
            <div key={med.id} className={`rounded-2xl border p-4 shadow-sm flex items-center justify-between transition-all ${theme === 'dark' ? 'bg-[#0F172A] border-[#334155]' : 'bg-white border-[#E2E8F0]'}`}>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${med.takenToday ? 'bg-[#ECFDF5]' : 'bg-[#FEF2F2]'}`}>
                  <span className={`material-symbols-outlined text-2xl ${med.takenToday ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                    {med.takenToday ? 'check_circle' : 'alarm'}
                  </span>
                </div>
                <div>
                  <p className={`font-bold text-base ${med.takenToday ? 'line-through text-[#64748B]' : (theme === 'dark' ? 'text-white' : 'text-[#0F172A]')}`}>{med.name}</p>
                  <p className="text-xs text-[#64748B]">{med.dose} · בשעה {med.time}</p>
                </div>
              </div>
              {/* כפתור אישור נטילה המבוקש */}
              <button 
                onClick={() => toggleTakenToday(med.id)}
                className={`font-extrabold text-xs px-4 py-2.5 rounded-full shadow-sm transition-all ${
                  med.takenToday 
                    ? 'bg-[#FEF2F2] text-[#EF4444] hover:bg-[#FEE2E2]' 
                    : 'bg-[#3B82F6] text-white hover:bg-[#1E3A8A]'
                }`}
              >
                {med.takenToday ? 'ביטול' : 'לקחתי'}
              </button>
            </div>
          ))
        )}

        {/* כרטיסיות סטטיסטיקה */}
        <div className="grid grid-cols-2 gap-3">
          <Link to="/inventory" className={`rounded-2xl border p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[100px] ${theme === 'dark' ? 'bg-[#0F172A] border-[#334155]' : 'bg-white border-[#E2E8F0]'}`}>
            <span className="material-symbols-outlined text-[#3B82F6] text-2xl">inventory_2</span>
            <div>
              <p className={`font-extrabold text-xl mt-2 ${theme === 'dark' ? 'text-white' : 'text-[#0F172A]'}`}>{totalMeds}</p>
              <p className="text-xs font-semibold text-[#475569]">תרופות במלאי</p>
            </div>
          </Link>
          
          <Link to="/family" className={`rounded-2xl border p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[100px] ${theme === 'dark' ? 'bg-[#0F172A] border-[#334155]' : 'bg-white border-[#E2E8F0]'}`}>
            <span className="material-symbols-outlined text-[#10B981] text-2xl">trending_up</span>
            <div>
              <p className="font-extrabold text-[#10B981] text-xl mt-2">{complianceRate}%</p>
              <p className="text-xs font-semibold text-[#475569]">הקפדה דינמית</p>
            </div>
          </Link>
        </div>

        {/* קישור לעוזר ה-AI */}
        <Link to="/ai" className="block bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 text-white shadow-sm hover:opacity-95 transition-all">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-white text-2xl animate-pulse">auto_awesome</span>
            <div>
              <p className="font-extrabold text-sm">יש לך שאלה על התרופות?</p>
              <p className="text-[11px] opacity-85 mt-0.5">התייעץ עכשיו עם Med AI, עוזר הבריאות החכם שלך</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}