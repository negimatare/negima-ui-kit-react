import { MsalOAuth2, OAuth2Template } from '@negima/react-components';

export default function OAuth2Page() {
    return (
        <OAuth2Template title="Authorize">
            <MsalOAuth2 />
        </OAuth2Template>
    );
};