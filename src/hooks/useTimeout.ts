import type { EffectCallback } from "react";
import { useCallback, useEffect, useRef } from "react";

export type UseTimeoutReturn = EffectCallback[];
type UseTimeout = (
    callback: EffectCallback,
    delay: number | undefined
) => UseTimeoutReturn;

/**
 * ## useTimeout Hook
 * Allows code execution after a specified amount of time.
 * ```ts
 *      const [reset, clear] = useTimeout(callback, delay);
 * ```
 * @param callback In case of timeout `callback` is executed.
 * @param delay The `delay`, in milliseconds that the timer should wait before timeout.
 * @returns `[ reset, clear ]`
 * @method reset - Starts a new timer with `delay`.
 * @method clear - Removes the timer.
 */
export const useTimeout: UseTimeout = (callback, delay) => {
    const callbackRef = useRef(callback);
    const timeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    }, [delay]);

    /** Remove the timer. */
    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);

    useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);

    /** Starts a new timer with `delay`. */
    const reset = useCallback(() => {
        clear();
        set();
    }, [clear, set]);

    return [reset, clear];
};
