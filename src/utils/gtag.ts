export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag("config", "G-1SRVQEZCET", {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type GTagEvent = {
  action: string
  category?: string
  label: string
  value: string
}

export const event = ({ action, category = "general", label, value }: GTagEvent) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};