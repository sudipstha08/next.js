/**
 * CUSTOM NOT FOUND PAGE
 **/

import Error from "next/error";

export default () => {
  return <Error statusCode={404} />;
};
