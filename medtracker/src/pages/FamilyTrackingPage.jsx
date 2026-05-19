import React from 'react';
import { Link } from 'react-router-dom';

export default function FamilyTrackingPage() {
  return (
    <div className="flex-1 overflow-y-auto flex flex-col bg-[#F8FAFC] pb-20">
      {/* כותרת עמוד עליונה כחולה עם כפתור מעבר לפרופיל */}
      <div className="bg-[#1E3A8A] px-5 pt-12 pb-6 rounded-b-3xl flex-shrink-0 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="font-extrabold text-white text-xl leading-tight">מעקב משפחתי</h1>
            <p className="text-xs mt-0.5 text-[#DBEAFE]">משה לוי · 4 תרופות במעקב</p>
          </div>
          {/* קישור לעמוד הפרופיל */}
          <Link to="/profile" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold hover:bg-white/30 transition-all">
            מ"ל
          </Link>
        </div>

        {/* כרטיסיית אחוזי הצלחה ורצף */}
        <div className="flex items-center gap-4 rounded-2xl p-4 bg-white/10 backdrop-blur-sm">
          <div className="w-16 h-16 rounded-full border-4 border-[#10B981] flex items-center justify-center shadow-inner">
            <span className="font-extrabold text-white text-lg">92%</span>
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <p className="font-bold text-white text-sm">מדד הקפדה שבועי</p>
            <div className="flex gap-2 flex-wrap mt-1">
              <span className="font-bold rounded-lg px-2.5 py-1 text-[10px] bg-[#10B981]/20 text-[#A7F3D0]">3/4 נלקחו היום</span>
              <span className="font-bold rounded-lg px-2.5 py-1 text-[10px] bg-[#3B82F6]/20 text-[#BFDBFE]">רצף 12 ימים 🔥</span>
            </div>
          </div>
        </div>
      </div>

      {/* רשימת תרופות להיום */}
      <div className="px-4 pt-5 space-y-3 flex-1">
        <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] overflow-hidden">
          <div className="px-4 py-3 flex justify-between items-center border-b border-[#F1F5F9] bg-[#F1F5F9]">
            <span className="font-bold text-sm text-[#475569]">סטטוס תרופות להיום</span>
            <Link to="/history" className="font-semibold text-xs text-[#3B82F6] hover:underline">היסטוריה מלאה ›</Link>
          </div>

          {/* תרופה 1: נלקחה */}
          <div className="px-4 py-4 border-b border-[#F1F5F9] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#ECFDF5]">
                <span className="material-symbols-outlined fill-icon text-[#10B981]">check_circle</span>
              </div>
              <div>
                <p className="font-bold text-[#0F172A] text-base">אקמול טיפול נמרץ</p>
                <p className="text-xs text-[#64748B]">נלקח ב-08:00</p>
              </div>
            </div>
            <span className="font-extrabold text-sm text-[#10B981] bg-[#ECFDF5] px-3 py-1 rounded-full">נלקח</span>
          </div>

          {/* תרופה 2: עתידית */}
          <div className="px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F1F5F9]">
                <span className="material-symbols-outlined text-[#475569]">schedule</span>
              </div>
              <div>
                <p className="font-bold text-[#0F172A] text-base">ויטמין D</p>
                <p className="text-xs text-[#64748B]">מתוזמן ל-20:00</p>
              </div>
            </div>
            <span className="font-bold text-sm text-[#475569] bg-[#F1F5F9] px-3 py-1 rounded-full">בקרוב</span>
          </div>
        </div>
      </div>
    </div>
  );
}