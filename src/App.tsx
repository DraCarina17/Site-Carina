/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { HashRouter, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sitemap from './components/Sitemap';
import LandingPage from './components/LandingPage';
import Procedures from './components/Procedures';
import Contact from './components/Contact';
import ClinicalCases from './components/ClinicalCases';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

/**
 * Detects if the current environment is a preview/proxy environment.
 */
function checkPreviewEnvironment(): boolean {
  const indicators = [
    'googleusercontent',
    'webcontainer',
    'shim',
    '.goog',
    'scf.usercontent',
    'stackblitz',
    'codesandbox'
  ];
  const currentUrl = window.location.href;
  return indicators.some(indicator => currentUrl.includes(indicator));
}

export default function App() {
  const isPreview = checkPreviewEnvironment();
  
  useEffect(() => {
    document.title = "Dra Carina Corneta - Odontologia";
  }, []);
  // Use HashRouter for previews to avoid 404s on refresh in proxy environments.
  // Use BrowserRouter for production to maintain SEO-friendly URLs and UTM tracking.
  const Router = isPreview ? HashRouter : BrowserRouter;

  return (
    <Router>
      <Routes>
        {/* Dynamic Root Redirection based on environment */}
        <Route 
          path="/" 
          element={<Navigate to={isPreview ? "/sitemap" : "/lp-video"} replace />} 
        />
        
        {/* Main Routes */}
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/lp-video" element={<LandingPage />} />
        <Route path="/procedimentos" element={<Procedures />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/casos-clinicos" element={<ClinicalCases />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

