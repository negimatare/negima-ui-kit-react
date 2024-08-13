import { RouterProvider } from 'react-router-dom';
import { VFXProvider } from '@negima/react-providers';

import { browserRouter } from './router';

export default function App() {
	return (
		<VFXProvider>
			<RouterProvider router={browserRouter} />
		</VFXProvider>
	);
};