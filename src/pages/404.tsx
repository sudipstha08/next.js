/**
 * CUSTOM NOT FOUND PAGE
 **/

import Error from "next/error";

const ErrorPage = () => {
  return <Error statusCode={404} />;
};

export default ErrorPage;
