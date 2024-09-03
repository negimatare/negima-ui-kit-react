import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { bundleIcon, TranslateFilled, TranslateRegular } from '@fluentui/react-icons';
import { Button, Popover, PopoverSurface, PopoverTrigger } from '@fluentui/react-components';

const TranslateIcon = bundleIcon(TranslateFilled, TranslateRegular);

/**
 * LocalePopover component.
 */
export const LocalePopover: React.FC = () => {
    const { i18n } = useTranslation();

    return (
        <Popover positioning="below-end">
            <PopoverTrigger disableButtonEnhancement>
                <Button appearance="transparent" icon={<TranslateIcon />} />
            </PopoverTrigger>
            <PopoverSurface tabIndex={-1} style={{ padding: 0 }}>
                <div className="t-flex t-flex-col t-gap-2">
                    <Button
                        appearance="transparent"
                        disabled={i18n.language === 'en'}
                        onClick={() => i18n.changeLanguage('en')}
                    >
                        English
                    </Button>
                    <Button
                        appearance="transparent"
                        disabled={i18n.language === 'ja'}
                        onClick={() => i18n.changeLanguage('ja')}
                    >
                        日本語
                    </Button>
                </div>
            </PopoverSurface>
        </Popover>
    );
};

LocalePopover.displayName = 'LocalePopover';