import { RouterProvider } from 'react-router-dom';
import { VFXProvider } from '@negima/react-providers';

import { browserRouter } from './router';

import 'moment/dist/locale/it';
import 'moment/dist/locale/ja';

export default function App() {
	return (
		<VFXProvider>
			<RouterProvider router={browserRouter} />
		</VFXProvider>
	);
};