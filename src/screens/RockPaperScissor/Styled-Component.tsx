import { FlexContainer } from "@/components";
import styled from "styled-components";

export const Container = styled(FlexContainer)`
    display: grid;
    grid-template-areas:
        "Score Game Game"
        "Score Game Game"
        "Option Game Game";
    padding: 1% 2.5%;
    padding-bottom: 0;

    @media (max-width: 120vmin) {
        grid-template-areas:
            "Score Score"
            "Game Game"
            "Game Game"
            "Option Option";
    }
`;

export const Score = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap");

    grid-area: Score;

    display: flex;
    justify-content: space-between;
    text-transform: uppercase;

    height: 12.5vw;
    min-width: 20vw;
    width: 100%;
    max-width: 60vw;

    margin: 15px auto;
    padding: 15px;
    border: 2px solid var(--foregroundColor);
    border-radius: 8px;
    font-size: 1vw;
    font-family: "Barlow Semi Condensed", sans-serif;
    color: var(--foregroundColor);
    align-items: center;

    @media (max-width: 120vmin) {
        height: 20vw;
        font-size: 1.5vw;
    } ;
`;

export const Mode = styled.img`
    /* background-color: var(--foregroundColor); */
    height: 100%;
`;

export const ScoreBoard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--groundColor);
    border-radius: 8px;
    box-shadow: var(--primaryColor) 0px 0px 0px 3px;
    height: 100%;
    aspect-ratio: 1;
`;

export const ScoreTitle = styled.h4`
    margin: 0;
    color: var(--foregroundColor);
    line-height: 1;
`;

export const ScoreValue = styled.h1`
    margin: 0;
    color: var(--primaryColor);
    line-height: 1;
    font-size: 4em;
`;

export const Game = styled.div`
    grid-area: Game;
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface BoxProps {
    size?: number;
}
export const Box = styled.div<BoxProps>`
    position: relative;
    margin-top: 5vw;
    /* border: 1px solid var(--foregroundColor); */
    aspect-ratio: 1;
    width: ${({ size }) => size || 100}px;
`;

export const OuterCircle = styled.div`
    display: flex;
    position: relative;
`;

export const InnerCircle = styled.div`
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 80%;
    height: 80%;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;

    box-shadow: inset 0 7px rgba(0, 0, 0, 0.15);
    transition: 0.5s;
`;

export interface CircleProps {
    left: number;
    top: number;
    size: number;
    color: string;
    onClick?: () => void;
}

export const Circle = styled.div<CircleProps>`
    position: absolute;
    border-radius: 50%;
    visibility: visible !important;
    box-shadow: inset 0 -5px rgba(0, 0, 0, 0.15);
    background-color: ${({ color }) => color};
    left: ${({ left, size }) => left - size / 2}px;
    top: ${({ top, size }) => top - size / 2}px;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
`;

export const CircleImage = styled.img`
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 60%;
    height: 60%;
`;

export const Options = styled.div`
    grid-area: Option;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const Button = styled.button`
    padding: 8px 25px;
    margin: 10px 0;
    border: 2px solid var(--foregroundColor);
    background-color: transparent;
    color: var(--foregroundColor);
    border-radius: 8px;
    text-transform: uppercase;
    text-align: center;
    min-width: 20vw;
    width: 100%;
    max-width: 60vw;

    &:hover {
        border-color: var(--primaryColor);
        color: var(--primaryColor);
    }
`;
