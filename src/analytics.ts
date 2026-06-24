type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: AnalyticsPayload; u?: string }) => void;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

const appendScript = (src: string, attributes: Record<string, string> = {}) => {
  if (document.querySelector(`script[src="${src}"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.defer = true;
  script.src = src;

  Object.entries(attributes).forEach(([key, value]) => {
    script.setAttribute(key, value);
  });

  document.head.append(script);
};

export const initAnalytics = () => {
  if (plausibleDomain) {
    appendScript("https://plausible.io/js/script.js", { "data-domain": plausibleDomain });
  }

  if (gaMeasurementId) {
    appendScript(`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`);
    window.dataLayer = window.dataLayer ?? [];
    window.gtag =
      window.gtag ??
      function gtag() {
        window.dataLayer?.push(arguments);
      };
    window.gtag("js", new Date());
    window.gtag("config", gaMeasurementId, { send_page_view: false });
  }
};

export const trackPageView = (path: string, title: string) => {
  const url = `${window.location.origin}${window.location.pathname}${window.location.search}${window.location.hash}`;

  window.plausible?.("pageview", { u: url });
  window.gtag?.("event", "page_view", {
    page_path: path,
    page_title: title,
    page_location: url
  });
};

export const trackEvent = (eventName: string, payload: AnalyticsPayload = {}) => {
  window.plausible?.(eventName, { props: payload });
  window.gtag?.("event", eventName, payload);
};
