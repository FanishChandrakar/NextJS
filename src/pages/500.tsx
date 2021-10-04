import Error from "@/components/Error";

const Err = (): JSX.Element => <Error {...{ statusCode: 500 }} />;
export default Err;
