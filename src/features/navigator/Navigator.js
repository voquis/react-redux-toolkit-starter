import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { selectPath } from './navigatorSlice';
import PageLoadErrorBoundary from '../../components/PageLoadErrorBoundary';
import Loading from '../../pages/loading';

/**
 * This component determines the URL on initial page load
 * and sets the navigator path state
 */
export function Navigator() {
  // Get redux path (without basepath)
  const path = useSelector(selectPath);

  // New page component that loads async when called
  const Page = React.lazy(() => import('../../pages' + path));

  return (
    <PageLoadErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Page />
      </Suspense>
    </PageLoadErrorBoundary>
  );
}
