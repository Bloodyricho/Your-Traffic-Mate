// A name for the cache - updated with a new version number.
// Changing the version number is crucial to trigger an update.
const cacheName = 'queue-calculator-v7';

// List of files to cache for offline use.
// I've now added all the icon files from your manifest to ensure the app works fully offline.
const cacheAssets = [
  './index.html',
  './manifest.json',
  './ACTIV LOGO.png',
  'https://cdn.tailwindcss.com',
  'windows11/SmallTile.scale-100.png',
  'windows11/SmallTile.scale-125.png',
  'windows11/SmallTile.scale-150.png',
  'windows11/SmallTile.scale-200.png',
  'windows11/SmallTile.scale-400.png',
  'windows11/Square150x150Logo.scale-100.png',
  'windows11/Square150x150Logo.scale-125.png',
  'windows11/Square150x150Logo.scale-150.png',
  'windows11/Square150x150Logo.scale-200.png',
  'windows11/Square150x150Logo.scale-400.png',
  'windows11/Wide310x150Logo.scale-100.png',
  'windows11/Wide310x150Logo.scale-125.png',
  'windows11/Wide310x150Logo.scale-150.png',
  'windows11/Wide310x150Logo.scale-200.png',
  'windows11/Wide310x150Logo.scale-400.png',
  'windows11/LargeTile.scale-100.png',
  'windows11/LargeTile.scale-125.png',
  'windows11/LargeTile.scale-150.png',
  'windows11/LargeTile.scale-200.png',
  'windows11/LargeTile.scale-400.png',
  'windows11/Square44x44Logo.scale-100.png',
  'windows11/Square44x44Logo.scale-125.png',
  'windows11/Square44x44Logo.scale-150.png',
  'windows11/Square44x44Logo.scale-200.png',
  'windows11/Square44x44Logo.scale-400.png',
  'windows11/StoreLogo.scale-100.png',
  'windows11/StoreLogo.scale-125.png',
  'windows11/StoreLogo.scale-150.png',
  'windows11/StoreLogo.scale-200.png',
  'windows11/StoreLogo.scale-400.png',
  'windows11/SplashScreen.scale-100.png',
  'windows11/SplashScreen.scale-125.png',
  'windows11/SplashScreen.scale-150.png',
  'windows11/SplashScreen.scale-200.png',
  'windows11/SplashScreen.scale-400.png',
  'windows11/Square44x44Logo.targetsize-16.png',
  'windows11/Square44x44Logo.targetsize-20.png',
  'windows11/Square44x44Logo.targetsize-24.png',
  'windows11/Square44x44Logo.targetsize-30.png',
  'windows11/Square44x44Logo.targetsize-32.png',
  'windows11/Square44x44Logo.targetsize-36.png',
  'windows11/Square44x44Logo.targetsize-40.png',
  'windows11/Square44x44Logo.targetsize-44.png',
  'windows11/Square44x44Logo.targetsize-48.png',
  'windows11/Square44x44Logo.targetsize-60.png',
  'windows11/Square44x44Logo.targetsize-64.png',
  'windows11/Square44x44Logo.targetsize-72.png',
  'windows11/Square44x44Logo.targetsize-80.png',
  'windows11/Square44x44Logo.targetsize-96.png',
  'windows11/Square44x44Logo.targetsize-256.png',
  'windows11/Square44x44Logo.altform-unplated_targetsize-16.png',
  'windows11/Square44x44Logo.altform-unplated_targetsize-20.png',
  'windows11/Square44x44Logo.altform-unplated_targetsize-24.png',
  'windows11/Square44x44Logo.altform-unplated_targetsize-30.png',
  'windows11/Square44x44Logo.altform-unplated_targetsize-32.png',
  'windows11/Square44x44Logo.altform-unplated_targetsize-36.png',
  'windows11/Square44x44Logo.altform-unplated_targetsize-40.png',
  'windows11/Square44x44Logo.altform-unplated_targetsize-44.png',
  'windows11/Square44x44Logo.altform-unplated_targetsize-48.png',
  'windows11/Square44x44Logo.altform-unplated_targetsize-60.png',
  'windows11/Square44x44Logo.altform-unplated_targetsize-64.png',
  'windows11/Square44x44Logo.altform-unplated_targetsize-72.png',
  'windows11/Square44x44Logo.altform-unplated_targetsize-80.png',
  'windows11/Square44x44Logo.altform-unplated_targetsize-96.png',
  'windows11/Square44x44Logo.altform-unplated_targetsize-256.png',
  'windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png',
  'windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png',
  'windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png',
  'windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png',
  'windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png',
  'windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png',
  'windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png',
  'windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png',
  'windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png',
  'windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png',
  'windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png',
  'windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png',
  'windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png',
  'windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png',
  'windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png',
  'android/android-launchericon-512-512.png',
  'android/android-launchericon-192-192.png',
  'android/android-launchericon-144-144.png',
  'android/android-launchericon-96-96.png',
  'android/android-launchericon-72-72.png',
  'android/android-launchericon-48-48.png',
  'ios/16.png',
  'ios/20.png',
  'ios/29.png',
  'ios/32.png',
  'ios/40.png',
  'ios/50.png',
  'ios/57.png',
  'ios/58.png',
  'ios/60.png',
  'ios/64.png',
  'ios/72.png',
  'ios/76.png',
  'ios/80.png',
  'ios/87.png',
  'ios/100.png',
  'ios/114.png',
  'ios/120.png',
  'ios/128.png',
  'ios/144.png',
  'ios/152.png',
  'ios/167.png',
  'ios/180.png',
  'ios/192.png',
  'ios/256.png',
  'ios/512.png',
  'ios/1024.png'
];

