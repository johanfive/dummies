const fs = require('fs');

// This script adds the script tag from spa-github-pages to the generated index.html file
// So that react router continues to work on refresh.
// Comments get stripped by parcel so I've added them here for credits where they're due.

// Single Page Apps for GitHub Pages
// https://github.com/rafrex/spa-github-pages
// Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License
// ----------------------------------------------------------------------
// This script checks to see if a redirect is present in the query string
// and converts it back into the correct url and adds it to the
// browser's history using window.history.replaceState(...),
// which won't cause the browser to attempt to load the new url.
// When the single page app is loaded further down in this file,
// the correct url will be waiting in the browser's history for
// the single page app to route accordingly.

const TITLE_TAG = '<title>Dummies - React Components Library</title>';
// eslint-disable-next-line quotes
const THANKS_RAF = `<script type="text/javascript">(function(l){if(l.search){varq={};l.search.slice(1).split('&').forEach(function(v){vara=v.split('=');q[a[0]]=a.slice(1).join('=').replace(/~and~/g,'&');});if(q.p!==undefined){window.history.replaceState(null,null,l.pathname.slice(0,-1)+(q.p||'')+(q.q?('?'+q.q):'')+l.hash);}}}(window.location))</script>${TITLE_TAG}`;

(function addRedirectScriptToIndex() {
  var ghpDemoIndexFile = fs.readFileSync('ghpDemo/index.html', 'utf-8');
  var override = ghpDemoIndexFile.replace(TITLE_TAG, THANKS_RAF);
  fs.writeFileSync('ghpDemo/index.html', override, 'utf-8');
  console.log('ghpDemo index.html override complete');
})();
