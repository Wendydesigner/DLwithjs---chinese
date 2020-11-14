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
    "revision": "60cd61544a03f45df97c71e53d3d6575"
  },
  {
    "url": "assets/css/0.styles.36752ae9.css",
    "revision": "65b4c0994d06cc0da6b0dce9e7c0c1fc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.385f0a45.js",
    "revision": "0fd819a9b2374567f4553c6a53fc0611"
  },
  {
    "url": "assets/js/11.3cb1b786.js",
    "revision": "971f97c04f6729270778f4aac80e4058"
  },
  {
    "url": "assets/js/12.86c8fb37.js",
    "revision": "bbffa6c7c730f2715f8275a07217d991"
  },
  {
    "url": "assets/js/13.c796bf23.js",
    "revision": "3fdf9cbe6e1738f654927acc82abd9af"
  },
  {
    "url": "assets/js/14.2b124e1a.js",
    "revision": "b10cc90fb8372cc2e482fb17827278a7"
  },
  {
    "url": "assets/js/15.d2bfeb1c.js",
    "revision": "186bd5ce645a89663adbff888e1ded6d"
  },
  {
    "url": "assets/js/16.8dca1d52.js",
    "revision": "195bcfe762b4dbb8a988ed55b5c99d2c"
  },
  {
    "url": "assets/js/17.537f1291.js",
    "revision": "e41157cb6087b3da29a98b15919d7612"
  },
  {
    "url": "assets/js/18.213311ea.js",
    "revision": "3af72ca714fe75eb1cf8895a7141696d"
  },
  {
    "url": "assets/js/19.a8ccf861.js",
    "revision": "a2705651b29a06d747c11b353eb9a6cd"
  },
  {
    "url": "assets/js/2.79e4de4b.js",
    "revision": "8e8bd75570a923ae8b535b6a6ffeda64"
  },
  {
    "url": "assets/js/20.db77fb42.js",
    "revision": "07a40d726290fa4f9f1f80a8e3522bac"
  },
  {
    "url": "assets/js/21.51d758a0.js",
    "revision": "aff7bf5e274ea88ff3fb4ec8a97fe12e"
  },
  {
    "url": "assets/js/22.373636b4.js",
    "revision": "ebac99fffd1f20284d0c86f21afc2b47"
  },
  {
    "url": "assets/js/23.ce6af897.js",
    "revision": "7f695f862d5d9afde7f158527a624c60"
  },
  {
    "url": "assets/js/24.56c0aefd.js",
    "revision": "8b3c1c645f389c51bc722e9c5aea4a3a"
  },
  {
    "url": "assets/js/25.1b226a24.js",
    "revision": "353753f67b157f70e6fcd6c11dd0fafa"
  },
  {
    "url": "assets/js/26.82bf626a.js",
    "revision": "10803b6d515e98e93230f65c4202d4d7"
  },
  {
    "url": "assets/js/27.db9e45cc.js",
    "revision": "271cfef935e2781e8d07aab9fbdcca68"
  },
  {
    "url": "assets/js/28.34fa1e50.js",
    "revision": "fde5bb9f3926809b5fa479f86fe53b50"
  },
  {
    "url": "assets/js/29.26570b45.js",
    "revision": "eafa69aa8ac716d7e4724c41a8989ba3"
  },
  {
    "url": "assets/js/3.7dea48b7.js",
    "revision": "83c82364d509de86432109e4f2d4fda8"
  },
  {
    "url": "assets/js/30.41bc6dd6.js",
    "revision": "d74fd695aab2fc96864c421bfbb07106"
  },
  {
    "url": "assets/js/31.2c7c4e0d.js",
    "revision": "215719415976db5d8a4703a71145f3a3"
  },
  {
    "url": "assets/js/32.6775a6e6.js",
    "revision": "e1f11c6d64e4a4dbb48a558d81af9bc1"
  },
  {
    "url": "assets/js/33.40a15d62.js",
    "revision": "ad52c0d4e2a1416296f4cc8b8beccbb6"
  },
  {
    "url": "assets/js/34.e82f779c.js",
    "revision": "1f6c211554426248bbb115dcb1a1a11b"
  },
  {
    "url": "assets/js/35.2cded2c0.js",
    "revision": "9ab8135614caf86b04192a825420ad4f"
  },
  {
    "url": "assets/js/36.4c861c83.js",
    "revision": "2b3d0f3ffcef1e94c7d6c480cbb4b73e"
  },
  {
    "url": "assets/js/37.259e8713.js",
    "revision": "92795b7308245928e76141f16dae7444"
  },
  {
    "url": "assets/js/38.a6b046b7.js",
    "revision": "f300b2f89083c451e5ff68ba6bdba5ff"
  },
  {
    "url": "assets/js/39.92eaf57b.js",
    "revision": "e21b840b3eed867d7bb5930c3b3aec85"
  },
  {
    "url": "assets/js/4.0dc16772.js",
    "revision": "d45cbc6fe3792767e4a4d37942c61971"
  },
  {
    "url": "assets/js/40.3a239cf5.js",
    "revision": "c4272c9ca34f954b3e932e781e03a43e"
  },
  {
    "url": "assets/js/41.010e2144.js",
    "revision": "7e70809f58109dc2c99b838b6c2a418f"
  },
  {
    "url": "assets/js/42.a28626b2.js",
    "revision": "6be30ddd6a78e128a52df0a601740d5e"
  },
  {
    "url": "assets/js/43.874e883a.js",
    "revision": "e4cf0ac387784980fb5103b2b87cea7b"
  },
  {
    "url": "assets/js/44.d9142ab9.js",
    "revision": "9a7d576fbf9ec6426910664a5f504c83"
  },
  {
    "url": "assets/js/45.66ac6068.js",
    "revision": "4f081c0c808419314e4610a17f901612"
  },
  {
    "url": "assets/js/46.fcf0af30.js",
    "revision": "dc8f175d09a9056ab7fa9f27b7447b1e"
  },
  {
    "url": "assets/js/47.c9d99b36.js",
    "revision": "f1aefd33cc91d2e6fc2c52cad05b5335"
  },
  {
    "url": "assets/js/48.8c3bb24b.js",
    "revision": "a8efea09373a8de4fc9046f8183a3169"
  },
  {
    "url": "assets/js/49.38288098.js",
    "revision": "023636099a4eefd6f4e5cdc9bb4c5893"
  },
  {
    "url": "assets/js/5.4bf076c8.js",
    "revision": "99f44e3cc41f74844b1dd717cb2fa0f8"
  },
  {
    "url": "assets/js/50.5407bb78.js",
    "revision": "ec55e935d0e26a9ae118b36666dc938c"
  },
  {
    "url": "assets/js/51.6b963cfd.js",
    "revision": "f2bce6121f03df11bd3e93469a5e3db8"
  },
  {
    "url": "assets/js/52.d9cf2044.js",
    "revision": "a6de2dfa2669108a98046333f0711fb5"
  },
  {
    "url": "assets/js/6.b11e4caa.js",
    "revision": "c769be2626699d7475757d1c6e635796"
  },
  {
    "url": "assets/js/7.5c397142.js",
    "revision": "84a73af7fc39b7864d3686fbd5e4cc42"
  },
  {
    "url": "assets/js/8.6b2f8e65.js",
    "revision": "58c42cc7f59f03b27c252ebbd5bd3049"
  },
  {
    "url": "assets/js/9.c0e142f8.js",
    "revision": "8fbea03abd9163e75f76e9552677ee13"
  },
  {
    "url": "assets/js/app.d2aac0cc.js",
    "revision": "198728f6afe3fded810418940d927fae"
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
    "revision": "d29533c36112d7e235de4acc6424b920"
  },
  {
    "url": "convolution/cnnNode.html",
    "revision": "ae98d7934e20e422768a6bd8712f4130"
  },
  {
    "url": "convolution/exercises.html",
    "revision": "b675cd5f43e304f7e641cb14b46a89e6"
  },
  {
    "url": "convolution/imgRepresent.html",
    "revision": "da597da7107493c55c76b01119fb550f"
  },
  {
    "url": "convolution/index.html",
    "revision": "88253af684c3f9ec553748ce3f9cd5ea"
  },
  {
    "url": "convolution/network.html",
    "revision": "440bb5ea3dc2fa5cf6e31c966571a630"
  },
  {
    "url": "convolution/summary.html",
    "revision": "ce78aedd4f4ce911d08def3ae8b989f7"
  },
  {
    "url": "data/6.1.png",
    "revision": "0891d8dac1cca7ce3a2388e09ab6a225"
  },
  {
    "url": "data/6.2.png",
    "revision": "b79a969c7c99f7ba8327aeadd2830807"
  },
  {
    "url": "data/6.3.png",
    "revision": "201a844d33cf87231c4794b40d0645df"
  },
  {
    "url": "data/6.4.png",
    "revision": "b2323bfa611debbc2bf5d9e6eafc673c"
  },
  {
    "url": "data/6.5.png",
    "revision": "318918e385963b2bf6401900188b80d8"
  },
  {
    "url": "data/6.6.png",
    "revision": "1a7821d3f5f48c25d4caa3d7ae3cce96"
  },
  {
    "url": "data/6.7.png",
    "revision": "0c4e636f29f21bc4d9f884d6dfee4e67"
  },
  {
    "url": "data/augment.html",
    "revision": "5c32c85d8b85c10fdf3eb408ca0d83aa"
  },
  {
    "url": "data/data.html",
    "revision": "55f29f10acc625c03388a2ce224b30a3"
  },
  {
    "url": "data/exercises.html",
    "revision": "96fabb42f63a1eb43d9e14ceada500c8"
  },
  {
    "url": "data/flawed.html",
    "revision": "cda879c193c695deac29f085cec7a2ba"
  },
  {
    "url": "data/index.html",
    "revision": "84698e5add607f9a1253078473ded8e7"
  },
  {
    "url": "data/manageData.html",
    "revision": "d5e801f2f73507cddaab3cf3c8e08ea1"
  },
  {
    "url": "data/patterns.html",
    "revision": "782ebc828661dc5500d9ca27b3fae9ac"
  },
  {
    "url": "data/practice.html",
    "revision": "941efcf179837d4ce86733ef645436b7"
  },
  {
    "url": "data/summary.html",
    "revision": "0fa1f728fe0cda468887dbf723145ce5"
  },
  {
    "url": "deploy/index.html",
    "revision": "b6025a0d89ea323227c396a0abe42888"
  },
  {
    "url": "generative/index.html",
    "revision": "e2632c2b694f6639b09103bbb8847b6b"
  },
  {
    "url": "index.html",
    "revision": "35c39b2cc4ebdacaf64f526494e88af5"
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
    "revision": "a631bbd06719f46fdfd35caf77fe3444"
  },
  {
    "url": "introduction/exercises.html",
    "revision": "8ef7fda8ec7f5bfdb39631f3da770373"
  },
  {
    "url": "introduction/index.html",
    "revision": "15a3216063fd16f5871e71a67804003d"
  },
  {
    "url": "introduction/summary.html",
    "revision": "54d626c6f2915f11a78a387e2878ccf0"
  },
  {
    "url": "introduction/why.html",
    "revision": "c95d02d568f896a0ad4485c15f28bf27"
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
    "revision": "79bdbd09b93d9e7281ff262e7f11bec1"
  },
  {
    "url": "liner/exercises.html",
    "revision": "5fda84d9428dc85ee94d3c95feceef18"
  },
  {
    "url": "liner/fit.html",
    "revision": "8736ddde2eed4b12107ad669f2ad5d6f"
  },
  {
    "url": "liner/how.html",
    "revision": "28d4580ed7bcc7fb01bc7c7511f60788"
  },
  {
    "url": "liner/index.html",
    "revision": "835003aeb0fea06d0e2c5d354201c672"
  },
  {
    "url": "liner/mutiinput.html",
    "revision": "d202f096b557aed2b1145b5a02c787a4"
  },
  {
    "url": "liner/summary.html",
    "revision": "911847978a2a614c9475767eab0fcf18"
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
    "revision": "1aba31489b85e2377fcaa7a270eb5d82"
  },
  {
    "url": "nonliner/exercises.html",
    "revision": "6eaa0c8f33f4a169d71380596f99652b"
  },
  {
    "url": "nonliner/index.html",
    "revision": "627a85bc993f31db12a42df1a319d71f"
  },
  {
    "url": "nonliner/muti.html",
    "revision": "1485b9ce9415dabc3f7e3c916fce2628"
  },
  {
    "url": "nonliner/summary.html",
    "revision": "8ad61cb8ea098f370818dd7f0ea70f36"
  },
  {
    "url": "nonliner/what.html",
    "revision": "5eb22057b4a98fac9a2231a8a6a5617a"
  },
  {
    "url": "reinforcement/index.html",
    "revision": "b5eebdab3b7de9499fc3549fb23b7692"
  },
  {
    "url": "sequences/index.html",
    "revision": "0bbf6671ee85e762d0aa6ae16c5b3444"
  },
  {
    "url": "summary/index.html",
    "revision": "0ebc300dbb6e638b644cb9660127436b"
  },
  {
    "url": "transfer/5.1.png",
    "revision": "35491195ba7b2b3aad3ea3cc086cf88b"
  },
  {
    "url": "transfer/5.10.png",
    "revision": "8ffb53204d12afc9c7de90acb41814ba"
  },
  {
    "url": "transfer/5.11.png",
    "revision": "60112683367a463ac3c7d4b4da237c0a"
  },
  {
    "url": "transfer/5.12.png",
    "revision": "050cd825e2ae830e24bf5f41540a9570"
  },
  {
    "url": "transfer/5.13.png",
    "revision": "dc5d28a55dce7655e79149272d125755"
  },
  {
    "url": "transfer/5.14.png",
    "revision": "4729e710762a489ee54061795d31e797"
  },
  {
    "url": "transfer/5.15.png",
    "revision": "45dab66065661948c257856b5e4a106b"
  },
  {
    "url": "transfer/5.16.png",
    "revision": "890e4e2a5f2e1ddeec2a3ab0857b5898"
  },
  {
    "url": "transfer/5.2.png",
    "revision": "d21f4efa75c3ec834ca32d69bb7f50f8"
  },
  {
    "url": "transfer/5.3.png",
    "revision": "dbdad303bbc44bf42207904558959b2f"
  },
  {
    "url": "transfer/5.4.png",
    "revision": "ad5a3f3b61b6cdf01f4fca69a05b3266"
  },
  {
    "url": "transfer/5.5.png",
    "revision": "ea51b528878aa3eb0bd743069d09970f"
  },
  {
    "url": "transfer/5.6.png",
    "revision": "22b0aac3b15ab38eb69c5017fbd2502b"
  },
  {
    "url": "transfer/5.7.png",
    "revision": "52171a0c037165eeff5e8eb666e5fdf1"
  },
  {
    "url": "transfer/5.8.png",
    "revision": "d36b32eeea3d6c04c3af6a65a916ed83"
  },
  {
    "url": "transfer/5.9.png",
    "revision": "dedcfa9467f6f3d0991cda690bd8879d"
  },
  {
    "url": "transfer/example.html",
    "revision": "e16702e3fc04b2b8ab8f8bbae91610aa"
  },
  {
    "url": "transfer/exercises.html",
    "revision": "d50df3ae2c52df09637c7c062652be2a"
  },
  {
    "url": "transfer/index.html",
    "revision": "9f2deb2470996bca54ce6bfa39b86e28"
  },
  {
    "url": "transfer/introduction.html",
    "revision": "69b6b413428bdde92ebda72ea33df478"
  },
  {
    "url": "transfer/summary.html",
    "revision": "f351eed2c8dea9816a0a0bfb08814e5e"
  },
  {
    "url": "visualize/index.html",
    "revision": "b7312e41a0b4703184cbb4eb13e9ad52"
  },
  {
    "url": "wechat.png",
    "revision": "63fe385956730cdc45f0fdec83fa8f91"
  },
  {
    "url": "workflow/index.html",
    "revision": "25790ad2e21829d890c10650588ce655"
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
