import type { FieldProps, SliderProps } from '@fluentui/react-components';

/**
 * HFSlider Props
 */
export type HFSliderProps = Pick<FieldProps, 'label' | 'required' | 'hint'> & SliderProps & {
    name: string
};