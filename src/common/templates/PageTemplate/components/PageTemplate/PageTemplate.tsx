import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { APP_NAME } from '@negima/react-configs';

import type { PageTemplateProps } from './PageTemplate.types';
import { usePageTemplateStyles } from './usePageTemplateStyles';
import { PageHeader } from '../PageHeader/PageHeader';

/**
 * PageTemplate component.
 */
export const PageTemplate: ForwardRefComponent<PageTemplateProps> = React.forwardRef(({
    children,
    headline,
    icon = undefined,
    caption = undefined
}, ref) => {
    const styles = usePageTemplateStyles();

    return (
        <React.Fragment>
            <Helmet>
                <title>{`${headline} | ${APP_NAME}`}</title>
            </Helmet>

            <div className={styles.root}>
                <PageHeader headline={headline} caption={caption} icon={icon} />

                <div ref={ref} className={styles.body}>
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
});

PageTemplate.displayName = 'PageTemplate';