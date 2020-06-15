if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"b3c4316ce1702252f4b312e1511ecf07","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"b3c4316ce1702252f4b312e1511ecf07","url":"index.html"},{"revision":"171ba23686b7d9b6fb334643dd5cb9c0","url":"precache-manifest.171ba23686b7d9b6fb334643dd5cb9c0.js"},{"revision":"a5b8874017526d5fb6d20d833a30e433","url":"static/css/2.36fd620c.chunk.css"},{"revision":"9e8d51f0fa2764910f413f62dcaadf2b","url":"static/css/App.e26a41e2.chunk.css"},{"revision":"5a60bae920639242363bac6e0aac00bd","url":"static/js/0.26f91468.chunk.js"},{"revision":"e74d4773ccfb0d44275ab3e5f6a53dae","url":"static/js/1.accd919a.chunk.js"},{"revision":"9eadea0d610be3cf005ce8dd5cd187a9","url":"static/js/2.54e5e1a3.chunk.js"},{"revision":"18f01dda8cd2484112ffd519877fea88","url":"static/js/26.13f1b306.chunk.js"},{"revision":"d51b735886a51b1bb9b2b88a4337fcf3","url":"static/js/27.9d8d1f27.chunk.js"},{"revision":"b415dfdb1546ecbad747076ad4a05e00","url":"static/js/28.3c678e7a.chunk.js"},{"revision":"310b6c38cc30676a189d6f1fff1789c3","url":"static/js/29.1830a7ab.chunk.js"},{"revision":"83a1f191de1544c17b328455181b7778","url":"static/js/3.ce488639.chunk.js"},{"revision":"c7d83f358bf98129917acb06562470e8","url":"static/js/30.e7e36533.chunk.js"},{"revision":"d30d04237a30282c9b2e0a1d80b07639","url":"static/js/31.ac529a17.chunk.js"},{"revision":"e169cdb2cf6215a5ae110715aa61978b","url":"static/js/32.4fb19dd8.chunk.js"},{"revision":"7ae65002a5426b53f5d1a827dc18a9e6","url":"static/js/33.cf04e82a.chunk.js"},{"revision":"64371c9217beef2c3d6e35ba5a4c580d","url":"static/js/4.3b97e8f0.chunk.js"},{"revision":"68c92b458f4a96f666989c42aff52abb","url":"static/js/5.14286f3e.chunk.js"},{"revision":"c49b6eaa484026ab4a7ac0e618cf461f","url":"static/js/About.8c5317d7.chunk.js"},{"revision":"23c5f989e93d46c26342a444105ad39f","url":"static/js/Actions.afd13504.chunk.js"},{"revision":"32de6db5c1cc35ec44ba73eb2445a7dd","url":"static/js/App.dd7b32ce.chunk.js"},{"revision":"b24af934e00108c99ee6ae30796c416b","url":"static/js/Demographics.d502224e.chunk.js"},{"revision":"a89a94d65568b3ce0dc7e3d65e772e51","url":"static/js/Essentials.f6eb5dfd.chunk.js"},{"revision":"67f15e440478d0a267cc8c43984ca95b","url":"static/js/Footer.05903efb.chunk.js"},{"revision":"52fc94ebaa813f25eead57c578bfd469","url":"static/js/Home.db7ca6ca.chunk.js"},{"revision":"d58262f5bbc5e4800029acee8f6ccbd6","url":"static/js/LanguageSwitcher.ffb711d1.chunk.js"},{"revision":"4403d7f3b37ed17bde5a276b18b95497","url":"static/js/Level.87bc71ae.chunk.js"},{"revision":"f5e86736eea399bb4c1de52ec6cfe088","url":"static/js/main.251337be.chunk.js"},{"revision":"4070f2c32b52670365bd65a029121a53","url":"static/js/MapExplorer.d741548d.chunk.js"},{"revision":"cc4fd69f15d7b252ea7266759bede88e","url":"static/js/MapVisualizer.7d364c2c.chunk.js"},{"revision":"a6bff0e5619abdf1521778ec358840c1","url":"static/js/Minigraph.2520f4fe.chunk.js"},{"revision":"7240029d440f344d4386ba7cb2dc6fae","url":"static/js/Row.ae628492.chunk.js"},{"revision":"4b1a6cf3a2974b40c4e47176694ee7b3","url":"static/js/runtime-main.156954d3.js"},{"revision":"549b2ef80edc47272645c1c4c9553edd","url":"static/js/State.e750a32b.chunk.js"},{"revision":"967ba35b7726cf13f9eebdf995c12462","url":"static/js/Table.7331397d.chunk.js"},{"revision":"7808311ec3fb9eb6e308968c62026dd3","url":"static/js/TimeSeries.e80bc7d6.chunk.js"},{"revision":"8713fbabc1ea5400a5d6df6ff0555997","url":"static/js/TimeSeriesExplorer.76a04c21.chunk.js"},{"revision":"0ba951b3a81743fcf04f8d3229c21533","url":"static/js/Updates.831fa97e.chunk.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
