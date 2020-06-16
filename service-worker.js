if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"42c3bb462d3ad6138700280de7c8937a","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"42c3bb462d3ad6138700280de7c8937a","url":"index.html"},{"revision":"80a5ffa48acbf6dade515bc901656bdf","url":"precache-manifest.80a5ffa48acbf6dade515bc901656bdf.js"},{"revision":"32d2ea1028e3f6fb02624494f35a8c1c","url":"static/css/2.93b3b32d.chunk.css"},{"revision":"7842b75575b86e1154c910141cff9149","url":"static/css/App.264e1a4c.chunk.css"},{"revision":"1c19da146bad42597a4948dfd54f8110","url":"static/js/0.b5e50dec.chunk.js"},{"revision":"3083a3d32e508f6693d380d3cbee4dd4","url":"static/js/1.accd919a.chunk.js"},{"revision":"04ff9c532c7c6fd59c326234cd94bf79","url":"static/js/2.54e5e1a3.chunk.js"},{"revision":"6f3ac41192d0fdd76eccc770bf3a5eb9","url":"static/js/26.a7ff00d5.chunk.js"},{"revision":"36a56dd3c3fd2831dcbdf1839d9fdd7a","url":"static/js/27.79093de4.chunk.js"},{"revision":"7af6089ff326645223b639cf2c73bd46","url":"static/js/28.303e3659.chunk.js"},{"revision":"cca91c0a14248effdd6f9eded48f7ee9","url":"static/js/29.1830a7ab.chunk.js"},{"revision":"98e7d6b83406f0f9c9dcaae84461235f","url":"static/js/3.ce488639.chunk.js"},{"revision":"577015a461c375e4266894a3fe85f19a","url":"static/js/30.e0c220f2.chunk.js"},{"revision":"0b865b74e8b2e2744cfc4341a3096d2c","url":"static/js/31.a2d7fda7.chunk.js"},{"revision":"14d2ced8b9fd3994c22bd5ec6482ec8d","url":"static/js/32.4fb19dd8.chunk.js"},{"revision":"6f76f3ebf8fd9d604a297d56a8a4af2f","url":"static/js/33.7db906a7.chunk.js"},{"revision":"916158eef466ef2ec9b23b2b8c4e1dab","url":"static/js/4.3b97e8f0.chunk.js"},{"revision":"a942e5dc064a4bdd9aacbff74fd1a57c","url":"static/js/5.bf9c3949.chunk.js"},{"revision":"12c55d75ec5c3922399cf76fabb8a95d","url":"static/js/About.ae390e7b.chunk.js"},{"revision":"0d075fca31f4c725ca16759672d52f0a","url":"static/js/Actions.a06933ec.chunk.js"},{"revision":"8be63212c142e33f1ccd1371615a7b9f","url":"static/js/App.97806d13.chunk.js"},{"revision":"bd3efb2f3509ca7a4bcc04babe268294","url":"static/js/Demographics.2553f5a0.chunk.js"},{"revision":"ae3305316aef6f3e613127356192e5cd","url":"static/js/Essentials.21ea4e3f.chunk.js"},{"revision":"c4abf6f78e6c1669ce4b36f4840d9c97","url":"static/js/Footer.52129d44.chunk.js"},{"revision":"20ac178e05db01d74a6aad27b067c789","url":"static/js/Home.621bd301.chunk.js"},{"revision":"36ee15e532ab045af7211a5f7b61b230","url":"static/js/LanguageSwitcher.0b018dad.chunk.js"},{"revision":"0eb21f108c67694fb0ff3e3e4a62639d","url":"static/js/Level.aa629871.chunk.js"},{"revision":"b1a8d29d005a458d3cceec712201b27f","url":"static/js/main.cb753ab1.chunk.js"},{"revision":"97500bd67a7f5dac34bc0171e6f430f4","url":"static/js/MapExplorer.bc35874a.chunk.js"},{"revision":"1f7b2c1c48430a98b0551cd7e3fe882d","url":"static/js/MapVisualizer.2993651d.chunk.js"},{"revision":"dd0b2b06c096d9530b32cc2130e34a29","url":"static/js/Minigraph.2520f4fe.chunk.js"},{"revision":"ee12e46bf83f958b65def544e77dbc20","url":"static/js/Row.5556f2b8.chunk.js"},{"revision":"66838151020fb09c066facee08e753c5","url":"static/js/runtime-main.caf0a6fc.js"},{"revision":"b4062365d319ceeed2e8a3242332d29f","url":"static/js/State.60910021.chunk.js"},{"revision":"7ff6ff68bba1b9e3db1849efac95e48e","url":"static/js/Table.f55b31bd.chunk.js"},{"revision":"ce9b20aac864c02776cc8c3939daf057","url":"static/js/TimeSeries.fd50ee7a.chunk.js"},{"revision":"e4c7f57f205c0000155d97631bb6c254","url":"static/js/TimeSeriesExplorer.79c2a410.chunk.js"},{"revision":"8ebfd4ce0dd39b1dcdb2f2e9392ee234","url":"static/js/Updates.831fa97e.chunk.js"}]);

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