// --- INSTALL EVENT ---
// This event is fired when the service worker is first installed.
// The logic is updated to be more resilient to network failures during installation.
self.addEventListener('install', e => {
  console.log('Service Worker: Installing...');
  e.waitUntil((async () => {
    try {
      const cache = await caches.open(cacheName);
      console.log('Service Worker: Caching app assets.');
      
      // We will try to cache all assets, but we won't let a single failure
      // block the entire service worker installation. This makes it more robust.
      const promises = cacheAssets.map(url => {
        return cache.add(url).catch(err => {
          console.warn(`Failed to cache ${url}, but continuing installation.`, err);
        });
      });

      await Promise.all(promises);

      console.log('Service Worker: Install successful, activating immediately.');
      await self.skipWaiting();
    } catch (err) {
      console.error('Service Worker installation failed:', err);
    }
  })());
});


// --- ACTIVATE EVENT ---
// This event is fired when the service worker is activated.
// It's the perfect place to clean up old, unused caches.
self.addEventListener('activate', e => {
  console.log('Service Worker: Activating...');
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          // If a cache's name is not our current cacheName, we delete it.
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// --- FETCH EVENT ---
// This event is fired every time the app requests a resource.
// This logic has been updated for a more robust offline experience.
self.addEventListener('fetch', e => {
  e.respondWith((async () => {
    try {
      // 1. Try to fetch the resource from the network first.
      const networkResponse = await fetch(e.request);
      
      // If the fetch is successful, update the cache with the new version.
      const cache = await caches.open(cacheName);
      cache.put(e.request, networkResponse.clone());
      
      // And return the fresh response.
      return networkResponse;
    } catch (error) {
      // 2. If the network fetch fails, it means we are offline.
      console.log(`Service Worker: Network request for ${e.request.url} failed. Trying cache.`);
      
      // Try to get the resource from the cache.
      const cachedResponse = await caches.match(e.request);
      if (cachedResponse) {
        return cachedResponse;
      }

      // If the request is for the main page and it's not in the cache,
      // serve the cached index.html as a fallback. This ensures the app always loads.
      if (e.request.mode === 'navigate') {
        console.log('Service Worker: Fetching main app shell from cache.');
        const appShell = await caches.match('./index.html');
        return appShell;
      }

      // If the resource is not the main page and not in the cache, the request will fail.
      // This is expected for non-essential resources that weren't cached during install.
      return new Response("You are offline and this resource is not available.", {
        status: 404,
        statusText: "Offline"
      });
    }
  })());
});
