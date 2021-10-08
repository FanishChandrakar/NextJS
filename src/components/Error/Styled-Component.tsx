import styled from "styled-components";

export const Container = styled.div`
    min-height: 90vh;
    padding: 5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    margin: 0;
    text-align: center;
    color: firebrick;
    font-size: 4rem;
`;

export const Message = styled.p`
    margin: 0;
    text-align: center;
    color: var(--foreground);
    font-size: 1.5rem;
`;
