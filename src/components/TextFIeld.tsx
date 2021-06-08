import { useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (name: string) => string;
  obj?: {
    f1: string;
  };
  person?: Person;
}

const TextField: React.FC<Props> = ({ text }) => {
  const [count, setCount] = useState<number | null>(5);
  return (
    <div>
      <div>{count}</div>
      <button type="button">{text}</button>
      <button type="button" onClick={() => setCount(Math.random())}>
        Count
      </button>
    </div>
  );
};

export default TextField;
