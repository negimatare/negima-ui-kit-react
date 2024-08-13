import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { Caption2 } from '@fluentui/react-components';
import { APP_NAME, PKG_VERSION } from '@negima/react-configs';
import { Logo } from '@negima/react-components';

import type { OAuth2TemplateProps } from './OAuth2Template.types';
import { useOAuth2TemplateStyles } from './useOAuth2TemplateStyles';
import { OAuth2TemplateSurface } from '../OAuth2TemplateSurface/OAuth2TemplateSurface';

/**
 * OAuth2Template component.
 */
export const OAuth2Template: ForwardRefComponent<OAuth2TemplateProps> = React.forwardRef(({
    children,
    title
}, ref) => {
    const styles = useOAuth2TemplateStyles();

    return (
        <React.Fragment>
            <Helmet>
                <title>{`${title} | ${APP_NAME}`}</title>
            </Helmet>

            <div className={`${styles.root} t-grid t-grid-cols-3`}>
                <div className="lg:t-col-span-2">
                    <OAuth2TemplateSurface />
                </div>
                <div ref={ref} className={styles.children}>
                    <Logo asType="full" width={256} />

                    {children}

                    <div className="t-flex t-justify-end t-w-full">
                        <Caption2>{`Version ${PKG_VERSION}`}</Caption2>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
});

OAuth2Template.displayName = 'OAuth2Template';