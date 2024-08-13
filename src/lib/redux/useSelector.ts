import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector as useLegacySelector } from 'react-redux';

import type { RootState } from './redux.types';

/**
 * Use throughout your app instead of plain `useDispatch` and `useSelector`
 * @requires react-redux
 */
export const useSelector: TypedUseSelectorHook<RootState> = useLegacySelector;