import { Suspense, ElementType } from 'react';
import { LoadingScreen } from '@negima/react-components';

export const withSuspense = (Component: ElementType) => (props: any) => (
    <Suspense fallback={(<LoadingScreen />)}>
        <Component {...props} />
    </Suspense>
);