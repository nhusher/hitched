import React from 'react';

const REGISTRY_URL = 'http://www.zola.com/registry/sia-and-nick';
const ZOLA_LOGO = '/images/zola-logo-black.svg';

export default function Registry() {
  return (
    <section id="registry">
      <h2>Registry</h2>
      <div className="registry-description">
        <a href={REGISTRY_URL}><img src={ZOLA_LOGO} alt="zola" /></a>
        <p>
          Our registry is available on Zola. We aren't asking for many tangible gifts because we
          don't know what we'll need after we move!
        </p>
      </div>
    </section>);
}
