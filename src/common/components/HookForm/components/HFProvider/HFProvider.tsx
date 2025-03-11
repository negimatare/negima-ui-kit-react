import { FormProvider } from 'react-hook-form';

import type { HFProviderProps } from './HFProvider.types';

/**
 * HFProvider component.
 */
export const HFProvider: React.FC<HFProviderProps> = ({
    children, methods, onSubmit
}) => (
    <FormProvider {...methods}>
        <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
);

HFProvider.displayName = 'HFProvider';