import { useQuery } from 'react-query';

const ReactQuery = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(
      'https://api.github.com/repos/tannerlinsley/react-query',
    ).then((res) => res.json()),
  );

  if (isLoading) return 'Loading...';
  const isError = (error: unknown): error is Error => {
    return error instanceof Error;
  };
  if (isError(error)) return 'An error has occurred: ' + error.message;
  return (
    <div>
      <a
        target="_blank"
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sudipstha08@gmail.com&body=my-text"
      >
        Click here to email
      </a>
      <a href="mailto:user@domain.com?Subject=Hello%20User">Inbox me!</a>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
};

export default ReactQuery;
