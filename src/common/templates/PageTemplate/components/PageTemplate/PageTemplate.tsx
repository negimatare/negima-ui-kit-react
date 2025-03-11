import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { APP_NAME } from '@negima/react-configs';
import { Breadcrumb, Header } from '@negima/react-components';

import type { PageTemplateProps } from './PageTemplate.types';
import { usePageTemplateStyles } from './usePageTemplateStyles';

/**
 * PageTemplate component.
 */
export const PageTemplate = React.forwardRef<HTMLDivElement, PageTemplateProps>(({
    heading,
    items = [],
    focusMode,
    size,
    children,
    ...shards
}, ref) => {
    const styles = usePageTemplateStyles();

    return (
        <React.Fragment>
            <Helmet>
                <title>{`${heading} | ${APP_NAME}`}</title>
            </Helmet>

            <div className={styles.root}>
                <Header heading={heading} {...shards} />
                
                {!!items.length && <Breadcrumb items={items} focusMode={focusMode} size={size} />}

                <div ref={ref} className={styles.body}>{children}</div>
            </div>
        </React.Fragment>
    );
});

PageTemplate.displayName = 'PageTemplate';