import { FlexContainer } from "@/components";
import styled from "styled-components";

export const Container = styled(FlexContainer)`
    padding: 5rem 1rem;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    text-align: center;

    a {
        color: var(--primaryColor);
        text-decoration: none;
        &:hover,
        &:focus,
        &:active {
            text-decoration: underline;
        }
    }
`;

export const Description = styled.h1`
    line-height: 1.5;
    font-size: 1.5rem;
    text-align: center;
`;

export const Code = styled.code`
    background: var(--foregroundColor);
    color: var(--backgroundColor);
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
`;

export const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    margin-top: 3rem;

    @media (max-width: 700px) {
        width: 100%;
        flex-direction: column;
    }
`;

export const Card = styled.a`
    margin: 1rem;
    flex-basis: 45%;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid var(--foregroundColor);
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;

    h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
    }

    p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
    }

    &:hover,
    &:focus,
    &:active {
        color: var(--primaryColor);
        border-color: var(--primaryColor);
    }
`;
