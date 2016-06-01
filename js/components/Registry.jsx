import React from 'react';

const REGISTRY_URL = 'http://www.zola.com/registry/sia-and-nick';
const ZOLA_LOGO = '/images/zola-logo-black.svg';

export default function Registry() {
  return (
    <section id="registry">
      <h2>Registry</h2>
      <div className="registry-description">
        <a href={REGISTRY_URL} className="zola-logo"><img src={ZOLA_LOGO} alt="zola" /></a>
        <p>
          If you want to give us a gift, our wedding registry is
          on <a href={REGISTRY_URL}>Zola</a>. We'll also take gifts
          of fine whiskey and good company.
        </p>
      </div>
    </section>);
}
