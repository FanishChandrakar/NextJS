import type { EffectCallback, DependencyList } from "react";
import { useEffect } from "react";
import { useTimeout } from "./";

type UseDebounce = (
    callback: EffectCallback,
    timer: number,
    deps: DependencyList
) => void;

/**
 * ## useDebounce Hook
 * This hook allows you to debounce any fast changing value. The debounced `callback` will only execute when the `deps` value didn't changed for the specified time period.
 * ```ts
 *      useDebounce(callback, timer, deps)
 * ```
 * @param callback When timer runs out execute the code.
 * @param timer In milliseconds, waiting-time before `callback` is executed.
 * @param deps Watch for the changing values.
 */
export const useDebounce: UseDebounce = (callback, timer, deps = []) => {
    const [reset, clear] = useTimeout(callback, timer);
    useEffect(reset, [...deps, reset]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(clear, []);
};
