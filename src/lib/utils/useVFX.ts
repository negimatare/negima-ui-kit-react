import type { VFXDirection, VFXMode, VFXTheme } from '@negima/react-providers';
import type { RootState } from '@negima/react-redux';
import {
    useDispatch,
    useSelector,
    changeTheme,
    toggleDirection,
    toggleMode
} from '@negima/react-redux';

/**
 * Manage all VFX settings stored on the global store.
 * @requires react-redux
 */
export const useVFX = () => {
    const dispatch = useDispatch();

    return {
        isLightMode: useSelector((state: RootState) => state.vfx.mode) === 'light',
        direction: useSelector((state: RootState) => state.vfx.direction) as VFXDirection,
        toggleDirection: () => { dispatch(toggleDirection()); },
        mode: useSelector((state: RootState) => state.vfx.mode) as VFXMode,
        toggleMode: () => { dispatch(toggleMode()); },
        theme: useSelector((state: RootState) => state.vfx.theme) as VFXTheme,
        changeTheme: (value: VFXTheme) => { dispatch(changeTheme(value)); }
    };
};