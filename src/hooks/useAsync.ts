import type { DependencyList } from "react";
import { useCallback, useEffect, useState } from "react";

type Value = any;
export interface UseAsyncReturn {
    loading: boolean;
    error: ErrorConstructor | undefined;
    value: Value | undefined;
}
type UseAsync = (
    callback: () => Promise<Value>,
    dependencies?: DependencyList
) => UseAsyncReturn;

export const useAsync: UseAsync = (callback, dependencies = []) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [value, setValue] = useState();

    const callbackMemoized = useCallback(() => {
        setLoading(true);
        setError(undefined);
        setValue(undefined);
        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);

    useEffect(() => {
        callbackMemoized();
    }, [callbackMemoized]);

    return { loading, error, value };
};
