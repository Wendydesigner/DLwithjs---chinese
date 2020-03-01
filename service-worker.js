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
    "revision": "0752a2c2ba15e9b8a8b6a978647c2f48"
  },
  {
    "url": "assets/css/0.styles.9dc40fed.css",
    "revision": "179068b4a53372c94c5c6b63db8b47ac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6066dbff.js",
    "revision": "e3503c23f5af56576526f6f520ce4e25"
  },
  {
    "url": "assets/js/11.c9cf1bca.js",
    "revision": "269b8292bf09c10286daaba86767523d"
  },
  {
    "url": "assets/js/12.de34defa.js",
    "revision": "a629204201f62622e2ebfc6081eb0c59"
  },
  {
    "url": "assets/js/13.a8980971.js",
    "revision": "03e5d569038ea36e7aff5aa11e321fbe"
  },
  {
    "url": "assets/js/14.72ae35ad.js",
    "revision": "fc6f45f18681f90150e006e66c2ad64e"
  },
  {
    "url": "assets/js/15.376f4d3d.js",
    "revision": "0c9b58d37259007a81e256a2685f9604"
  },
  {
    "url": "assets/js/16.135a5b29.js",
    "revision": "9f4fae4c1f16bf11c337d6777fe9af21"
  },
  {
    "url": "assets/js/17.68c76d15.js",
    "revision": "ed4b434785dab8e9e4c952f24b187501"
  },
  {
    "url": "assets/js/18.6998e6cf.js",
    "revision": "f6d870d2bbe0c1a41a15e12ae8baef49"
  },
  {
    "url": "assets/js/19.d2f3a1aa.js",
    "revision": "c9c00e5c5bd64b48e542f870eabdc016"
  },
  {
    "url": "assets/js/2.57699804.js",
    "revision": "b5b2485bb03d5c3600d500f08029f9b0"
  },
  {
    "url": "assets/js/20.f89cd2fc.js",
    "revision": "ef66227f0f9d6905916ebff723bb687b"
  },
  {
    "url": "assets/js/21.5a9e2239.js",
    "revision": "84b0b751edfcb7d445e1f6b28489eca1"
  },
  {
    "url": "assets/js/22.f51505a7.js",
    "revision": "01e5347bf2a9b87a377640dd2bcf937c"
  },
  {
    "url": "assets/js/23.b58bcd24.js",
    "revision": "684bbda947a55647aec92058725ceba5"
  },
  {
    "url": "assets/js/24.915af7f0.js",
    "revision": "31a76240d94b79230b471f86c2cc78ec"
  },
  {
    "url": "assets/js/25.ee9fa03b.js",
    "revision": "ad03b9771b5f8f2f9cbf36815fb69511"
  },
  {
    "url": "assets/js/26.683c5fc9.js",
    "revision": "0667f4704da0484f00f331e6b2f36ecc"
  },
  {
    "url": "assets/js/27.0511af05.js",
    "revision": "6f42579af82a0ca2e28fdea360ab2fca"
  },
  {
    "url": "assets/js/28.3ec26205.js",
    "revision": "65c493236a267b907e1ffcfff5ad6e82"
  },
  {
    "url": "assets/js/29.d6658245.js",
    "revision": "d78dc462adef7ae87bc7ee321129c35f"
  },
  {
    "url": "assets/js/3.18538655.js",
    "revision": "64a8f23e1ada28035562c5cf249ab9ef"
  },
  {
    "url": "assets/js/30.11ead484.js",
    "revision": "5fedff854716ee179aacacd3725e549e"
  },
  {
    "url": "assets/js/31.0e91afa2.js",
    "revision": "1a0beadc182e4d0954dacb4b77656f83"
  },
  {
    "url": "assets/js/32.900864b4.js",
    "revision": "be35c452431ca9db89ba1d5b91956883"
  },
  {
    "url": "assets/js/33.7bb18922.js",
    "revision": "e5264010907d7a5027329518b49932f1"
  },
  {
    "url": "assets/js/34.d3c05e1e.js",
    "revision": "0fdd0042adf62411d2c4370504822907"
  },
  {
    "url": "assets/js/35.59a80a15.js",
    "revision": "bda2f9cdefbb09bd42e21b4bba8d2bdf"
  },
  {
    "url": "assets/js/36.18c0287d.js",
    "revision": "4db3703674eb948b42017a05965a5e57"
  },
  {
    "url": "assets/js/37.4cd89bc1.js",
    "revision": "1d055f74f320515c0d1a5fe2bb0aae28"
  },
  {
    "url": "assets/js/38.7a6306d8.js",
    "revision": "5de235fff159545bd0651cc0bd295f48"
  },
  {
    "url": "assets/js/39.ef062696.js",
    "revision": "84d0e843ce76b57ce0bae96146ab84f9"
  },
  {
    "url": "assets/js/4.423b4959.js",
    "revision": "c1e6e8bca8bb9fef996d63104b9cfb32"
  },
  {
    "url": "assets/js/40.18173e2f.js",
    "revision": "ebe91b9ce5b14dc0d21c0f3b38d0afa2"
  },
  {
    "url": "assets/js/41.ca8d8cbb.js",
    "revision": "e8235c6b15cfd667e4e31e43924ee022"
  },
  {
    "url": "assets/js/42.af985466.js",
    "revision": "1494cd2f8e9e1426e85098fcbaca3d3a"
  },
  {
    "url": "assets/js/43.d1a0d5b8.js",
    "revision": "00d16ffe264eb5fa02aca4c13a4e4962"
  },
  {
    "url": "assets/js/44.6ef4276d.js",
    "revision": "41d1065e68193aa628bf4fecd638da8a"
  },
  {
    "url": "assets/js/5.4e5ee2dc.js",
    "revision": "0b51c7dd8c049983ece06c6762892417"
  },
  {
    "url": "assets/js/6.ae15116c.js",
    "revision": "879d94c984cb09d7950465921985e75b"
  },
  {
    "url": "assets/js/7.63b2a77e.js",
    "revision": "66ce22fd2acc484eccef8b2f4e1edb3e"
  },
  {
    "url": "assets/js/8.6967f8ef.js",
    "revision": "c434287ffb8a916a774cbbb9d2561ffd"
  },
  {
    "url": "assets/js/9.e6c13005.js",
    "revision": "1da9b1b21a4c7f41c802bc398dfe5c2a"
  },
  {
    "url": "assets/js/app.9703440d.js",
    "revision": "294466bcf56e8bc71fde7f28d49194f4"
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
    "revision": "a46f52dc6e3596f38e2d2f72a1d4445f"
  },
  {
    "url": "convolution/cnnNode.html",
    "revision": "c4bd89e1aed5678cfe1136a22e386e51"
  },
  {
    "url": "convolution/exercises.html",
    "revision": "d0a8cf96807d47c4bc37c864066ac509"
  },
  {
    "url": "convolution/imgRepresent.html",
    "revision": "1af7b6c57086a7c9c0ad74536c3cd1d0"
  },
  {
    "url": "convolution/index.html",
    "revision": "15b5c4d1a23cd49408d296055fcd16e1"
  },
  {
    "url": "convolution/network.html",
    "revision": "acac780611bd7ef27f6e1e6040ced1f6"
  },
  {
    "url": "convolution/summary.html",
    "revision": "fb652af10c2517792eef542b14c6cf5e"
  },
  {
    "url": "data/index.html",
    "revision": "1e3b200ab46f7e42c2d18f192de0b00a"
  },
  {
    "url": "deploy/index.html",
    "revision": "f744d027e4923d7965201589b73a1d3f"
  },
  {
    "url": "generative/index.html",
    "revision": "e2878173bfe8e2b8e9c76eef115636d5"
  },
  {
    "url": "index.html",
    "revision": "337279bd55c990109c999a70eccc6a4b"
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
    "revision": "848df5c6b0fc4f319dc9cb81b535a62c"
  },
  {
    "url": "introduction/exercises.html",
    "revision": "ec5104def2b73e927e328c3b4c1d190d"
  },
  {
    "url": "introduction/index.html",
    "revision": "fa2795f4d4c42ef8d7ec09720f1f9d48"
  },
  {
    "url": "introduction/summary.html",
    "revision": "cf14f5451e55987368be684119787b99"
  },
  {
    "url": "introduction/why.html",
    "revision": "18e753146291ab0f8348ddc84eb3ae60"
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
    "revision": "acf43b380a53f2299156c0dbbfe9b5af"
  },
  {
    "url": "liner/exercises.html",
    "revision": "6044087fc1ee03049e0f687efbd3bfe8"
  },
  {
    "url": "liner/fit.html",
    "revision": "0181a2de9d6c7cb7737e78313db2d7c3"
  },
  {
    "url": "liner/how.html",
    "revision": "9a79ac90544852b90c19550ae2368cde"
  },
  {
    "url": "liner/index.html",
    "revision": "c6b12fef8753b66ebfa8d900d1c84eea"
  },
  {
    "url": "liner/mutiinput.html",
    "revision": "95522e5033ccf64897b1edfde3211317"
  },
  {
    "url": "liner/summary.html",
    "revision": "a8dc08e58994dcd4fdb39705b410e773"
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
    "revision": "2cc3cfdcda0177d6dfbb6a92c145fa1e"
  },
  {
    "url": "nonliner/exercises.html",
    "revision": "17ab0b0ad27c80df642f6e866e70b790"
  },
  {
    "url": "nonliner/index.html",
    "revision": "ff33f2780f785507c1f816b8fde9e810"
  },
  {
    "url": "nonliner/muti.html",
    "revision": "2a818ccdd85fef67974ba31f78bedd8a"
  },
  {
    "url": "nonliner/summary.html",
    "revision": "d00ecf3d3f07c112be5d04643fe1164f"
  },
  {
    "url": "nonliner/what.html",
    "revision": "275359b9f78abe9790e557a611a3c3df"
  },
  {
    "url": "reinforcement/index.html",
    "revision": "20d79a143e40ed0d40755d5186cbb62c"
  },
  {
    "url": "sequences/index.html",
    "revision": "48508d62bf8149b872dbb493a6546f6c"
  },
  {
    "url": "summary/index.html",
    "revision": "4983e6735de9d3c1c2f7aa163cc48119"
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
    "revision": "642617c02ee7892c456cda54dd4e5c8f"
  },
  {
    "url": "transfer/exercises.html",
    "revision": "017d2e49d7b9e3815fc3b3d34548d111"
  },
  {
    "url": "transfer/index.html",
    "revision": "9595fce7da050916957f9df525f81f5e"
  },
  {
    "url": "transfer/introduction.html",
    "revision": "938d9286b21144d6361bf283731af423"
  },
  {
    "url": "transfer/summary.html",
    "revision": "b430e7a0b23017c3c1627a89617e051e"
  },
  {
    "url": "visualize/index.html",
    "revision": "ffbaacfd52cbe6b1a50fb1a27b414f3c"
  },
  {
    "url": "wechat.png",
    "revision": "63fe385956730cdc45f0fdec83fa8f91"
  },
  {
    "url": "workflow/index.html",
    "revision": "aff8e3e323e5954634505679fdddd101"
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
