import { useEffect, useState } from 'react';
import '../styles/mode.css';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const isDark = savedTheme === 'dark';
    setDarkMode(isDark);
    document.body.classList.toggle('dark', isDark);
  }, []);

  const handleToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <div className="toggle-container">
      <span>☀️</span>
      <label className="toggle-switch">
        <input type="checkbox" checked={darkMode} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
      <span>🌙</span>
    </div>
  );
}

export default ThemeToggle;
