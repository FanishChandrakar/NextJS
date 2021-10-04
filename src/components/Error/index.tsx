import type { NextPage } from "next";
import styles from "@/styles/Error.module.css";

const NetworkStatus = require("./NetworkStatus.json");

interface ErrorProps {
    statusCode: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
    return (
        <div className={styles.container}>
            <h1>{statusCode}</h1>
            <p>Error: {NetworkStatus[statusCode]}</p>
        </div>
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
