import React from 'react';

export default function HistoryPage() {
  return (
    <div className="flex-1 overflow-y-auto flex flex-col bg-[#F8FAFC] pb-20">
      {/* כותרת עליונה כחולה עם סטטיסטיקות ביצוע */}
      <div className="bg-[#1E3A8A] px-5 pt-12 pb-6 rounded-b-3xl shadow-md flex-shrink-0">
        <h1 className="font-extrabold text-white text-xl text-center mb-4">היסטוריית נטילות</h1>
        
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 text-center">
            <p className="font-extrabold text-white text-xl">92%</p>
            <p className="text-[10px] mt-0.5 text-[#DBEAFE]">התמדה שבועית</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 text-center">
            <p className="font-extrabold text-[#A7F3D0] text-xl">48</p>
            <p className="text-[10px] mt-0.5 text-[#DBEAFE]">בזמן</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 text-center">
            <p className="font-extrabold text-[#FCA5A5] text-xl">2</p>
            <p className="text-[10px] mt-0.5 text-[#DBEAFE]">פספוסים</p>
          </div>
        </div>
      </div>

      {/* כפתורי סינון זמנים מהירים */}
      <div className="px-4 py-3 flex gap-2 overflow-x-auto flex-shrink-0">
        <button className="font-bold rounded-full px-4 py-2 text-xs bg-[#3B82F6] text-white shadow-sm">השבוע</button>
        <button className="font-bold rounded-full px-4 py-2 text-xs bg-white text-[#475569] border border-[#E2E8F0]">החודש</button>
        <button className="font-bold rounded-full px-4 py-2 text-xs bg-white text-[#475569] border border-[#E2E8F0]">הכל</button>
      </div>

      {/* רשימת ההיסטוריה לפי ימים קלנדריים */}
      <div className="px-4 pb-4 space-y-3 flex-1">
        <div className="font-bold text-xs text-[#64748B] mt-2 px-1">היום, 19 למאי</div>
        
        <div className="bg-white rounded-2xl p-4 border border-[#E2E8F0] shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#ECFDF5]">
              <span className="material-symbols-outlined fill-icon text-[#10B981]">check_circle</span>
            </div>
            <div>
              <p className="font-bold text-[#0F172A] text-base">אקמול טיפול נמרץ</p>
              <p className="text-xs text-[#64748B]">מתוזמן: 08:00 · נלקח ב-08:05</p>
            </div>
          </div>
          <span className="font-bold text-xs text-[#10B981] bg-[#ECFDF5] px-2.5 py-1 rounded-full">בזמן</span>
        </div>

        <div className="font-bold text-xs text-[#64748B] mt-4 px-1">אתמול, 18 למאי</div>

        <div className="bg-white rounded-2xl p-4 border border-[#E2E8F0] shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#ECFDF5]">
              <span className="material-symbols-outlined fill-icon text-[#10B981]">check_circle</span>
            </div>
            <div>
              <p className="font-bold text-[#0F172A] text-base">ויטמין D</p>
              <p className="text-xs text-[#64748B]">מתוזמן: 20:00 · נלקח ב-20:15</p>
            </div>
          </div>
          <span className="font-bold text-xs text-[#10B981] bg-[#ECFDF5] px-2.5 py-1 rounded-full">בזמן</span>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-[#E2E8F0] shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FEF2F2]">
              <span className="material-symbols-outlined text-[#EF4444]">cancel</span>
            </div>
            <div>
              <p className="font-bold text-[#0F172A] text-base">אקמול טיפול נמרץ</p>
              <p className="text-xs text-[#64748B]">מתוזמן: 08:00 · פוספס</p>
            </div>
          </div>
          <span className="font-bold text-xs text-[#EF4444] bg-[#FEF2F2] px-2.5 py-1 rounded-full">פוספס</span>
        </div>
      </div>
    </div>
  );
}