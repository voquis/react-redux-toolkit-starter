import React from 'react';
import PageLink from '../../../../components/PageLink';


export default function () {
  document.title="Can you see?";
  return (
    <div>
      can you see?
      <PageLink path='/'>Go home</PageLink>
    </div>
  );
}
