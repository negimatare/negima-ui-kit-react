import { OAuth2Template } from '@negima/react-templates';
import { MsalOAuth2 } from '@negima/react-ui';

export default function OAuth2Page() {
    return (
        <OAuth2Template title="Authorize">
            <MsalOAuth2 />
        </OAuth2Template>
    );
};