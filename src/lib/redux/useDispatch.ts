import { useDispatch as useLegacyDispatch } from 'react-redux';

import type { AppDispatch } from './redux.types';

/**
 * Use throughout your app instead of plain `useDispatch` and `useSelector`
 * @requires react-redux
 */
export const useDispatch: () => AppDispatch = useLegacyDispatch;