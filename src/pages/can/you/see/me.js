import React from 'react';
import PageLink from '../../../../components/PageLink';

export default function () {
  document.title="Did you see me?";
  return (
    <div>
      can you see me?
      <PageLink path='/'>Go Home</PageLink>
    </div>
  );
}
