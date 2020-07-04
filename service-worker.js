if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"81366ec6f72148a390b5aa1beac46a6f","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"81366ec6f72148a390b5aa1beac46a6f","url":"index.html"},{"revision":"ad2bd1a4158d5a0f778e5e850770f11c","url":"precache-manifest.ad2bd1a4158d5a0f778e5e850770f11c.js"},{"revision":"5a0ac1c1ebda89af90f5dc5fcb89aeaa","url":"static/css/3.ab33d419.chunk.css"},{"revision":"12996694153f2262c138e285f80a91db","url":"static/css/App.99975802.chunk.css"},{"revision":"e24fa38043afe78374c873fcb83d9d7e","url":"static/js/0.87ed8135.chunk.js"},{"revision":"c92561737183c4394191d1d8eb80d8ed","url":"static/js/1.f7d3ab6a.chunk.js"},{"revision":"2d5772ac731408304a501e5a2bf72c11","url":"static/js/2.2df454e7.chunk.js"},{"revision":"83d9f17ba8dc11def797d730c3138303","url":"static/js/27.78eee474.chunk.js"},{"revision":"aca6b7f728e05886287d659b2564f564","url":"static/js/28.1b733341.chunk.js"},{"revision":"f301aac7db0dd2b63910d3a0f951a818","url":"static/js/29.37b323d9.chunk.js"},{"revision":"e7d0375b6d803b10a425936943ece8da","url":"static/js/3.42e56115.chunk.js"},{"revision":"a385ae42d6b44e10a8f7f80d82887813","url":"static/js/30.152df81e.chunk.js"},{"revision":"ce0a6768ba83c6cf29f39ce6f0837f81","url":"static/js/31.f9f23692.chunk.js"},{"revision":"e22a9344e9e5eba604f1af5f8634189e","url":"static/js/32.de0c5095.chunk.js"},{"revision":"b84415a1e6ae0aae118582fcee6ba3a2","url":"static/js/33.3dc97785.chunk.js"},{"revision":"efd0b65e7ca2b091c845ca28cc03de1c","url":"static/js/34.a33b6955.chunk.js"},{"revision":"adfda997289deed39fbe2512cd27ae86","url":"static/js/4.754a3a5d.chunk.js"},{"revision":"91faa92e26f86b0c4c9733503c1a65a1","url":"static/js/5.d3594796.chunk.js"},{"revision":"7c4c09fe2a784b635458eb8c0ea26c58","url":"static/js/6.c78e599a.chunk.js"},{"revision":"ceabc48f24b3ea118d74ddddaeab8463","url":"static/js/7.94d4d5ce.chunk.js"},{"revision":"ac72b3e18513671550252ed413153883","url":"static/js/Actions.472e9551.chunk.js"},{"revision":"cf2d20c2b70e386e160466c38ad40263","url":"static/js/App.7f295378.chunk.js"},{"revision":"f56f7ab6aec66c9a815d3c76d30946a2","url":"static/js/Demographics.6823e857.chunk.js"},{"revision":"99a63973f116f1df5cdfa96677dd1614","url":"static/js/Essentials.45d77922.chunk.js"},{"revision":"c6299e4c6fb6a467de9b31b22591a338","url":"static/js/Footer.ab869ef7.chunk.js"},{"revision":"fdd7a107695f18ef3932931a7f14cce8","url":"static/js/Home.885b10fe.chunk.js"},{"revision":"f2f1de19f954e55473cdc444f4443b71","url":"static/js/LanguageSwitcher.2b52e8db.chunk.js"},{"revision":"6a0b1c1d5f051750e41a5a3c3139b77a","url":"static/js/Level.239f5ba5.chunk.js"},{"revision":"02a88f59fb4b6794789f9ec74864d7ea","url":"static/js/main.5486bb06.chunk.js"},{"revision":"8c0f5b4c2fa1f0d94a885163ee58f82a","url":"static/js/MapExplorer.8f4aba61.chunk.js"},{"revision":"18fbc287aaa516463d32da1e88cb0c24","url":"static/js/MapVisualizer.2007f7fe.chunk.js"},{"revision":"ad77db55bf87fcdf5cfc03f7037a6dba","url":"static/js/Minigraph.77491f70.chunk.js"},{"revision":"6521a5f97241e5012f5eee2e6aaa4e93","url":"static/js/Row.1d41902e.chunk.js"},{"revision":"b6912018023989dd3be177caf037d72e","url":"static/js/runtime-main.85518b6b.js"},{"revision":"db52a10170bea2acbe8a227196d8f22a","url":"static/js/State.d46bc665.chunk.js"},{"revision":"4526d8191ca295a2b2debb52d676871e","url":"static/js/Table.7c58da69.chunk.js"},{"revision":"0bde08e970bffb7fb78390f599eccb2d","url":"static/js/TimeSeries.fbebfeb9.chunk.js"},{"revision":"8aaa18e053c9fffc975b61dab301da41","url":"static/js/TimeSeriesExplorer.3499f6a3.chunk.js"},{"revision":"19ff5741d9b77b152a04aacc8da6bac4","url":"static/js/Updates.447a74c3.chunk.js"}]);

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
      new RegExp('https://vics-core\\.github\\.io/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
