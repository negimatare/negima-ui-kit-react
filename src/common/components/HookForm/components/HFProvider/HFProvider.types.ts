import { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';

/**
 * HFProvider Props
 */
export type HFProviderProps = {
    children: ReactNode;
    methods: UseFormReturn<any>;
    onSubmit?: VoidFunction | undefined;
};