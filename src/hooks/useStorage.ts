import { useCallback, useState, useEffect } from "react";

type Value = any;
export type UseStorageReturn = [
    value: Value,
    setValue: (value: Value) => void,
    remove: () => void
];
type UseStorage = (
    key: string,
    defaultValue: Value,
    storageObject?: Storage
) => UseStorageReturn;

export const useLocalStorage: UseStorage = (key, defaultValue) => {
    return useStorage(key, defaultValue, window.localStorage);
};

export const useSessionStorage: UseStorage = (key, defaultValue) => {
    return useStorage(key, defaultValue, window.sessionStorage);
};

const useStorage: UseStorage = (key, defaultValue, storageObject) => {
    const [value, setValue] = useState(() => {
        const jsonValue = storageObject?.getItem(key);
        if (jsonValue != null) return JSON.parse(jsonValue);

        if (typeof defaultValue === "function") {
            return defaultValue();
        } else {
            return defaultValue;
        }
    });

    useEffect(() => {
        if (value === undefined) return storageObject?.removeItem(key);
        storageObject?.setItem(key, JSON.stringify(value));
    }, [key, value, storageObject]);

    const remove = useCallback(() => {
        setValue(undefined);
    }, []);

    return [value, setValue, remove];
};
