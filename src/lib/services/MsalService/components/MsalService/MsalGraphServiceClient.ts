import axios from 'axios';
import { MSAL_SETTINGS } from '@negima/react-configs';

import type { MsalServiceProps } from './MsalService.types';

export const MsalGraphServiceClient = ({
	acceptLanguage = 'ja, en;q=0.9',
	accessToken
}: MsalServiceProps) => axios.create({
	baseURL: MSAL_SETTINGS.GRAPH_API_URL,
	headers: {
		['Accept-Language']: acceptLanguage,
		Authorization: `Bearer ${accessToken}`
	}
});