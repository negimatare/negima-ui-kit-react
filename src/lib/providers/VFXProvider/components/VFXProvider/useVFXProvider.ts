import type { Theme } from '@fluentui/react-components';
import {
    createDarkTheme,
    createLightTheme,
    webLightTheme,
    webDarkTheme
} from '@fluentui/react-components';

import type { VFXOptions } from './VFXProvider.types';
import { NEGIMA_UI_VARIANT } from './VFXProvider.palettes';

/**
 * Generate theme based on VFX options.
 */
export const useVFXProvider = () => (options: VFXOptions): Theme => {
    switch (options.variant) {
        case 'Negima-UI': return options.isLight
            ? createLightTheme(NEGIMA_UI_VARIANT)
            : createDarkTheme(NEGIMA_UI_VARIANT)
        default: return options.isLight
            ? webLightTheme
            : webDarkTheme
    }
};