import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter();
  console.log('router', router.query);
  return <h1>Search page</h1>;
}

// /search/1/2/3/4/5/6
// CATCH ALL ROUTES ^

// OPTIONAL CATCH ALL

// Use [[...name]] - for /search to work
// QUERY WILL be empty
