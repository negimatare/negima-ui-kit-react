import * as React from 'react';
import {
    bundleIcon,
    WeatherMoonFilled,
    WeatherMoonRegular,
    WeatherSunnyFilled,
    WeatherSunnyRegular
} from '@fluentui/react-icons';
import { Button, Tooltip } from '@fluentui/react-components';
import { useVFX } from '@negima/react-utilities';

import { ThemeModeActionState } from './ThemeModeAction.types';

const MoonIcon = bundleIcon(WeatherMoonFilled, WeatherMoonRegular);
const SunnIcon = bundleIcon(WeatherSunnyFilled, WeatherSunnyRegular);

/**
 * ThemeModeAction component.
 */
export const ThemeModeAction: React.FC = () => {
    const {
        isLightMode,
        mode,
        toggleMode
    } = useVFX();

    const __state = React.useMemo<ThemeModeActionState>(
        () => ({
            headline: isLightMode
                ? 'Switch to dark mode'
                : 'Switch to light mode',
            icon: isLightMode ? <MoonIcon /> : <SunnIcon />
        }),
        [mode]
    );

    return (
        <Tooltip content={__state.headline} relationship="label">
            <Button appearance="transparent" icon={__state.icon} onClick={toggleMode} />
        </Tooltip>
    );
};

ThemeModeAction.displayName = 'ThemeModeAction';