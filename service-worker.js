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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "da76c47e73b801c21cd05f5df447f91a"
  },
  {
    "url": "assets/css/0.styles.4db9fc3d.css",
    "revision": "179068b4a53372c94c5c6b63db8b47ac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b3c29c0a.js",
    "revision": "0da71fc67645ac0424a28d0cf5c2e770"
  },
  {
    "url": "assets/js/11.cfca6bce.js",
    "revision": "fe92dfa056547623763625e902c4d2ca"
  },
  {
    "url": "assets/js/12.fb2a6ab6.js",
    "revision": "bd56c056069da139107aa90111d20332"
  },
  {
    "url": "assets/js/13.c2091635.js",
    "revision": "351294654c6e443bdbf467de8b47c3c1"
  },
  {
    "url": "assets/js/14.a1108766.js",
    "revision": "eadc408e1b813fcb5aebfece8742d719"
  },
  {
    "url": "assets/js/15.db2a2d25.js",
    "revision": "3ca45b8d35924c10a0d85daf9e9a6fb2"
  },
  {
    "url": "assets/js/16.69d8f2f2.js",
    "revision": "eb8899c1740372cd657f052632bef62d"
  },
  {
    "url": "assets/js/17.424da8ab.js",
    "revision": "52c1606cd6df5531592b1fb98d3259dc"
  },
  {
    "url": "assets/js/18.2e4b89ad.js",
    "revision": "e1c9e2b64c18ae7f40958d2ad2ce5c9f"
  },
  {
    "url": "assets/js/19.c28f5cc3.js",
    "revision": "c9d8f0bd1494cded5133c7fb8e2bb68f"
  },
  {
    "url": "assets/js/2.3a5c8666.js",
    "revision": "eb439e8cb9cef3b49452b93cde51291a"
  },
  {
    "url": "assets/js/20.75f8b570.js",
    "revision": "95820db28068d806564a2b9c1c5be85b"
  },
  {
    "url": "assets/js/21.307c20df.js",
    "revision": "fa576c16c63f025eff779e2c95764e30"
  },
  {
    "url": "assets/js/22.bc80104a.js",
    "revision": "79aed222df34677900a3cf1005848e2d"
  },
  {
    "url": "assets/js/23.13c57f61.js",
    "revision": "19512692aa066009f82a241c33bd287f"
  },
  {
    "url": "assets/js/24.a9d796d2.js",
    "revision": "c6c26508631001a8450e635d1d53a00a"
  },
  {
    "url": "assets/js/25.d6f7ebc1.js",
    "revision": "5df42567ae1d8d07df1137e5cadbc874"
  },
  {
    "url": "assets/js/26.41700915.js",
    "revision": "d4668c90c821537475a7f4ea1ad4dd8d"
  },
  {
    "url": "assets/js/27.df316e7a.js",
    "revision": "91acb7b790450fc44ad8333cf76dc8c3"
  },
  {
    "url": "assets/js/28.913c412c.js",
    "revision": "5a942360bf79c0133fb75673ffa5669c"
  },
  {
    "url": "assets/js/29.fccfd8f9.js",
    "revision": "7a6e6560d20f27bb176965ff5086a7fb"
  },
  {
    "url": "assets/js/3.d346bae7.js",
    "revision": "a52e99ed85950bdbd76d3b0b3ab3b646"
  },
  {
    "url": "assets/js/30.acbea77b.js",
    "revision": "531ad491a43b9a005ac4580ac0447c7d"
  },
  {
    "url": "assets/js/31.9f61cc3b.js",
    "revision": "298816ff880f5b6163e2b3912958c8a3"
  },
  {
    "url": "assets/js/32.469f939e.js",
    "revision": "4292c9c1a824d9105c99815494afad2a"
  },
  {
    "url": "assets/js/33.299a78af.js",
    "revision": "fa2d2338d65593638b84fd61c91d1ccf"
  },
  {
    "url": "assets/js/34.b19a43bb.js",
    "revision": "f6a5f02fcd4c02ace41617bc3fe2ed07"
  },
  {
    "url": "assets/js/35.e8d9848c.js",
    "revision": "cc2807dd46c7f0fa6cf305e4a5fd006a"
  },
  {
    "url": "assets/js/36.368fbd33.js",
    "revision": "f304f46a648f6513b1a8c28bc28c7224"
  },
  {
    "url": "assets/js/37.8bfb73d1.js",
    "revision": "8d5b6ffd5605a5866fd6588622a1b7e9"
  },
  {
    "url": "assets/js/38.68ba4647.js",
    "revision": "98391237e9e822e2072edafe1d297246"
  },
  {
    "url": "assets/js/39.7ed84004.js",
    "revision": "02c2c1993825776c3137727a013da07a"
  },
  {
    "url": "assets/js/4.90f0c08b.js",
    "revision": "0d7aa335e54fa01dd7d854cb0237d99e"
  },
  {
    "url": "assets/js/40.3c0f5bc9.js",
    "revision": "0674654b1bb04ab62bf78463c453df9c"
  },
  {
    "url": "assets/js/41.90c21350.js",
    "revision": "d74833db7ee7b3a79d3385d6e4e81c53"
  },
  {
    "url": "assets/js/5.caa4f513.js",
    "revision": "21f0fbd0ee09cf26942b3a464cc7c218"
  },
  {
    "url": "assets/js/6.2328ba1a.js",
    "revision": "eaba25cf0c7603b850abaf2c473e9016"
  },
  {
    "url": "assets/js/7.38e04294.js",
    "revision": "8ca6e54ce3868d283fc3ca841a9b617e"
  },
  {
    "url": "assets/js/8.21af4d62.js",
    "revision": "6912cf0eeb22ca266eee7a55d40aa671"
  },
  {
    "url": "assets/js/9.4c48dbe9.js",
    "revision": "e04c3f390897710dc51b1785606ff8bb"
  },
  {
    "url": "assets/js/app.ee20b101.js",
    "revision": "f404d9f93c2c26dadd902a2fa1f92a14"
  },
  {
    "url": "convolution/4.1.png",
    "revision": "07b8c8e7312e19057508c8cb607b317c"
  },
  {
    "url": "convolution/4.10.png",
    "revision": "d7db18e8fc5bedfe4809e54a665ef281"
  },
  {
    "url": "convolution/4.11.png",
    "revision": "3e5e6cd68d8462ebe3dc821c4ad876d2"
  },
  {
    "url": "convolution/4.12.png",
    "revision": "875bda98064ce686c14ddb4fed83c65c"
  },
  {
    "url": "convolution/4.2.png",
    "revision": "6221e2425d709f14020ffc30d00547b1"
  },
  {
    "url": "convolution/4.3.png",
    "revision": "74e86e9b0835e35c003b82303134dad5"
  },
  {
    "url": "convolution/4.4.png",
    "revision": "7a3240946f00b258e046525a5952f033"
  },
  {
    "url": "convolution/4.5.png",
    "revision": "a04c1dc245793243cdf4f50e757b810b"
  },
  {
    "url": "convolution/4.6.png",
    "revision": "aa8557a0f49749d6ed7fa8e04312f68c"
  },
  {
    "url": "convolution/4.7.png",
    "revision": "a5f371f38f9d09921177e3e7e493c0ff"
  },
  {
    "url": "convolution/4.8.png",
    "revision": "4fdd3a005ef5264dca09123647bf6471"
  },
  {
    "url": "convolution/4.9.png",
    "revision": "cbedc71a2ecc49e951ef8a986826d032"
  },
  {
    "url": "convolution/audioCnn.html",
    "revision": "583069d6debcc519ba9bcab9a0c07420"
  },
  {
    "url": "convolution/cnnNode.html",
    "revision": "6f957b5ceb6bf991b17ad977cb3f47d8"
  },
  {
    "url": "convolution/exercises.html",
    "revision": "2a5413c65d6264255c93b994259f70e7"
  },
  {
    "url": "convolution/imgRepresent.html",
    "revision": "6e72a0ab1eb9939f34dfec3eefa2ef35"
  },
  {
    "url": "convolution/index.html",
    "revision": "4e943d1e5580a7a12347d03d84f63fc6"
  },
  {
    "url": "convolution/network.html",
    "revision": "f6c976a3fae2cb458105de50f09c1923"
  },
  {
    "url": "convolution/summary.html",
    "revision": "171565020ee55cbfbe7e5935ee198def"
  },
  {
    "url": "data/index.html",
    "revision": "97ca4d89e869a6483cbfb30d225c5f4d"
  },
  {
    "url": "deploy/index.html",
    "revision": "2d3e5ee1329cd367f96ee751a7f63073"
  },
  {
    "url": "generative/index.html",
    "revision": "f549d5989286e6a3357ddd835e5f2a1a"
  },
  {
    "url": "index.html",
    "revision": "fc16fcf3168eac7a2b9e35ef67203eec"
  },
  {
    "url": "introduction/1.10.png",
    "revision": "fdfccc1059f9a350586e11a8fd540bbb"
  },
  {
    "url": "introduction/1.2.png",
    "revision": "4dd2dffc92fe5b22c937a50dc216e956"
  },
  {
    "url": "introduction/1.3.png",
    "revision": "8d40c5b690a9865bb4c8ffd02ed96ab7"
  },
  {
    "url": "introduction/1.4.png",
    "revision": "301e46000a6dbf5b6fc4aac1a7360a62"
  },
  {
    "url": "introduction/1.5.png",
    "revision": "ff2e686b728d9be8a2203461cb19e345"
  },
  {
    "url": "introduction/1.6.png",
    "revision": "43e718c125a2cd335c8c1a6e3f43d08b"
  },
  {
    "url": "introduction/1.7.png",
    "revision": "50c5f646d7d81876734f2ae11f670690"
  },
  {
    "url": "introduction/1.8.png",
    "revision": "83efb7197d6eb5f2812648243223eb6b"
  },
  {
    "url": "introduction/1.9.png",
    "revision": "2a30dc3f46cb57513d17ed3a16e07c6e"
  },
  {
    "url": "introduction/1.png",
    "revision": "d9b9fa02806ece828cb661d8dde9c433"
  },
  {
    "url": "introduction/dl.html",
    "revision": "0bb04152f5d98c6f98c789e385795c5f"
  },
  {
    "url": "introduction/exercises.html",
    "revision": "2aa4684525a6ee901642347434684837"
  },
  {
    "url": "introduction/index.html",
    "revision": "e05ec6f8edb3fc3fb76f5d6e9e9dc981"
  },
  {
    "url": "introduction/summary.html",
    "revision": "03e1ff77ebc830253449a62e09acafa4"
  },
  {
    "url": "introduction/why.html",
    "revision": "488664e8a7598851a4370b4ff0daf6fc"
  },
  {
    "url": "liner/2.1.png",
    "revision": "53d52d27bc9628c42e4f5673cf270538"
  },
  {
    "url": "liner/2.10.png",
    "revision": "6c918eb5fb74053b061361b8f10f7904"
  },
  {
    "url": "liner/2.11.png",
    "revision": "cbb6889d02071cf7b1ac9f32f623ff04"
  },
  {
    "url": "liner/2.12.png",
    "revision": "c4db74621334bf2280a43aefd09e6e23"
  },
  {
    "url": "liner/2.2.png",
    "revision": "aefbd21ed9ca915ab94b8e954ac2f21d"
  },
  {
    "url": "liner/2.3.png",
    "revision": "b4b22d9a81b725839ed0a350a15d4199"
  },
  {
    "url": "liner/2.4.png",
    "revision": "47c3418685b5076d39e74d6fc1783ee6"
  },
  {
    "url": "liner/2.5.png",
    "revision": "685bd3322682216e04f431e4ade10199"
  },
  {
    "url": "liner/2.6.png",
    "revision": "479cce063c65b2c1a9675ef98b289ee1"
  },
  {
    "url": "liner/2.7.png",
    "revision": "a8215478915c98589d53de053715c219"
  },
  {
    "url": "liner/2.8.png",
    "revision": "8002e745fa7454086f71e9efd704911d"
  },
  {
    "url": "liner/2.9.png",
    "revision": "9bf4a3f0342ac73c8f21e8f7420a63a7"
  },
  {
    "url": "liner/example.html",
    "revision": "e18e0f721155f03e0758833755324994"
  },
  {
    "url": "liner/exercises.html",
    "revision": "74044fe4fc0f0607a46682fbb2404e16"
  },
  {
    "url": "liner/fit.html",
    "revision": "9bd27d32889d01273b5869f420e77afc"
  },
  {
    "url": "liner/how.html",
    "revision": "f9b780d758486f583a99a7ec2187836b"
  },
  {
    "url": "liner/index.html",
    "revision": "36833402c4cabb9afae74d79f3db4a11"
  },
  {
    "url": "liner/mutiinput.html",
    "revision": "34d65ff97f29d82e4dcaa7a1b350c81b"
  },
  {
    "url": "liner/summary.html",
    "revision": "ce7fc1c453808cb8772b7eb4b2f29bdc"
  },
  {
    "url": "LOGO.jpg",
    "revision": "d7f6b25ba552a90e588bf26daaabe16e"
  },
  {
    "url": "nonliner/3.1.png",
    "revision": "85abfb91c19e2e9e7b7da273fb35bb38"
  },
  {
    "url": "nonliner/3.10.png",
    "revision": "ad46700340efd03e8edc675fe2b569b0"
  },
  {
    "url": "nonliner/3.2.png",
    "revision": "2dd4c154cfe9c2a1bc12a7e10d53c0bd"
  },
  {
    "url": "nonliner/3.3.png",
    "revision": "f4ef9800b3beb91e9ab4bf0cc386f99d"
  },
  {
    "url": "nonliner/3.4.png",
    "revision": "83a763e969b97ccb55c7b8bb81434b13"
  },
  {
    "url": "nonliner/3.5.png",
    "revision": "c74fec6c1488d1d7fc2187283006287f"
  },
  {
    "url": "nonliner/3.6.png",
    "revision": "a77592598fe5c6fa8b193d34a431b3c5"
  },
  {
    "url": "nonliner/3.7.png",
    "revision": "cf35a5c9b77692ad32774ca7b4b9f35a"
  },
  {
    "url": "nonliner/3.8.png",
    "revision": "ed3b0953dde88e8887757aa918b398b1"
  },
  {
    "url": "nonliner/3.9.png",
    "revision": "c11f119d33fbd480d5fa0940a1e7e106"
  },
  {
    "url": "nonliner/classify.html",
    "revision": "36a8bfc3abf51795d9fd6e60281374ae"
  },
  {
    "url": "nonliner/exercises.html",
    "revision": "2828a3d691d0786b9c9a8f4f7d52310c"
  },
  {
    "url": "nonliner/index.html",
    "revision": "a8fe065711c14766ae521770bb8b5f4b"
  },
  {
    "url": "nonliner/muti.html",
    "revision": "eedd6c9213556b50a01596a432483322"
  },
  {
    "url": "nonliner/summary.html",
    "revision": "11ab2645307b31699cadbc2a0199de1c"
  },
  {
    "url": "nonliner/what.html",
    "revision": "81ea9995ae3a51d70f43439b5727bea6"
  },
  {
    "url": "reinforcement/index.html",
    "revision": "c15d21dd48f163641d9bfbd2f9f71a7b"
  },
  {
    "url": "sequences/index.html",
    "revision": "f653ddd9b94385d924df77c241731c74"
  },
  {
    "url": "summary/index.html",
    "revision": "76b249c16b7c376a4fbcbc12bd30be5b"
  },
  {
    "url": "transfer/index.html",
    "revision": "073ee75e02470419e734f302474b0b07"
  },
  {
    "url": "visualize/index.html",
    "revision": "f58d6a6284af69c0c1696eada42b2bd1"
  },
  {
    "url": "wechat.png",
    "revision": "63fe385956730cdc45f0fdec83fa8f91"
  },
  {
    "url": "workflow/index.html",
    "revision": "f9d0345692860221275d7be9db84210a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
