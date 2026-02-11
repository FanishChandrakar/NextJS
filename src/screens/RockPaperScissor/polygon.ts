type PointReturn = { theta: number; r: number };
type Points = (sideCount: number, radius: number) => PointReturn[];
const points: Points = (sideCount, radius) => {
    const angle = 360 / sideCount;
    const vertexIndices = range(sideCount);
    const offsetDeg = 180 - (180 - angle) / 2;
    const offset = degreesToRadians(offsetDeg);

    return vertexIndices.map((index) => {
        return {
            theta: offset + degreesToRadians(angle * index),
            r: radius,
        };
    });
};

type Range = (count: number) => number[];
const range: Range = (count) => {
    return Array.from(Array(count).keys());
};

type DegreesToRadians = (angleInDegrees: number) => number;
const degreesToRadians: DegreesToRadians = (angleInDegrees) => {
    return (Math.PI * angleInDegrees) / 180;
};

type PolygonReturn = { x: number; y: number };
type Polygon = (
    cx: number,
    cy: number,
    sideCount: number,
    radius: number
) => PolygonReturn[];
const polygon: Polygon = (cx, cy, sideCount, radius) => {
    return points(sideCount, radius).map(({ r, theta }) => ({
        x: Math.round(cx + r * Math.cos(theta)),
        y: Math.round(cy + r * Math.sin(theta)),
    }));
};

export default polygon;
