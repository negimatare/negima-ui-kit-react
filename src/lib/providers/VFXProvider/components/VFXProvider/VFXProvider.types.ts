import { ReactNode } from 'react';

export type VFXDirection = 'ltr' | 'rtl';

export type VFXMode = 'light' | 'dark';

export type VFXTheme = 'Negima-UI';

export type VFXOptions = {
    isLight: boolean;
    theme: VFXTheme;
};

/**
 * VFXProvider Props
 */
export type VFXProviderProps = {
    children: ReactNode;
};