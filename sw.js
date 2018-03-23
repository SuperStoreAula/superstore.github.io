/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "ccda9590633b0cdde50886bbf70edb0d"
  },
  {
    "url": "inline.082edb8c503290a9882a.bundle.js",
    "revision": "7c460363780e3f645652f4517c9760fe"
  },
  {
    "url": "main.aeac2c741f80abe313b4.bundle.js",
    "revision": "ed8d58658ebcfb563d3a30be73a48494"
  },
  {
    "url": "polyfills.f20484b2fa4642e0dca8.bundle.js",
    "revision": "5ec94a9c48581a0bc928600b1686a11b"
  },
  {
    "url": "styles.635075ae76aafd382e0a.bundle.css",
    "revision": "635075ae76aafd382e0ad1cf67daee9d"
  },
  {
    "url": "assets/avatar.png",
    "revision": "bda9b390221c6fd0e98869cca64cfa25"
  },
  {
    "url": "assets/sda-control.svg",
    "revision": "7c6ac1a4d214dad88548deb55572c2a3"
  },
  {
    "url": "assets/super-store.svg",
    "revision": "8df0df15b5f843c322ac92e58e34fcce"
  },
  {
    "url": "assets/games/captain.jpg",
    "revision": "592fadaed0f6733746e9b80cf22afd54"
  },
  {
    "url": "assets/games/cdino.png",
    "revision": "20633b39dd474e3dc772140c395e94e1"
  },
  {
    "url": "assets/games/Currículo - Larissa Novaes - Secretária Executiva.docx",
    "revision": "8a3e1e028033a33885a34b8a863f8c86"
  },
  {
    "url": "assets/games/Currículo - Larissa Novaes - Secretária Executiva.pdf",
    "revision": "0c655e7c5bb6fcd59578082427cec73c"
  },
  {
    "url": "assets/games/final-fight.jpg",
    "revision": "09df5c429e9f36d36cd1fd71d650aee0"
  },
  {
    "url": "assets/games/fzero.jpg",
    "revision": "32f24b1f5432b269b22c006355c8b1b7"
  },
  {
    "url": "assets/games/mario.jpg",
    "revision": "8696e995a1b0c46c204100681cd226dc"
  },
  {
    "url": "assets/games/megaman.png",
    "revision": "d946b148aa9b3fb6315637cf3519cc8c"
  },
  {
    "url": "assets/games/metal-gear.jpg",
    "revision": "565b0089d685460efa8a72c9f9906f3a"
  },
  {
    "url": "assets/games/mortal-kombat.jpg",
    "revision": "df65bfd138fcd7c1eba21a3f1956f726"
  },
  {
    "url": "assets/games/street-fighter.jpg",
    "revision": "ededc61895683e62a556814cd86015ff"
  },
  {
    "url": "assets/games/topgear.jpg",
    "revision": "0559335f257af6d2a20d09986a43974b"
  },
  {
    "url": "assets/games/vampeta-fala-sobre-ensaio-nu-para-a-g-magazine.jpg",
    "revision": "585956533a2a5165cd4f358b70b9c85d"
  },
  {
    "url": "manifest.json",
    "revision": "c2bb82d05adefb93d4b25cc2ea994634"
  },
  {
    "url": "?utm_source=pwa",
    "revision": "b08f3d4fb94b3992afe2d4ad17892324"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("index.html");
