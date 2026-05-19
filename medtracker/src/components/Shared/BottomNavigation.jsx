import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] h-16 bg-white border-t border-[#E2E8F0] flex flex-row justify-around items-center px-2 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.03)]">
      
      {/* לוח בקרה / בית */}
      <NavLink 
        to="/" 
        className={({ isActive }) => `flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all ${isActive ? 'text-[#3B82F6]' : 'text-[#64748B]'}`}
      >
        <span className="material-symbols-outlined text-2xl">home</span>
        <span className="text-[10px] font-bold mt-0.5">ראשי</span>
      </NavLink>

      {/* מלאי תרופות */}
      <NavLink 
        to="/inventory" 
        className={({ isActive }) => `flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all ${isActive ? 'text-[#3B82F6]' : 'text-[#64748B]'}`}
      >
        <span className="material-symbols-outlined text-2xl">inventory_2</span>
        <span className="text-[10px] font-bold mt-0.5">מלאי</span>
      </NavLink>

      {/* הוספת תרופה מהירה */}
      <NavLink 
        to="/add-medicine" 
        className={({ isActive }) => `flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all ${isActive ? 'text-[#3B82F6]' : 'text-[#64748B]'}`}
      >
        <span className="material-symbols-outlined text-2xl">add_circle</span>
        <span className="text-[10px] font-bold mt-0.5">הוספה</span>
      </NavLink>

      {/* מעקב משפחתי */}
      <NavLink 
        to="/family" 
        className={({ isActive }) => `flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all ${isActive ? 'text-[#3B82F6]' : 'text-[#64748B]'}`}
      >
        <span className="material-symbols-outlined text-2xl">group</span>
        <span className="text-[10px] font-bold mt-0.5">מעקב</span>
      </NavLink>

      {/* עוזר חכם AI */}
      <NavLink 
        to="/ai" 
        className={({ isActive }) => `flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all ${isActive ? 'text-[#3B82F6]' : 'text-[#64748B]'}`}
      >
        <span className="material-symbols-outlined text-2xl">auto_awesome</span>
        <span className="text-[10px] font-bold mt-0.5">Med AI</span>
      </NavLink>

      {/* הגדרות */}
      <NavLink 
        to="/settings" 
        className={({ isActive }) => `flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all ${isActive ? 'text-[#3B82F6]' : 'text-[#64748B]'}`}
      >
        <span className="material-symbols-outlined text-2xl">settings</span>
        <span className="text-[10px] font-bold mt-0.5">הגדרות</span>
      </NavLink>

    </nav>
  );
}