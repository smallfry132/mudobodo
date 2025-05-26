import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { HomePage } from './pages/HomePage';
import { PhotographyPage } from './pages/PhotographyPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { AboutPage } from './pages/AboutPage';
import { ImprintPage } from './pages/ImprintPage';
import { PrivacyPage } from './pages/PrivacyPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        
        <main className="flex-grow mt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/photography" element={<PhotographyPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/imprint" element={<ImprintPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </main>
        
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;