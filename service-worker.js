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
    "revision": "edde41667e2a388b9dd0830138196127"
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
    "url": "assets/js/14.fd2c67cd.js",
    "revision": "422571a35b26bcd8c9f345055027954f"
  },
  {
    "url": "assets/js/15.d2bfeb1c.js",
    "revision": "186bd5ce645a89663adbff888e1ded6d"
  },
  {
    "url": "assets/js/16.719304fc.js",
    "revision": "eafbdfc3a5b0efddf734e056575e3429"
  },
  {
    "url": "assets/js/17.28c31f22.js",
    "revision": "63627908ac6c1afdb0f2f6ac085739d5"
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
    "url": "assets/js/20.6ba1d25a.js",
    "revision": "822f1096891afe9ca60cd6405d34f8aa"
  },
  {
    "url": "assets/js/21.7565de7f.js",
    "revision": "7beae4d16342886fb6d0365f50f68ff3"
  },
  {
    "url": "assets/js/22.f36413bc.js",
    "revision": "988f5c7e847b88d95b69ef48d6709d9d"
  },
  {
    "url": "assets/js/23.6b3dcd79.js",
    "revision": "70e149273d1b81e5f35a3848f45000e0"
  },
  {
    "url": "assets/js/24.2874dcae.js",
    "revision": "a5e4b55b356fc2e98870f9febfd9f316"
  },
  {
    "url": "assets/js/25.1b226a24.js",
    "revision": "353753f67b157f70e6fcd6c11dd0fafa"
  },
  {
    "url": "assets/js/26.da0653a9.js",
    "revision": "4643adc38333eeb1eeae75af75fd8474"
  },
  {
    "url": "assets/js/27.2e731c97.js",
    "revision": "0755e25a079a50cb62cded0b00819458"
  },
  {
    "url": "assets/js/28.34fa1e50.js",
    "revision": "fde5bb9f3926809b5fa479f86fe53b50"
  },
  {
    "url": "assets/js/29.7e82818c.js",
    "revision": "d3af41258091e0c805d16902a4b25ca7"
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
    "url": "assets/js/31.f9a2d4f6.js",
    "revision": "6f1a894f84c04346f797828f81e75406"
  },
  {
    "url": "assets/js/32.6775a6e6.js",
    "revision": "e1f11c6d64e4a4dbb48a558d81af9bc1"
  },
  {
    "url": "assets/js/33.cf60ca04.js",
    "revision": "e3dc13a3f581f1525a5885b684767105"
  },
  {
    "url": "assets/js/34.e82f779c.js",
    "revision": "1f6c211554426248bbb115dcb1a1a11b"
  },
  {
    "url": "assets/js/35.6d017105.js",
    "revision": "950da6e63171883dfa8b228db19b342b"
  },
  {
    "url": "assets/js/36.fb52afa5.js",
    "revision": "8a89eeb4be9fe50b109fcc28f061e061"
  },
  {
    "url": "assets/js/37.259e8713.js",
    "revision": "92795b7308245928e76141f16dae7444"
  },
  {
    "url": "assets/js/38.3687c3c5.js",
    "revision": "a0aee4f5357c5e1c244c5b49d3dde6b0"
  },
  {
    "url": "assets/js/39.83f7f280.js",
    "revision": "11b721c3843c375721c87ad9b7eb341d"
  },
  {
    "url": "assets/js/4.0dc16772.js",
    "revision": "d45cbc6fe3792767e4a4d37942c61971"
  },
  {
    "url": "assets/js/40.4a2f9dc1.js",
    "revision": "9b4215bb29d26060d5b817e7efbd4b91"
  },
  {
    "url": "assets/js/41.010e2144.js",
    "revision": "7e70809f58109dc2c99b838b6c2a418f"
  },
  {
    "url": "assets/js/42.da0fc511.js",
    "revision": "c5b8ac883cf6a45c0fcaa04700a42c49"
  },
  {
    "url": "assets/js/43.ae8123d5.js",
    "revision": "3ad0ba8d5a7815ffc7004712bf8ad046"
  },
  {
    "url": "assets/js/44.e585c983.js",
    "revision": "72ca03772d2861c02bc859303d6ad58b"
  },
  {
    "url": "assets/js/45.681f1185.js",
    "revision": "67aa14778d6feeb1fe36fc8186269308"
  },
  {
    "url": "assets/js/46.fcf0af30.js",
    "revision": "dc8f175d09a9056ab7fa9f27b7447b1e"
  },
  {
    "url": "assets/js/47.253e8f7f.js",
    "revision": "6784e858667729c5d5b5011befadd353"
  },
  {
    "url": "assets/js/48.8c3bb24b.js",
    "revision": "a8efea09373a8de4fc9046f8183a3169"
  },
  {
    "url": "assets/js/49.13683dd5.js",
    "revision": "24964da280fcab9673e98c5ecbcf5728"
  },
  {
    "url": "assets/js/5.4bf076c8.js",
    "revision": "99f44e3cc41f74844b1dd717cb2fa0f8"
  },
  {
    "url": "assets/js/50.50387001.js",
    "revision": "ae944cdababd32101f5b3118c5d832f5"
  },
  {
    "url": "assets/js/51.46fb4336.js",
    "revision": "64fbba4f8b296801b20d3740f35dc8c5"
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
    "url": "assets/js/7.85e16ec4.js",
    "revision": "825f054781f081fb9a681cb0491a6006"
  },
  {
    "url": "assets/js/8.4b410da5.js",
    "revision": "fca88dcf453c32a8c5f487bfc15fd29a"
  },
  {
    "url": "assets/js/9.c0e142f8.js",
    "revision": "8fbea03abd9163e75f76e9552677ee13"
  },
  {
    "url": "assets/js/app.84596ef0.js",
    "revision": "5f0e97e5a9347fb8162a3af0c782d4d3"
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
    "revision": "1bfedd33c3e7875183b6f4cb5105c391"
  },
  {
    "url": "convolution/cnnNode.html",
    "revision": "0218ed6d6f1a2813a3f66837362b227a"
  },
  {
    "url": "convolution/exercises.html",
    "revision": "e9b76ba0eeaabbd6268c8e0b6c231a7e"
  },
  {
    "url": "convolution/imgRepresent.html",
    "revision": "e64be4617e7e9172d3b2361a82adab9b"
  },
  {
    "url": "convolution/index.html",
    "revision": "1f49131f7d3748a44a8bf8f9544ffdc5"
  },
  {
    "url": "convolution/network.html",
    "revision": "753893f619ad05ceac41511dade67bca"
  },
  {
    "url": "convolution/summary.html",
    "revision": "ff90084d9c7c135451dd6173f68e56f6"
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
    "revision": "b6f04a5fb50ee7a8e9a7b57983d86ce0"
  },
  {
    "url": "data/data.html",
    "revision": "b476084177dc0d42f751ae725dd6bf23"
  },
  {
    "url": "data/exercises.html",
    "revision": "e50656f2ad814d14868754ac89f83b0f"
  },
  {
    "url": "data/flawed.html",
    "revision": "6e6185b960baf540ff6ded6e98f9c845"
  },
  {
    "url": "data/index.html",
    "revision": "06a4e0f637a42908cbc4fcd3ee392b04"
  },
  {
    "url": "data/manageData.html",
    "revision": "0af6656c291cd9ad50865eccb9b3b3d1"
  },
  {
    "url": "data/patterns.html",
    "revision": "9ea5a5138c64601ad4b0377ae06cb3b9"
  },
  {
    "url": "data/practice.html",
    "revision": "e1e86dd7d6973f5b5ad89a8f9f608100"
  },
  {
    "url": "data/summary.html",
    "revision": "91865ce685071410f9e7632bf94149f7"
  },
  {
    "url": "deploy/index.html",
    "revision": "ef2fceca6e48a4ea36bb84bde835c411"
  },
  {
    "url": "generative/index.html",
    "revision": "a770c5994b1b219f9f9d899d252038c4"
  },
  {
    "url": "index.html",
    "revision": "24d9af5d9b190102070ac387162cd2e1"
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
    "revision": "a9edd4962c0afa1e1a52257e58a92417"
  },
  {
    "url": "introduction/exercises.html",
    "revision": "ba78e606a6eac0da327b8a233f5c240f"
  },
  {
    "url": "introduction/index.html",
    "revision": "f61288f4c3e2b6bb7b5bf32fb7f2cdbc"
  },
  {
    "url": "introduction/summary.html",
    "revision": "5b1c4905c3e19025ce885f08ea8d471b"
  },
  {
    "url": "introduction/why.html",
    "revision": "138afbd5f93d5e91bbc182ffa79dc79b"
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
    "revision": "6aa2efef7eb9f68308ba1ced41e774be"
  },
  {
    "url": "liner/exercises.html",
    "revision": "d42aa5a73675e3d9698e1c7f5a87d7c2"
  },
  {
    "url": "liner/fit.html",
    "revision": "61db3912b8e6c3b59177313947709782"
  },
  {
    "url": "liner/how.html",
    "revision": "c7f29f408080cc843095927378b707e2"
  },
  {
    "url": "liner/index.html",
    "revision": "7a30bb290e155ff521a58fa02daf8b83"
  },
  {
    "url": "liner/mutiinput.html",
    "revision": "4c27d9a894aa9b5d3e611e73fd3fe02d"
  },
  {
    "url": "liner/summary.html",
    "revision": "6c57536c08284db2c0fae191fcb9bcf0"
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
    "revision": "263b3aaaa144080a1021b11f85f4aa50"
  },
  {
    "url": "nonliner/exercises.html",
    "revision": "fb369ecd4223c21f084625574980eba9"
  },
  {
    "url": "nonliner/index.html",
    "revision": "537de6bdbfea3f8c29710c16988d3ed7"
  },
  {
    "url": "nonliner/muti.html",
    "revision": "578eadaa7600e022ce8e9585983a47f2"
  },
  {
    "url": "nonliner/summary.html",
    "revision": "814c3434559c23751193f7d417ce46f7"
  },
  {
    "url": "nonliner/what.html",
    "revision": "b7e0df117f449cb232406364d2634797"
  },
  {
    "url": "reinforcement/index.html",
    "revision": "a66f10808c764b35836b98cdad9b941c"
  },
  {
    "url": "sequences/index.html",
    "revision": "3f973a5bc33c04c9b17c9fcc868e7f80"
  },
  {
    "url": "summary/index.html",
    "revision": "05549057a158f00afa8f0c11de7c022f"
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
    "revision": "47e36904776393ed9fff1f8e49401de0"
  },
  {
    "url": "transfer/exercises.html",
    "revision": "b4c679bb1557d3ef0c876a4bdbba818c"
  },
  {
    "url": "transfer/index.html",
    "revision": "f4710810a8966f76dd84517ddb4f4508"
  },
  {
    "url": "transfer/introduction.html",
    "revision": "99e6809d8bc4578fcd06049f8603d751"
  },
  {
    "url": "transfer/summary.html",
    "revision": "25888bf2766ea8fc112396aa45789ec2"
  },
  {
    "url": "visualize/index.html",
    "revision": "0194e0e2262284963ceeb48b1eed9b12"
  },
  {
    "url": "wechat.png",
    "revision": "63fe385956730cdc45f0fdec83fa8f91"
  },
  {
    "url": "workflow/index.html",
    "revision": "4b0b35d5096bd4cac13688fcf967ec12"
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
