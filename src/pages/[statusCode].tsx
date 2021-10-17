import { useRouter } from "next/router";
import Error, { NetworkStatus } from "@/screens/Error";
import { FlexContainer } from "@/components";

type StatusCode = string | string[] | undefined;

const getStatusCode = (statusCode: StatusCode) => {
    if (typeof statusCode === "string" && statusCode in NetworkStatus)
        return parseInt(statusCode);
    return 404;
};

const Err = (): JSX.Element => {
    const router = useRouter();
    const { statusCode } = router.query;

    if (statusCode === undefined) return <FlexContainer />;

    return <Error {...{ statusCode: getStatusCode(statusCode) }} />;
};

export default Err;
