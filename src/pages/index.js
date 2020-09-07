import React from 'react';
import PageLink from '../components/PageLink';

export default function () {
  document.title = 'Home';

  return (
    <div>
      <h1>Home page</h1>
      <PageLink path='/can/you/see/me'>Go to: can you see me</PageLink>
    </div>
  );
}
