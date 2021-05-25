import React, { lazy, Suspense } from 'react';

const LazyOKR_Diagram = lazy(() => import('./OKR_Diagram'));

const OKR_Diagram = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyOKR_Diagram {...props} />
  </Suspense>
);

export default OKR_Diagram;
