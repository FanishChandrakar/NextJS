import { useWindowSize } from "@/hooks";
import Image from "next/image";
import PlayButton from "./PlayButton";
import polygon from "./polygon";
import { Box, CircleImage } from "./Styled-Component";

export const Rules = require("./Rules.json");

type CalcSize = (width: number, height: number, max?: number) => number;
const calcSize: CalcSize = (width, height, max = 500) => {
    let size = width * 0.65;
    if (height < width) size = height * 0.65;
    if (size > max) size = max;

    return size;
};

interface PlayProps {
    advancedMode: boolean;
    setSelected: (selected: number) => void;
}
const Play: React.FC<PlayProps> = ({ advancedMode, setSelected }) => {
    const { width, height } = useWindowSize();
    const size = calcSize(width, height);
    const sideCount = advancedMode ? 5 : 3;
    const radius = size * 0.4;

    const cx = size / 2;
    const cy = cx;
    const res = polygon(cx, cy, sideCount, radius);

    // const s = 2 * radius + 50;
    // const viz = polygon(s / 2, s / 2, sideCount, radius);

    const imagePath = advancedMode
        ? "/images/bg-pentagon.svg"
        : "/images/bg-triangle.svg";

    if (!size) return <></>;
    return (
        <>
            <Box {...{ size }}>
                <Image
                    src={imagePath}
                    alt="Polygon"
                    width={size}
                    height={size}
                />
                {res.map(({ x: left, y: top }, index) => (
                    <PlayButton
                        onClick={() => setSelected(index)}
                        size={size / 4}
                        key={index}
                        color={Rules[index].color}
                        {...{ left, top }}
                    >
                        <CircleImage
                            src={`/images/icon-${Rules[index].value}.svg`}
                        />
                    </PlayButton>
                ))}
            </Box>
        </>
    );
};

export default Play;
