import type { EffectCallback, DependencyList } from "react";
import { useEffect, useRef } from "react";

type UseUpdateEffect = (
    callback: EffectCallback,
    dependencies?: DependencyList
) => void;

export const useUpdateEffect: UseUpdateEffect = (callback, dependencies) => {
    const firstRenderRef = useRef(true);

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        return callback();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
};
