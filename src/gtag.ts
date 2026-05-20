/**
 * Google Tag (gtag.js) utility for tracking page views and Google Ads conversions.
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Get tracking ID and optional Google Ads conversion label from environment variables
export const GOOGLE_ADS_ID = (import.meta as any).env?.VITE_GOOGLE_ADS_ID || 'AW-18137032699';
export const CONVERSION_LABEL = (import.meta as any).env?.VITE_GOOGLE_ADS_CONVERSION_LABEL || 'sdrTCNGLk7AcEPvPtMhD';

/**
 * Initializes the Google Tag (gtag.js) client-side.
 * It appends the script tag dynamically to the document head and triggers the initial config setup.
 */
export const initGtag = () => {
  if (!GOOGLE_ADS_ID || typeof window === 'undefined') {
    console.warn('[Gtag] VITE_GOOGLE_ADS_ID is not configured. Google Tag tracking is inactive.');
    return;
  }

  // Prevent duplicate insertion
  if (document.getElementById('google-ads-gtag')) return;

  try {
    const script = document.createElement('script');
    script.id = 'google-ads-gtag';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());

    // Basic GA4/Ads configuration setup
    window.gtag('config', GOOGLE_ADS_ID, {
      page_path: window.location.pathname + window.location.search,
      send_page_view: true
    });

    console.log(`[Gtag] Successfully initialized Google Tag configured under ID: ${GOOGLE_ADS_ID}`);
  } catch (err) {
    console.error('[Gtag] Failed to load Google Tag script:', err);
  }
};

/**
 * Tracks route navigation to support SPA Page View updates.
 * @param path The URL path withSearchParams (e.g. window.location.pathname + window.location.search)
 */
export const trackPageView = (path: string) => {
  if (!GOOGLE_ADS_ID || !window.gtag) return;
  
  window.gtag('config', GOOGLE_ADS_ID, {
    page_path: path,
  });
  console.log(`[Gtag] Tracked page view: ${path}`);
};

/**
 * Emits a standard GA4/Gtag event.
 * @param action Name of the action (e.g., 'click')
 * @param category Category of the element (e.g., 'WhatsApp Link')
 * @param label Descriptive label
 * @param value Optional numeric value attached
 */
export const trackEvent = (action: string, category: string, label: string, value?: number) => {
  if (!GOOGLE_ADS_ID || !window.gtag) {
    console.log(`[Gtag Event Dev-Mode] Name: "${action}", Type: "${category}" -> "${label}"`, value !== undefined ? `Value: ${value}` : '');
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

/**
 * Triggers a Google Ads conversion event.
 * If VITE_GOOGLE_ADS_CONVERSION_LABEL represents a full 'AW-XXXX/XXXX' string or just the label.
 */
export const trackConversion = () => {
  if (!GOOGLE_ADS_ID) {
    console.warn('[Gtag Conversion Dev-Mode] Triggered WhatsApp contact conversion simulator.');
    return;
  }

  if (!window.gtag) {
    console.warn('[Gtag Conversion Warning] Gtag is not yet fully loaded to register conversion.');
    return;
  }

  // Construct target string if conversion label is specified (e.g., 'AW-YYYYYY/XXXXXX' or just 'XXXXXX')
  let sendToTarget = GOOGLE_ADS_ID;
  if (CONVERSION_LABEL) {
    // If conversion label does not contain '/' and is just the label, combine it with the standard AW-ID
    if (!CONVERSION_LABEL.includes('/') && GOOGLE_ADS_ID.startsWith('AW-')) {
      sendToTarget = `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`;
    } else {
      sendToTarget = CONVERSION_LABEL;
    }
  }

  window.gtag('event', 'conversion', {
    send_to: sendToTarget,
    value: 1.0,
    currency: 'BRL'
  });

  console.log(`[Gtag] Dispatched conversion track to: ${sendToTarget}`);
};

/**
 * Explicit helper for tracking clinical conversions initiated by WhatsApp clicks.
 */
export const trackWhatsAppClick = (source: string) => {
  trackEvent('click_whatsapp', 'Contact', `WhatsApp Click from ${source}`);
  trackConversion();
};
