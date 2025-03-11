import { useTranslation } from 'react-i18next';
import { PageTemplate } from '@negima/react-components';

export default function HookFormPage() {
    const { t: transl } = useTranslation();

    return (
        <PageTemplate
            headline="Hook Form Component Examples"
            caption="This story shows some examples how to use and implement form."
        >
aaa
        </PageTemplate>
    );
};