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
    ...remains
}) => {
    const __assetName = React.useMemo(() => {
        switch (asType) {
            case 'full': return 'logo-full.svg';
            default: return 'logo.svg';
        }
    }, [asType]);

    const __asset = <img alt={APP_NAME} src={`/variants/${VFX_SETTINGS.VARIANT}/${__assetName}`} {...remains} />;

    if (asLink) return <Link to={PATHS_MAIN.root}>{__asset}</Link>;

    return __asset;
};

Logo.displayName = 'Logo';