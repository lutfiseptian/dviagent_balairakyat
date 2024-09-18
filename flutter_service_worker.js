'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7acaa25dd69a5efe1fde4128b9147a79",
"version.json": "3d736653d17dd2cb872b470a3527142c",
"index.html": "b29b57bf639bc6845c680c9f0ee7c869",
"/": "b29b57bf639bc6845c680c9f0ee7c869",
"firebase-messaging-sw.js": "497e9b85eabe76d55a5bde47b189e9ac",
"main.dart.js": "6589045190a38f455afc3da5fbfc93a4",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "42be804b9815bb7000f58c1055c5498f",
"assets/AssetManifest.json": "863edc29aad242af4644da11afb9ad55",
"assets/NOTICES": "f769d1318c38ddf5c989d11896607a27",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/AssetManifest.bin.json": "ae2bd8d7990783e3a92f4bbe27c5eacd",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "20e254742973a9316f83705d208e0aef",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/dana_logo.png": "1387e7a9867d8df798d4c2cb080b6839",
"assets/assets/images/icon_carapembayaran.png": "62c385d4dbc9756afebdd7621fa65234",
"assets/assets/images/banner.png": "bc6ed5fd70989f4438e4042e255d0529",
"assets/assets/images/icon_contac_ketentuan.png": "ec24ea73de07cf9555cbe3bf5973e9e9",
"assets/assets/images/icon_refund.png": "0193b1b29ff03e2ee95c510988696c3e",
"assets/assets/images/banner1.png": "baf9c6b9c28b213c662185efffd1a382",
"assets/assets/images/banner_xl.jpg": "5595286518083f4232b1ea8ac4a6eadd",
"assets/assets/images/shopping.png": "1dc7438342030e2b5b52ca20616dcf4f",
"assets/assets/images/banner_ml.jpg": "5f9cbb5f8a0cd42b356248ac95fb181f",
"assets/assets/images/cod.png": "201dfc2e7831d5940bd907d74a76a44d",
"assets/assets/images/loading_kase.png": "6bedee1d3b9b90ee94fd38abea93cf14",
"assets/assets/images/banner_listrik.png": "090c87388509ee9b521064f808dde327",
"assets/assets/images/banner_smart.jpg": "2ee1a3a809e7d9f82b761b7d33191b5b",
"assets/assets/images/logo_balairakyat.png": "b7cf0a506d26aa4ebf24b7fe67eb5145",
"assets/assets/images/bca_logo.png": "5b10790345e80bf55fd475d782f8fcc8",
"assets/assets/images/icon_profile_ketentuan.png": "4ea0eb89d7bf6da6836afd0d5d4b18b5",
"assets/assets/images/banner_shopper.jpg": "ef88d502166cf84bba0677f520749d34",
"assets/assets/images/logo_dviagen.png": "adab5a1ecd0fa481be17945b3c164ee3",
"assets/assets/images/logo.png": "8f593bb22dd6e1efc0c45fb954eef538",
"assets/assets/images/icon_ketentuan_refund.png": "a821b413bfd40e539402a98c5f51e1b8",
"assets/assets/images/banner_govo.png": "a669223259e80c3f89f1f7e8978c8407",
"assets/assets/images/icon_produk_kase.png": "a94b71ccf995b790e24c4d0e910f9a45",
"assets/assets/images/banner_shoppe.png": "7cec35ba65e57e7248bd39351296623f",
"assets/assets/images/icon_privasi_ketentuan.png": "e4e5b9a3157e0bcfe61767a42957fe3a",
"assets/assets/images/envoiz_logo_new.png": "3282ba195264fac3ced0b6ee35e8cc39",
"assets/assets/images/banner_gopay.jpg": "acd44f369784fc050ca03024aa124506",
"assets/assets/images/tentang_image.png": "49560fde39c205a15f32f8ace393220d",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
