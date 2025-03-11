import * as React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME, PATHS_MAIN, VFX_SETTINGS } from '@negima/react-configs';

import type { LogoProps } from './Logo.types';

/**
 * Logo component
 */
export const Logo: React.FC<LogoProps> = ({
    asLink = false,
    asType = 'default',
    ...shards
}) => {
    const __assetName = React.useMemo(() => {
        switch (asType) {
            case 'full': return 'logo-full.webp';
            default: return 'logo.webp';
        }
    }, [asType]);

    const __asset = <img alt={APP_NAME} src={`/themes/${VFX_SETTINGS.THEME}/${__assetName}`} {...shards} />;

    if (asLink) return <Link to={PATHS_MAIN.root}>{__asset}</Link>;

    return __asset;
};

Logo.displayName = 'Logo';