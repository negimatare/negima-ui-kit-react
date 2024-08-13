import { ReactNode } from 'react';

export type VFXDirection = 'ltr' | 'rtl';

export type VFXMode = 'light' | 'dark';

export type VFXVariant = 'Negima-UI';

export type VFXOptions = {
    isLight: boolean;
    variant: VFXVariant;
};

/**
 * VFXProvider Props
 */
export type VFXProviderProps = {
    children: ReactNode;
};