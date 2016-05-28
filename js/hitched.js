import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/Root';

function reloadStyles() {
  return new Promise(resolve => {
    const
      s         = document.getElementById('styles'),
      url       = '/css/styles.css',
      newStyles = document.createElement('link');

    newStyles.href = `${url}?bust=${Date.now()}`;
    newStyles.rel = 'stylesheet';
    newStyles.addEventListener('load', () => {
      s.parentNode.removeChild(s);
      newStyles.id = 'styles';
      resolve();
    });
    s.parentNode.insertBefore(newStyles, s);
  });
}

function reloadScripts() {
  return new Promise(resolve => {
    const
      s         = document.getElementById('scripts'),
      url       = '/js/hitched.build.js',
      newScript = document.createElement('script');

    newScript.src = `${url}?bust=${Date.now()}`;
    newScript.addEventListener('load', () => {
      s.parentNode.removeChild(s);
      newScript.id = 'scripts';
      resolve();
    });
    s.parentNode.insertBefore(newScript, s);
  });
}


function boot() {
  ReactDOM.render(<Root />, document.querySelector('#main'));

  if (process.env.NODE_ENV !== 'production') {
    reloadStyles().then(() => setTimeout(boot, 1000))
    //setTimeout(reloadScripts, 4000);
  }
}

if (!window.FONTS_LOADED) {
  Typekit.load({
    async: false,
    active() {
      window.FONTS_LOADED = true;
      boot();
    }
  });
} else {
  boot();
}
