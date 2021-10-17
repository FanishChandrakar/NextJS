import { FlexContainer } from "@/components";
import styled, { keyframes } from "styled-components";

export const Container = styled(FlexContainer)`
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    color: var(--foregroundColor);
    margin: 0;
    font-size: 96px;
    letter-spacing: -7px;
    font-family: monospace;
`;

interface MessageProps {
    msg: string;
}
const typing = keyframes`
    from {width: 0}
`;
const blink = keyframes`
    50% {border-color: transparent}
`;
const timing = ({ msg: { length = 0 } }: MessageProps) => length * 0.1;
const textLength = ({ msg }: MessageProps) => msg?.length;
export const Message = styled.p`
    margin: 0;
    text-align: center;
    color: var(--foregroundColor);
    font-size: 1.5rem;
    width: ${({ msg }: MessageProps) => msg?.length}ch;
    animation: ${typing} ${timing}s steps(${textLength}),
        ${blink} 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
`;

const glitch = keyframes`
    90%{transform:translate(0)}
    91%{transform:translate(11px)}
    92%{transform:translate(0)}
    98%{transform:translate(0)}
    99%{transform:translate(-7px)}
    100%{transform:translate(0)}
`;
const glitchTop = keyframes`
    60% {transform: translate(0)}
    61% {transform: translate(-2px,2px)}
    62% {transform: translate(13px,-1px) skew(-13deg)}
    63% {transform: translate(2px,-2px)}
    65% {transform: translate(0)}
`;
const glitchBottom = keyframes`
    60% {transform: translate(0)}
    61% {transform: translate(-2px,0)}
    62% {transform: translate(-22px,1px) skew(21deg)}
    63% {transform: translate(-2px,0)}
    65% {transform: translate(0)}
`;

interface GlitchProps {
    statusCode?: number;
}
export const Glitch = styled(Title)`
    animation: ${glitch} 3s linear infinite;

    &:before,
    &:after {
        content: "${({ statusCode }: GlitchProps) => statusCode}";
        position: absolute;
        left: 0;
    }

    &:before {
        animation: ${glitchTop} 1.5s linear infinite;
        clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    }

    &:after {
        animation: ${glitchBottom} 1s linear infinite;
        clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
        -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    }
`;
