import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/Button';

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      return savedTheme === 'dark' || (!savedTheme && prefersDark);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded-full"
    >
      {isDarkMode ? (
        <Sun size={20} className="text-secondary-200" />
      ) : (
        <Moon size={20} className="text-primary-800" />
      )}
    </Button>
  );
}