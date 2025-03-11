import type { FieldProps, InputProps } from "@fluentui/react-components";
import type { NumericFormatProps } from "react-number-format";

/**
 * HFNumber Props
 */
export type HFNumberProps = Omit<NumericFormatProps, "size"> & Omit<InputProps, "value" | "defaultValue" | "ref" | "type"> & Pick<FieldProps, 'label' | 'required' | 'hint'> & {
    name: string;
}