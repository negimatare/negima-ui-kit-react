import * as React from 'react';

/**
 * Hook to store a value and generate callbacks for setting the value to true or false.
 * The identity of the callbacks will always stay the same.
 *
 * @param initialState - Initial value
 * @returns Array with the current value and an object containing the updater callbacks.
 */
export const useToggle = (initialState: boolean): [boolean, VoidFunction] => {
    const [value, setValue] = React.useState(initialState);

    const toggle = () => setValue(currentValue => !currentValue);

    return [value, toggle];
};