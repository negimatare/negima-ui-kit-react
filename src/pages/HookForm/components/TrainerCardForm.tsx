import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Divider, Toolbar, ToolbarButton, ToolbarGroup } from '@fluentui/react-components';
import { HFInput, HFProvider } from '@negima/react-components';

export const TrainerCardForm: React.FC<any> = ({ disabled, entity }) => {
    const { t: transl } = useTranslation();

    const dataSchema = Yup.object().shape({
        id: Yup.string(),
        avatar: Yup.string(),
        gender: Yup.string().required('xxx'),
        username: Yup.string().required('xxx'),
        class: Yup.string().required('xxx'),
        about: Yup.string().required('xxx'),
        party: Yup.array(),
        favorites: Yup.array(),
        startedAt: Yup.string().required('xxx')
    });

    const defaultValues = React.useMemo(
        () => ({
            id: entity?.id || '',
            avatar: entity?.avatar || '',
            gender: entity?.gender || undefined,
            username: entity?.username || '',
            class: entity?.class || undefined,
            about: entity?.about || '',
            party: entity?.party || [],
            favorites: entity?.favorites || [],
            startedAt: entity?.startedAt || ''
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [entity]
    );

    const methods = useForm<any>({ resolver: yupResolver(dataSchema), defaultValues });

    const {
        control,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { isDirty, isSubmitting, errors }
    } = methods;

    const readonlyCondition = disabled || isSubmitting;

    return (
        <HFProvider methods={methods}>
            <Toolbar aria-label="Trainar Card Actions">
                <ToolbarGroup role="presentation">
                    <ToolbarButton aria-label="Save Current Changes">
                        Save
                    </ToolbarButton>
                </ToolbarGroup>
                <ToolbarGroup role="presentation">
                    <ToolbarButton aria-label="Cancel Current Changes">
                        Cancel
                    </ToolbarButton>
                </ToolbarGroup>
            </Toolbar>

            <Divider />

            <HFInput
                name="id"
                label={''}
                placeholder={''}
                required
                disabled={readonlyCondition}
            />

            <HFInput
                name="username"
                label={''}
                placeholder={''}
                required
                disabled={readonlyCondition}
            />
        </HFProvider>
    );
};

TrainerCardForm.displayName = 'TrainerCardForm';