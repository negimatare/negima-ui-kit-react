import { Configuration, MeApi, SupplierApi, SurveyApi } from '@negima/react-apis';
import { WEB_API_SETTINGS } from '@negima/react-configs';

import type { WebAPIServiceProps } from './WebAPIService.types';

export const MeApiService = ({
    acceptLanguage = WEB_API_SETTINGS.ACCEPT_LANGUAGE,
    accessToken,
    contentLanguage = WEB_API_SETTINGS.CONTENT_LANGUAGE,
}: WebAPIServiceProps) => new MeApi({
    basePath: WEB_API_SETTINGS.WEB_API_URL,
    baseOptions: {
        headers: {
            ['Accept-Language']: acceptLanguage,
            ['Content-Language']: contentLanguage,
            Authorization: `Bearer ${accessToken}`,
        }
    },
    isJsonMime: Configuration.prototype.isJsonMime
});

export const SupplierApiService = ({
    acceptLanguage = WEB_API_SETTINGS.ACCEPT_LANGUAGE,
    accessToken,
    contentLanguage = WEB_API_SETTINGS.CONTENT_LANGUAGE,
}: WebAPIServiceProps) => new SupplierApi({
    basePath: WEB_API_SETTINGS.WEB_API_URL,
    baseOptions: {
        headers: {
            ['Accept-Language']: acceptLanguage,
            ['Content-Language']: contentLanguage,
            Authorization: `Bearer ${accessToken}`,
        }
    },
    isJsonMime: Configuration.prototype.isJsonMime
});

export const SurveyApiService = ({
    acceptLanguage = WEB_API_SETTINGS.ACCEPT_LANGUAGE,
    accessToken,
    contentLanguage = WEB_API_SETTINGS.CONTENT_LANGUAGE,
}: WebAPIServiceProps) => new SurveyApi({
    basePath: WEB_API_SETTINGS.WEB_API_URL,
    baseOptions: {
        headers: {
            ['Accept-Language']: acceptLanguage,
            ['Content-Language']: contentLanguage,
            Authorization: `Bearer ${accessToken}`,
        }
    },
    isJsonMime: Configuration.prototype.isJsonMime
});