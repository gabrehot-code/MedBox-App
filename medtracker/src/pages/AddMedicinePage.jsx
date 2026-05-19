import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddMedicinePage({ addMedication }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [qty, setQty] = useState('');
  const [dose, setDose] = useState('');
  const [time, setTime] = useState('08:00');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !qty) {
      alert('נא למלא שם וכמות באריזה');
      return;
    }

    addMedication({
      name,
      qty: parseInt(qty, 10),
      dose: dose || "לא צוין",
      time,
      color: "#3B82F6" // צבע דיפולטיבי
    });

    // מעבר אוטומטי לעמוד המלאי אחרי השמירה
    navigate('/inventory');
  };

  return (
    <div className="flex-1 overflow-y-auto flex flex-col bg-[#F8FAFC] pb-20">
      <header className="bg-white border-b border-[#E2E8F0] h-14 flex flex-row items-center justify-between px-4 shadow-sm flex-shrink-0">
        <button onClick={() => navigate('/')} className="p-2 rounded-full flex items-center justify-center hover:bg-[#F1F5F9]">
          <span className="material-symbols-outlined text-[#475569]">close</span>
        </button>
        <h1 className="font-bold text-lg text-[#1E3A8A]">תרופה חדשה</h1>
        <div className="w-10"></div>
      </header>
      
      <main className="px-6 pt-6 pb-4 flex-1">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="block font-bold text-[#475569] text-sm">שם התרופה *</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="לדוגמה: אקמול" className="w-full h-12 bg-[#F1F5F9] border border-[#E2E8F0] rounded-xl px-4 text-[#0F172A] outline-none focus:border-[#3B82F6]" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block font-bold text-[#475569] text-sm">כמות באריזה *</label>
              <input type="number" value={qty} onChange={(e) => setQty(e.target.value)} placeholder="30" className="w-full h-12 bg-[#F1F5F9] border border-[#E2E8F0] rounded-xl px-4 text-[#0F172A] outline-none focus:border-[#3B82F6]" />
            </div>
            <div className="space-y-1">
              <label className="block font-bold text-[#475569] text-sm">מינון</label>
              <input type="text" value={dose} onChange={(e) => setDose(e.target.value)} placeholder="500mg" className="w-full h-12 bg-[#F1F5F9] border border-[#E2E8F0] rounded-xl px-4 text-[#0F172A] outline-none focus:border-[#3B82F6]" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block font-bold text-[#475569] text-sm">שעת תזכורת נטילה</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full h-12 bg-[#F1F5F9] border border-[#E2E8F0] rounded-xl px-4 text-[#0F172A] outline-none focus:border-[#3B82F6]" />
          </div>

          <button type="submit" className="w-full h-14 bg-[#3B82F6] text-white rounded-full font-extrabold text-lg shadow-md hover:bg-[#1E3A8A] transition-all mt-4">
            שמור תרופה ומחק סטטיות
          </button>
        </form>
      </main>
    </div>
  );
}