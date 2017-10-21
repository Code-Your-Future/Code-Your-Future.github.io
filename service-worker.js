"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","eb3f3c211177cb127d9f1fbd8fbbf0fb"],["static/js/main.46fad188.js","33022d29de2c93b4474d78d490498ffe"],["static/media/amit.430ca651.jpg","430ca65113ceca4c218ef80c94d90008"],["static/media/bex.5b6e82e4.jpg","5b6e82e451d8110f8d06e8373140316b"],["static/media/claudia.1143c7b8.jpg","1143c7b8ca0c86f7182f3cce10feaa8e"],["static/media/code.66441ed5.svg","66441ed5b561bd0a1adef08f85c83ed4"],["static/media/conference-hall.a97da1ed.svg","a97da1edee8f91402fa4bbad8816aeef"],["static/media/cyf_brand.fbcea877.png","fbcea87769f4ae6b776d2d54778f5348"],["static/media/email-icon.14b25ceb.svg","14b25cebab1202a341ab9551d9279607"],["static/media/fb_logo.ab92ad6d.svg","ab92ad6d992f203adfc29fddf0efd3e6"],["static/media/german.47f11405.jpg","47f114056652404860bbdf2422b3493f"],["static/media/index.18e9058c.scss","18e9058c0f35c1afc3bc691921c0a646"],["static/media/james.4eadcacb.png","4eadcacb88fb5afec6efc53e63bf4b2c"],["static/media/kash.16e0f0bf.jpg","16e0f0bf19a00e8f2191b3cd83b39768"],["static/media/laptop.78b49b14.svg","78b49b1428095ce883660b60a7bb79d0"],["static/media/linkedin-logo.7658ffb2.svg","7658ffb25432b6205a9594bf65a8ff16"],["static/media/mozafar.65181414.jpg","65181414524b9d9acd8809ce27af487b"],["static/media/nate.44a9ba3d.jpg","44a9ba3d37a5897e921d09032b94d7ab"],["static/media/pipedrive.7accd6d4.png","7accd6d44c8665cb946f1efc19fa971b"],["static/media/rob.58166c3f.jpg","58166c3f12564d776b0b08d430e286b3"],["static/media/simon.718b6348.jpg","718b63487df5df225c80d7800a36dbfa"],["static/media/ticketmaster.4e3e2ba6.png","4e3e2ba61678958d175cabd16a5b3350"],["static/media/twitter-silhouette.587a4df2.svg","587a4df297afc3d2e3be6be7099de59c"],["static/media/will.97e2c509.jpg","97e2c509fc9fa4331f66b83eda1a7a84"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});