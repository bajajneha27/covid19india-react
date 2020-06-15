if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"67489ccd09600426b64bb72c76e63d4d","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"67489ccd09600426b64bb72c76e63d4d","url":"index.html"},{"revision":"3314bba5e5c2d01a9da906b2595dc67d","url":"precache-manifest.3314bba5e5c2d01a9da906b2595dc67d.js"},{"revision":"0d43ef90fa6a51cba8b57c78c49c2580","url":"static/css/2.ab33d419.chunk.css"},{"revision":"7842b75575b86e1154c910141cff9149","url":"static/css/App.264e1a4c.chunk.css"},{"revision":"db7f0d5707423ac5570ab1ca9afb2132","url":"static/js/0.26f91468.chunk.js"},{"revision":"3083a3d32e508f6693d380d3cbee4dd4","url":"static/js/1.accd919a.chunk.js"},{"revision":"04ff9c532c7c6fd59c326234cd94bf79","url":"static/js/2.54e5e1a3.chunk.js"},{"revision":"73a8355f5b90019a0447c52a9c4ce486","url":"static/js/26.13f1b306.chunk.js"},{"revision":"053f5e1c15fc108846747ba60dec8ebe","url":"static/js/27.9d8d1f27.chunk.js"},{"revision":"26c16fa869338753bdf540210a48c40f","url":"static/js/28.3c678e7a.chunk.js"},{"revision":"cca91c0a14248effdd6f9eded48f7ee9","url":"static/js/29.1830a7ab.chunk.js"},{"revision":"98e7d6b83406f0f9c9dcaae84461235f","url":"static/js/3.ce488639.chunk.js"},{"revision":"bdfdf5a4a8ddc1bec574565609776b4f","url":"static/js/30.e7e36533.chunk.js"},{"revision":"ff9496c2a3714dcf2016a3c0f0252485","url":"static/js/31.ac529a17.chunk.js"},{"revision":"14d2ced8b9fd3994c22bd5ec6482ec8d","url":"static/js/32.4fb19dd8.chunk.js"},{"revision":"9ca7abbfde75255fc6daa958ec8a2694","url":"static/js/33.cf04e82a.chunk.js"},{"revision":"916158eef466ef2ec9b23b2b8c4e1dab","url":"static/js/4.3b97e8f0.chunk.js"},{"revision":"7841805d41beff259c34ff7fdfb0950e","url":"static/js/5.14286f3e.chunk.js"},{"revision":"bee7a53cb13f2abe8b9763a73e42e5f9","url":"static/js/About.8c5317d7.chunk.js"},{"revision":"6ffd6ddd94a5f974c9f6e90bd0ed3282","url":"static/js/Actions.afd13504.chunk.js"},{"revision":"13ef5c907bf2418f890f5337dd9b5fe0","url":"static/js/App.4c0bd740.chunk.js"},{"revision":"f7e0ebde12fd1a093f7a495c22e19aae","url":"static/js/Demographics.d502224e.chunk.js"},{"revision":"4b193fe05f59e0747a4c571d6d68cbb1","url":"static/js/Essentials.f6eb5dfd.chunk.js"},{"revision":"6b0df3966a249a942202287ae031f0b0","url":"static/js/Footer.05903efb.chunk.js"},{"revision":"f8007b381a8ea731bef5a5a9ccc7315a","url":"static/js/Home.db7ca6ca.chunk.js"},{"revision":"208f3ef776cd13aa8106a8a29ee4c274","url":"static/js/LanguageSwitcher.ffb711d1.chunk.js"},{"revision":"56c439087cf1c155d726c073d4d6d220","url":"static/js/Level.87bc71ae.chunk.js"},{"revision":"dcffe3dcd8b625535c354765914a188d","url":"static/js/main.34324731.chunk.js"},{"revision":"c048bd0de8e1149ebcacf0ca8bd4498b","url":"static/js/MapExplorer.d741548d.chunk.js"},{"revision":"69e574e726fb2d0061c9594f046e6c47","url":"static/js/MapVisualizer.7d364c2c.chunk.js"},{"revision":"dd0b2b06c096d9530b32cc2130e34a29","url":"static/js/Minigraph.2520f4fe.chunk.js"},{"revision":"166b90bfe64e110ba76038fd576950d3","url":"static/js/Row.ae628492.chunk.js"},{"revision":"3c501f2c077684a1da66d18489c743d8","url":"static/js/runtime-main.9e7ad321.js"},{"revision":"445a7f92f344314413e607fda1650c8b","url":"static/js/State.e750a32b.chunk.js"},{"revision":"59f6dfd4c39a04a9ebb0b18090f44108","url":"static/js/Table.7331397d.chunk.js"},{"revision":"7e6a9e2d61b033f44c0b944c3b47110e","url":"static/js/TimeSeries.e80bc7d6.chunk.js"},{"revision":"7d2a63d5f5bb1b8843367ed52b6bc8a4","url":"static/js/TimeSeriesExplorer.76a04c21.chunk.js"},{"revision":"8ebfd4ce0dd39b1dcdb2f2e9392ee234","url":"static/js/Updates.831fa97e.chunk.js"}]);

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
