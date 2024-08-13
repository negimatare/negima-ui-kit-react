import * as React from 'react';
import { FluentProvider } from '@fluentui/react-components';
import { useVFX } from '@negima/react-utilities';

import type { VFXOptions, VFXProviderProps } from './VFXProvider.types';
import { useVFXProvider } from './useVFXProvider';

/**
 * @internal
 * VFXProvider Provider wrapper.
 */
export const VFXProvider: React.FC<VFXProviderProps> = ({
    children
}) => {
    const {
        direction,
        isLightMode,
        mode,
        variant
    } = useVFX();

    const createTheme = useVFXProvider();

    const __vfxOptions = React.useMemo<VFXOptions>(
        () => ({
            isLight: isLightMode,
            variant
        }),
        [mode, variant]
    );

    const theme = createTheme(__vfxOptions);

    return (
        <FluentProvider dir={direction} theme={theme}>
            {children}
        </FluentProvider>
    );
};

VFXProvider.displayName = 'VFXProvider';