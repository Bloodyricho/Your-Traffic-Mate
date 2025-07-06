/**
 * Service Worker for the Activ Civil Calculator App
 *
 * @version 1.0
 *
 * This service worker uses a "Network First, falling back to Cache" strategy.
 * This means it will always try to fetch the latest content from the network.
 * If the network is unavailable (i.e., the user is offline), it will serve the content
 * from the cache instead. This ensures the app is always available while also
 * providing the most up-to-date content when possible.
 */

// A unique name for the cache. Changing this name will trigger the service worker
// to update, clearing the old cache and caching the new files.
const CACHE_NAME = 'activ-civil-calculators-v1';

// A list of all the essential files (the "app shell") that need to be cached
// for the app to work offline.
const urlsToCache = [
  './', // This caches the root URL of the app
  './index.html',
  './manifest.json',
  './ACTIV LOGO.png',
  'https://cdn.tailwindcss.com',
  // It's important to cache all icons referenced in the manifest for a complete
  // offline and installable experience on all devices.
  './windows11/SmallTile.scale-100.png',
  './windows11/SmallTile.scale-125.png',
  './windows11/SmallTile.scale-150.png',
  './windows11/SmallTile.scale-200.png',
  './windows11/SmallTile.scale-400.png',
  './windows11/Square150x150Logo.scale-100.png',
  './windows11/Square150x150Logo.scale-125.png',
  './windows11/Square150x150Logo.scale-150.png',
  './windows11/Square150x150Logo.scale-200.png',
  './windows11/Square150x150Logo.scale-400.png',
  './windows11/Wide310x150Logo.scale-100.png',
  './windows11/Wide310x150Logo.scale-125.png',
  './windows11/Wide310x150Logo.scale-150.png',
  './windows11/Wide310x150Logo.scale-200.png',
  './windows11/Wide310x150Logo.scale-400.png',
  './windows11/LargeTile.scale-100.png',
  './windows11/LargeTile.scale-125.png',
  './windows11/LargeTile.scale-150.png',
  './windows11/LargeTile.scale-200.png',
  './windows11/LargeTile.scale-400.png',
  './windows11/Square44x44Logo.scale-100.png',
  './windows11/Square44x44Logo.scale-125.png',
  './windows11/Square44x44Logo.scale-150.png',
  './windows11/Square44x44Logo.scale-200.png',
  './windows11/Square44x44Logo.scale-400.png',
  './windows11/StoreLogo.scale-100.png',
  './windows11/StoreLogo.scale-125.png',
  './windows11/StoreLogo.scale-150.png',
  './windows11/StoreLogo.scale-200.png',
  './windows11/StoreLogo.scale-400.png',
  './windows11/SplashScreen.scale-100.png',
  './windows11/SplashScreen.scale-125.png',
  './windows11/SplashScreen.scale-150.png',
  './windows11/SplashScreen.scale-200.png',
  './windows11/SplashScreen.scale-400.png',
  './android/android-launchericon-512-512.png',
  './android/android-launchericon-192-192.png',
  './android/android-launchericon-144-144.png',
  './android/android-launchericon-96-96.png',
  './android/android-launchericon-72-72.png',
  './android/android-launchericon-48-48.png',
  './ios/16.png',
  './ios/20.png',
  './ios/29.png',
  './ios/32.png',
  './ios/40.png',
  './ios/50.png',
  './ios/57.png',
  './ios/58.png',
  './ios/60.png',
  './ios/64.png',
  './ios/72.png',
  './ios/76.png',
  './ios/80.png',
  './ios/87.png',
  './ios/100.png',
  './ios/114.png',
  './ios/120.png',
  './ios/128.png',
  './ios/144.png',
  './ios/152.png',
  './ios/167.png',
  './ios/180.png',
  './ios/192.png',
  './ios/256.png',
  './ios/512.png',
  './ios/1024.png'
];

// --- INSTALL EVENT ---
// This event is fired when the service worker is first installed.
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  // waitUntil() ensures that the service worker will not install until the
  // code inside has successfully completed.
  event.waitUntil(
    // Open the cache by name.
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching App Shell');
        // Add all the specified assets to the cache.
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        // Force the waiting service worker to become the active service worker.
        return self.skipWaiting();
      })
  );
});

// --- ACTIVATE EVENT ---
// This event is fired when the service worker is activated.
// It's the perfect place to clean up old, unused caches.
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    // Get all the cache names (keys).
    caches.keys().then((cacheNames) => {
      return Promise.all(
        // Map over all the cache names.
        cacheNames.map((cache) => {
          // If a cache's name is not our current CACHE_NAME, we delete it.
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// --- FETCH EVENT ---
// This event is fired every time the app requests a resource (e.g., a page, script, image).
self.addEventListener('fetch', (event) => {
  // We use respondWith() to hijack the request and provide our own response.
  event.respondWith(
    // First, try to fetch the resource from the network.
    fetch(event.request)
      .then((networkResponse) => {
        // If the network request is successful, we should cache the new response.
        return caches.open(CACHE_NAME).then((cache) => {
          // Put a copy of the response in the cache for future offline use.
          cache.put(event.request, networkResponse.clone());
          // And return the fresh response from the network.
          return networkResponse;
        });
      })
      .catch(() => {
        // If the network request fails (i.e., we're offline),
        // try to get the resource from the cache instead.
        console.log(`Service Worker: Fetch failed for ${event.request.url}. Serving from cache.`);
        return caches.match(event.request);
      })
  );
});
