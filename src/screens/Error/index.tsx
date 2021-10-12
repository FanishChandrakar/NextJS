import type { NextPage } from "next";
import { Container, Glitch, Message } from "./Styled-Component";

export const NetworkStatus = require("./NetworkStatus.json");

interface ErrorProps {
    statusCode: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
    const msg = `${NetworkStatus[statusCode]}... `;
    return (
        <Container>
            <Glitch {...{ statusCode }}>{statusCode}</Glitch>
            <Message {...{ msg }}>{msg}</Message>
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
