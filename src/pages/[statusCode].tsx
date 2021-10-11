import { useRouter } from "next/router";
import Error, { NetworkStatus } from "@/screens/Error";

type StatusCode = string | string[] | undefined;
const getStatusCode = (statusCode: StatusCode) => {
    if (typeof statusCode === "string" && statusCode in NetworkStatus)
        return parseInt(statusCode);
    return 404;
};
const Err = (): JSX.Element => {
    const router = useRouter();
    const { statusCode } = router.query;

    return <Error {...{ statusCode: getStatusCode(statusCode) }} />;
};
export default Err;
