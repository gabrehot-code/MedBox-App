import React from 'react';

export default function InventoryPage({ medications }) {
  return (
    <div className="flex-1 overflow-y-auto flex flex-col bg-[#F8FAFC] pb-20">
      <div className="bg-white border-b border-[#E2E8F0] px-6 pt-12 py-4 shadow-sm">
        <h1 className="font-extrabold text-2xl text-[#1E3A8A]">מלאי תרופות</h1>
        <p className="text-sm text-[#475569] mt-1">{medications.length} תרופות רשומות במערכת</p>
      </div>

      <div className="p-4 space-y-3">
        {medications.map((med) => {
          const isLowStock = med.qty <= 7;
          return (
            <div key={med.id} className={`bg-white rounded-2xl overflow-hidden border transition-all ${isLowStock ? 'border-[#EF4444] shadow-md' : 'border-[#E2E8F0] shadow-sm'}`}>
              <div className="p-4 flex justify-between items-start gap-3">
                <div className="flex-1">
                  <p className="font-extrabold text-lg text-[#0F172A]">{med.name}</p>
                  <p className="text-sm text-[#475569] mt-0.5">{med.dose}</p>
                </div>
                
                <div className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center text-white font-sans flex-shrink-0" style={{ backgroundColor: isLowStock ? '#EF4444' : '#3B82F6' }}>
                  <span className="font-extrabold text-2xl leading-none">{med.qty}</span>
                  <span className="font-semibold text-[10px] opacity-90 mt-0.5">נותרו</span>
                </div>
              </div>

              {isLowStock && (
                <div className="px-4 pb-4">
                  <div className="bg-[#FEF2F2] text-[#EF4444] text-xs font-bold text-center py-2 rounded-xl mb-3">⚠️ מלאי נמוך! מומלץ להזמין בהקדם</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}