import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Error</h1>
      <h2>Something went wrong</h2>
      <h3>{error.data}</h3>
    </>
  );
};

export default Error;
