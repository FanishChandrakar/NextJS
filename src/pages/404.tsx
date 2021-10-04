import Error from "@/components/Error";

const Err = (): JSX.Element => <Error {...{ statusCode: 404 }} />;
export default Err;
