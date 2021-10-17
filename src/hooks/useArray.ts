import { useState } from "react";

type Element = any;
type Array = ReadonlyArray<Element>;
type Set = (array: Array) => void;
type Push = (element: Element) => void;
type Filter = (
    callback: (value: Element, index: number, array: Array) => Array
) => void;
type Update = (index: number, newElement: Element) => void;
type Remove = (index: number) => void;
type Clear = () => void;

export interface UseArrayReturn {
    array: Array;
    set: Set;
    push: Push;
    filter: Filter;
    update: Update;
    remove: Remove;
    clear: Clear;
}
type UseArray = (defaultValue: Array) => UseArrayReturn;

export const useArray: UseArray = (defaultValue) => {
    const [array, setArray] = useState(defaultValue);

    const push: Push = (element) => {
        setArray((a) => [...a, element]);
    };

    const filter: Filter = (callback) => {
        setArray((a) => a.filter(callback));
    };

    const update: Update = (index, newElement) => {
        setArray((a) => [
            ...a.slice(0, index),
            newElement,
            ...a.slice(index + 1, a.length),
        ]);
    };

    const remove: Remove = (index) => {
        setArray((a) => [
            ...a.slice(0, index),
            ...a.slice(index + 1, a.length),
        ]);
    };

    const clear = () => {
        setArray([]);
    };

    return { array, set: setArray, push, filter, update, remove, clear };
};
