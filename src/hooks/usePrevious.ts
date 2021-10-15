import { useRef } from "react";

type UsePrevious = (value: any) => any;

export const usePrevious: UsePrevious = (value) => {
    const currentRef = useRef(value);
    const previousRef = useRef();

    if (currentRef.current !== value) {
        previousRef.current = currentRef.current;
        currentRef.current = value;
    }

    return previousRef.current;
};
