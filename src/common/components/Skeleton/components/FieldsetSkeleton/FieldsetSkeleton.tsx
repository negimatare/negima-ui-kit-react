import * as React from 'react';
import _ from 'lodash';
import { Divider, Skeleton, SkeletonItem } from '@fluentui/react-components';

/**
 * FieldsetSkeleton component.
 */
export const FieldsetSkeleton: React.FC = () => (
    <Skeleton className="tw:grid tw:grid-cols-6" aria-label="Loading Content" aria-busy>
        <div className="tw:col-span-4 tw:col-start-2 tw:flex tw:flex-col tw:gap-6">
            <div className="tw:border tw:rounded-sm tw:shadow-xl">
                <div className="tw:p-6">
                    <SkeletonItem className="tw:mb-6" />
                    <SkeletonItem />
                </div>
                <Divider />
                <div className="tw:flex tw:flex-col tw:gap-6 tw:p-6">
                    <div className="tw:grid tw:grid-cols-2 tw:gap-6">
                        <SkeletonItem className="tw:col-span-2" />
                        <SkeletonItem className="tw:col-span-2" />
                        <SkeletonItem />
                        <SkeletonItem />
                        <SkeletonItem />
                        <SkeletonItem />
                        <SkeletonItem className="tw:col-span-2" />
                        <SkeletonItem className="tw:col-span-2" />
                    </div>
                </div>
            </div>
        </div>
    </Skeleton>
);

FieldsetSkeleton.displayName = 'FieldsetSkeleton';