import { useQuery } from "react-query";

const ReactQuery = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      "https://api.github.com/repos/tannerlinsley/react-query",
    ).then((res) => res.json()),
  );

  if (isLoading) return "Loading...";
  const isError = (error: unknown): error is Error => {
    return error instanceof Error;
  };
  if (isError(error)) return "An error has occurred: " + error.message;
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
};

export default ReactQuery;
