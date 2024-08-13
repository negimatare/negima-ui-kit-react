import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import reduxLocalStorage from 'redux-persist/lib/storage';

import { vfxSlice } from './slices/vfx.slice';

const rootReducer = combineReducers({
    vfx: persistReducer({
        key: 'vfx',
        keyPrefix: 'ngm-rdx-',
        storage: reduxLocalStorage,
        version: 1
    }, vfxSlice.reducer)
});

export const reduxStore = configureStore({
    reducer: persistReducer({
        key: 'root',
        keyPrefix: 'ngm-rdx-',
        storage: reduxLocalStorage,
        version: 1
    }, rootReducer),
    devTools: !import.meta.env.PROD,
    middleware: (gDM) => gDM({ serializableCheck: false, immutableCheck: false })
})

export const reduxPersistor = persistStore(reduxStore);