import Error from "@/screens/Error";

const Err = (): JSX.Element => <Error {...{ statusCode: 404 }} />;
export default Err;
