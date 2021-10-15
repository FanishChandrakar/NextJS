import type { EffectCallback } from "react";
import { useCallback, useEffect, useRef } from "react";

export type UseTimeoutReturn = [reset: EffectCallback, clear: EffectCallback];
type UseTimeout = (
    callback: EffectCallback,
    delay: number | undefined
) => UseTimeoutReturn;

export const useTimeout: UseTimeout = (callback, delay) => {
    const callbackRef = useRef(callback);
    const timeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    }, [delay]);

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);

    useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);

    const reset = useCallback(() => {
        clear();
        set();
    }, [clear, set]);

    return [reset, clear];
};
