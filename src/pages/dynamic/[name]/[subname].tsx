import { useRouter } from "next/router";

export default function SubnamePage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
    // router.replace('/')
  };
  return (
    <>
      <h1>This is the subname page</h1>
      {router.query.name} -{router.query.subname}
      <button onClick={handleClick}>Go to home</button>
    </>
  );
}

// DYNAMIC ROUTES - use square brackets for file name
