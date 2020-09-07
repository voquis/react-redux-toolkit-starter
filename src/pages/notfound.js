import React from 'react';
import PageLink from '../components/PageLink';

export default function () {
  document.title = 'Not Found';

  return (
    <div>
      <h1>Page not found</h1>
      <p>The requested page was not found</p>
      <PageLink path='/'>Return to home page</PageLink>
    </div>
  );
}
