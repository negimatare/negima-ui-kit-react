import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { VFXDirection, VFXMode, VFXTheme } from '@negima/react-providers';
import { VFX_SETTINGS } from '@negima/react-configs';

/**
 * VFXSlice State
 */
type VFXSliceState = {
    direction: VFXDirection;
    mode: VFXMode;
    theme: VFXTheme;
};

const initialState: VFXSliceState = {
    direction: 'ltr',
    mode: 'light',
    theme: VFX_SETTINGS.THEME
};

export const vfxSlice = createSlice({
    name: 'vfx',
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<VFXTheme>) => {
            state.theme = action.payload;
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
    changeTheme,
    toggleDirection,
    toggleMode
} = vfxSlice.actions;