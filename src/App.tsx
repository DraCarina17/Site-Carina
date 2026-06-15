/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { HashRouter, BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sitemap from './components/Sitemap';
import LandingPage from './components/LandingPage';
import Procedures from './components/Procedures';
import Contact from './components/Contact';
import ClinicalCases from './components/ClinicalCases';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import { initGtag, trackPageView } from './gtag';

/**
 * Tracks and dispatches page view updates to Google Ads / Tag on standard SPA route changes.
 */
function NavigationTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

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
    initGtag();
  }, []);
  // Use HashRouter for previews to avoid 404s on refresh in proxy environments.
  // Use BrowserRouter for production to maintain SEO-friendly URLs and UTM tracking.
  const Router = isPreview ? HashRouter : BrowserRouter;

  return (
    <Router>
      <NavigationTracker />
      <Routes>
        {/* In preview, show sitemap. In production, show LandingPage directly at the root '/' for better SEO. */}
        <Route 
          path="/" 
          element={isPreview ? <Navigate to="/sitemap" replace /> : <LandingPage />} 
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

