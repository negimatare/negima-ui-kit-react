import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { VFXDirection, VFXMode, VFXVariant } from '@negima/react-providers';
import { VFX_SETTINGS } from '@negima/react-configs';

/**
 * VFXSlice State
 */
type VFXSliceState = {
    direction: VFXDirection;
    mode: VFXMode;
    variant: VFXVariant;
};

const initialState: VFXSliceState = {
    direction: 'ltr',
    mode: 'light',
    variant: VFX_SETTINGS.VARIANT
};

export const vfxSlice = createSlice({
    name: 'vfx',
    initialState,
    reducers: {
        changeVariant: (state, action: PayloadAction<VFXVariant>) => {
            state.variant = action.payload;
        },
        toggleDirection: (state) => {
            state.direction = state.direction === 'ltr' ? 'rtl' : 'ltr';
        },
        toggleMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
});

export const {
    changeVariant,
    toggleDirection,
    toggleMode
} = vfxSlice.actions;