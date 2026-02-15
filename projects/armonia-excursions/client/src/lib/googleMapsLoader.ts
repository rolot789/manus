/// <reference types="@types/google.maps" />

declare global {
  interface Window {
    google?: typeof google;
  }
}

const API_KEY = import.meta.env.VITE_FRONTEND_FORGE_API_KEY;
const FORGE_BASE_URL =
  import.meta.env.VITE_FRONTEND_FORGE_API_URL ||
  "https://forge.butterfly-effect.dev";
const MAPS_PROXY_URL = `${FORGE_BASE_URL}/v1/maps/proxy`;

let loaderPromise: Promise<void> | null = null;

export function loadGoogleMapsScript(): Promise<void> {
  if (window.google?.maps) {
    return Promise.resolve();
  }

  if (!API_KEY) {
    return Promise.reject(
      new Error(
        "Google Maps API key is missing. Please set VITE_FRONTEND_FORGE_API_KEY.",
      ),
    );
  }

  if (loaderPromise) {
    return loaderPromise;
  }

  loaderPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `${MAPS_PROXY_URL}/maps/api/js?key=${API_KEY}&v=weekly&libraries=marker,places,geocoding,geometry`;
    script.async = true;
    script.crossOrigin = "anonymous";

    script.onload = () => {
      if (!window.google?.maps) {
        loaderPromise = null;
        reject(new Error("Google Maps loaded, but maps namespace is unavailable."));
        return;
      }

      resolve();
      script.remove();
    };

    script.onerror = () => {
      loaderPromise = null;
      reject(new Error("Failed to load Google Maps script."));
    };

    document.head.appendChild(script);
  });

  return loaderPromise;
}
