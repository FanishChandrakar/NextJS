import type { NextPage } from "next";
import { Container, Message, Title } from "./Styled-Component";

const NetworkStatus = require("./NetworkStatus.json");

interface ErrorProps {
    statusCode: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
    return (
        <Container>
            <Title>{statusCode}</Title>
            <Message>Error: {NetworkStatus[statusCode]}</Message>
        </Container>
    );
};

Error.getInitialProps = ({ res, err }) => {
    const currentStatusCode = res?.statusCode || 500;
    const throwedStatusCode = err?.statusCode;

    const statusCode = throwedStatusCode || currentStatusCode;

    if (res) {
        // Here is where the magic happens
        res.statusCode = statusCode;
    }

    return { statusCode };
};

export default Error;
