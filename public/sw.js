if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const t={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return t;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/EDEfrBtrdX14S5eGqAHuo/_buildManifest.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/EDEfrBtrdX14S5eGqAHuo/_ssgManifest.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/124.cebc33e0e09dfbfd6563.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/125-b72784e620c01406a30f.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/302.8a089b8d405d527ca5f7.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/59-4b0723a63e545bbd1f26.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/68-d7647c78953ff8f82bb8.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/6c44d60f.eac5a2d5e5301e34ff89.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/798-c3d152f98f21f4c9eb24.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/929.c7eb167a415e5ce7e8ee.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/framework-3af989d3dbeb77832f99.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/main-b9697b8a6894e5aa8037.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/404-d0ee0ef0bb798dc9d179.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/_app-0ba07b12f56cf98cb5a8.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/_error-96c4e8ffccbde703d569.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/about-4075c0424211e016a857.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/about/aboutme-a84917fa3e452eab3629.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/axios-df15b7b9c6438a8db4a8.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/browser-not-supported-2a8dc6b5b9107bc54439.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/crop1-25c66c7d34c994968b15.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/crop2-94700bfb751f32e5bc9c.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/dynamic-96dde7f9025509f6ec50.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/dynamic/%5Bname%5D-9f2f98376243375b8c0d.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/dynamic/%5Bname%5D/%5Bsubname%5D-0d73bb59b1eb81f75e2f.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/dynamic2-ebb66846bd709e95aa71.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/events-c75d746a88881b9cba02.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/forgot-password-33b2de9cfada3766bd40.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/formik-812603176132e9b0b8a1.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/formik/use-formik/UseFormik-64168a44f8402dfbbf4b.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/gallery-74864685f49c85fe1ec3.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/grid-1bc75505c6d75ecdadde.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/index-16ea447b18df678b2105.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/login-20f38ba0f1989280ee40.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/payment-205b4e3c4e858c22b84d.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/profile-a78132f71ff359c5e185.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/profile/edit-96512c150d9e515c8305.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/react-query-5d80a9bc114219064d4b.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/search/%5B...name%5D-8c5fd4af5f48e5d3e06b.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/signup-1ea18290eb7957ef0069.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/star-wars-e0797829153beb55717b.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/styled-d2e74c27a397cbfce647.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/test-90d5306ca2cfaed06a51.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/test/link-4199b40a9bfe3bdf2629.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/test/styledlink-8ae3471d237a26419bf3.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/users-218b4f5ef39799c25e79.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/users/%5Bid%5D-a80b8d4feb5d3e606c34.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/pages/videos/%5Bname%5D-a0acb1d4ef68b438d01c.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/chunks/webpack-84c2963312cb88905d34.js",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/css/2c39a8a153e268568488.css",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/css/b95a6c197da08a18bae1.css",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/_next/static/css/d8fefa0384fe1c387a32.css",revision:"EDEfrBtrdX14S5eGqAHuo"},{url:"/favicon.ico",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/icon-192x192.png",revision:"d7e1d54c2d19e75b790ce55614c51e4a"},{url:"/icon-256x256.png",revision:"fcc5be32717d9b025416cd16269270d3"},{url:"/icon-384x384.png",revision:"49910b0332c4bf704323a39fa1a4418c"},{url:"/icon-512x512.png",revision:"b5cd900f5280b3a86c2f990b2005b0cc"},{url:"/icons/jwt.svg",revision:"70056e50e744b2ef4588ea1ee0c14df3"},{url:"/images/browser-firefox.svg",revision:"0a33998af4e848d32d109462991408ae"},{url:"/images/image-001.jpg",revision:"83d07b9e88db4cebb179add6b982c6c4"},{url:"/images/image-002.jpg",revision:"2d764394e04452d209244d00c5768284"},{url:"/images/image-003.jpg",revision:"662606915abfbca42ad18d23ae97748e"},{url:"/images/image-004.jpg",revision:"9d4377f457114cfad7c9cb40c9e2739b"},{url:"/images/image-005.jpg",revision:"ddd30160769fae5500f959431fb845bd"},{url:"/images/image-006.jpg",revision:"7674cd8f7e1eb972aeae3b569dda7510"},{url:"/images/image-007.jpg",revision:"748ccb936bf8d9c3629c4ad7e9175afb"},{url:"/images/image-008.jpg",revision:"9a88038c93f09e6f9bd2f62aa9cabffc"},{url:"/images/image-009.jpg",revision:"b4945671eefb4965bff44b468b76412a"},{url:"/images/image-01.jpg",revision:"6d82e82ac129dc35e5f558df68ba3b64"},{url:"/images/image-010.jpg",revision:"aca760ca71e4cf2be5b2d460769f27d5"},{url:"/images/image-011.jpg",revision:"1dba678212d214e155fd258c2538cf67"},{url:"/images/image-012.jpg",revision:"8bff0a616bd048ce4dc123e95282cedf"},{url:"/images/image-013.jpg",revision:"41bb112d036b2a0547605ea0f30b3674"},{url:"/images/image-014.jpg",revision:"c4f41141c941f7ffaae51a97506f6570"},{url:"/images/image-015.jpg",revision:"c462b752ed68bc14dbbe325ff867be29"},{url:"/images/image-016.jpg",revision:"a054a2fbed1f8e21adcb9164993b1137"},{url:"/images/image-017.jpg",revision:"2e36ee4488799054f9eb8e42e2e9dec6"},{url:"/images/image-018.jpg",revision:"f64ae8c92c89762c5d656449d602c015"},{url:"/images/image-019.jpg",revision:"ac3ac0f917cb9ca1924992bce774856a"},{url:"/images/image-02.jpg",revision:"7b7bf2637606f28a114154377c4fffab"},{url:"/images/image-020.jpg",revision:"b207428df2f3319f1189d0eedff2b3d6"},{url:"/images/image-021.jpg",revision:"208d1f1555db19163aa8d05afe94b2bf"},{url:"/images/image-022.jpg",revision:"2762b920bab7fbeabdcb4cc80ad7b351"},{url:"/images/image-023.jpg",revision:"3e9a149d37b8718ec5d7ccdc22f64d62"},{url:"/images/image-024.jpg",revision:"98f7d5d0d81c9a3f3db0d5e81b145f56"},{url:"/images/image1.jpg",revision:"91af3e8bebc0d28240e9d3ef4ad72c0f"},{url:"/images/image2.jpg",revision:"35f9eed025ca5598a1fa676ec54744c4"},{url:"/images/image3.jpg",revision:"0e6c4f3ad6af46aa04533d9d466c0280"},{url:"/images/jwtio-json-web-token.svg",revision:"70056e50e744b2ef4588ea1ee0c14df3"},{url:"/images/man.svg",revision:"a3f34375dfca3cc585c15b8dbcb203cb"},{url:"/manifest.json",revision:"4d2362b2a2b998c10edf434e68033156"},{url:"/robots.txt",revision:"fcbf8d55ef0cf3e5792b638eeed8b24c"},{url:"/sitemap.xml",revision:"d43dec650198af9a94980c7edf2a135f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
