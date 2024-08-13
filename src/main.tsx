import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { OAuth2Provider } from '@negima/react-contexts';
import { reduxPersistor, reduxStore } from '@negima/react-redux';

import './main.css';

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<OAuth2Provider>
			<HelmetProvider>
				<ReduxProvider store={reduxStore}>
					<PersistGate loading={null} persistor={reduxPersistor}>
						<App />
					</PersistGate>
				</ReduxProvider>
			</HelmetProvider>
		</OAuth2Provider>
	</React.StrictMode>
);