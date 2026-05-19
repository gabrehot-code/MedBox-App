import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage.jsx';
import InventoryPage from './pages/InventoryPage.jsx';
import AddMedicinePage from './pages/AddMedicinePage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import FamilyTrackingPage from './pages/FamilyTrackingPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import HistoryPage from './pages/HistoryPage.jsx';
import AiAssistantPage from './pages/AiAssistantPage.jsx';
import BottomNavigation from './components/Shared/BottomNavigation.jsx';

function App() {
  // ניהול מצב גלובלי
  const [medications, setMedications] = useState(() => JSON.parse(localStorage.getItem('medications')) || [{ id: 1, name: "אקמול", dose: "500mg", qty: 45, time: "08:00", takenToday: false }]);
  const [userProfile, setUserProfile] = useState(() => JSON.parse(localStorage.getItem('userProfile')) || { name: "מירה לוי", email: "mira@example.com", initials: "מ\"ל" });
  const [theme, setTheme] = useState(localStorage.getItem('appTheme') || 'light');
  const [language, setLanguage] = useState(localStorage.getItem('appLanguage') || 'he');
  const [fontSize, setFontSize] = useState(localStorage.getItem('appFontSize') || '16px');

  // שמירה ל-LocalStorage
  useEffect(() => {
    localStorage.setItem('medications', JSON.stringify(medications));
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    localStorage.setItem('appTheme', theme);
    localStorage.setItem('appLanguage', language);
    localStorage.setItem('appFontSize', fontSize);
  }, [medications, userProfile, theme, language, fontSize]);

  const toggleTakenToday = (id) => {
    setMedications(prev => prev.map(m => m.id === id ? { ...m, takenToday: !m.takenToday, qty: !m.takenToday ? Math.max(0, m.qty - 1) : m.qty + 1 } : m));
  };

  return (
    <Router>
      {/* כאן קורה הקסם: כל האפליקציה מקבלת את העיצוב הדינמי */}
      <div dir={language === 'he' || language === 'ar' ? 'rtl' : 'ltr'} style={{ fontSize: fontSize }}>
        <div className={`phone-frame ${theme === 'dark' ? 'bg-[#0F172A] text-white' : 'bg-[#F8FAFC] text-black'}`}>
          <Routes>
            <Route path="/" element={<DashboardPage medications={medications} toggleTakenToday={toggleTakenToday} userProfile={userProfile} theme={theme} />} />
            <Route path="/inventory" element={<InventoryPage medications={medications} theme={theme} />} />
            <Route path="/add-medicine" element={<AddMedicinePage addMedication={(m) => setMedications([...medications, m])} theme={theme} />} />
            <Route path="/settings" element={<SettingsPage userProfile={userProfile} setUserProfile={setUserProfile} theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} fontSize={fontSize} setFontSize={setFontSize} />} />
            <Route path="/ai" element={<AiAssistantPage theme={theme} />} />
            <Route path="/family" element={<FamilyTrackingPage medications={medications} />} />
            <Route path="/profile" element={<ProfilePage userProfile={userProfile} setUserProfile={setUserProfile} />} />
            <Route path="/history" element={<HistoryPage medications={medications} />} />
          </Routes>
          <BottomNavigation />
        </div>
      </div>
    </Router>
  );
}

export default App;