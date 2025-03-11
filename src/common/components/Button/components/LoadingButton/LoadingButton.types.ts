import type { ButtonProps } from '@fluentui/react-components';

/**
 * LoadingButton Props
 */
export type LoadingButtonProps = ButtonProps & {
    isLoading?: boolean | undefined;
};

/**
 * LoadingButton State
 */
export type LoadingButtonState = {
    isLoading?: boolean | undefined;
};

/**
 * LoadingButton Styles
 */
export type LoadingButtonStyles = {
    root: string;
};