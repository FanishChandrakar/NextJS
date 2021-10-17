import type { EffectCallback, DependencyList } from "react";
import { useEffect } from "react";
import { useTimeout } from "./";

type UseDebounce = (
    callback: EffectCallback,
    delay: number | undefined,
    dependencies?: DependencyList
) => void;

export const useDebounce: UseDebounce = (
    callback,
    delay,
    dependencies = []
) => {
    const [reset, clear] = useTimeout(callback, delay);
    useEffect(reset, [...dependencies, reset]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(clear, []);
};
