import { useState } from "react";

type ToggleValue = (value: boolean) => void;

export type UseToggleReturn = [boolean, ToggleValue];
type UseToggle = (defaultValue: boolean) => UseToggleReturn;

export const useToggle: UseToggle = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    const toggleValue: ToggleValue = (value) => {
        setValue((currentValue) => value || !currentValue);
    };

    return [value, toggleValue];
};
