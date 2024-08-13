import type { VFXDirection, VFXMode, VFXVariant } from '@negima/react-providers';
import type { RootState } from '@negima/react-redux';
import {
    useDispatch,
    useSelector,
    changeVariant,
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
        variant: useSelector((state: RootState) => state.vfx.variant) as VFXVariant,
        changeVariant: (value: VFXVariant) => { dispatch(changeVariant(value)); }
    };
};