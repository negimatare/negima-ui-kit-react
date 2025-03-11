import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Button,
    Dialog as FluentDialog,
    DialogActions,
    DialogBody,
    DialogContent,
    DialogSurface,
    DialogTitle,
    DialogTrigger
} from '@fluentui/react-components';

import type { DialogProps } from './Dialog.types';

/**
 * Dialog component.
 */
export const Dialog: React.FC<DialogProps> = ({
    title,
    content,
    actions,
    ...shards
}) => {
    const {
        t: transl
    } = useTranslation();

    return (
        <FluentDialog {...shards}>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogContent>
                        {content}
                    </DialogContent>
                    <DialogActions fluid>
                        {actions}
                        {/* DialogTrigger inside of a Dialog still works properly */}
                        <DialogTrigger disableButtonEnhancement>
                            <Button appearance="secondary" size="large">
                                {transl('dialog.cancel-button-label')}
                            </Button>
                        </DialogTrigger>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </FluentDialog>
    );
};

Dialog.displayName = 'Dialog';