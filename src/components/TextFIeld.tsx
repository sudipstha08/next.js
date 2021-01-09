import { useState } from 'react';

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
  // setCount(null);
  return (
    <div>
      <button type="button">{text}</button>
    </div>
  );
};

export default TextField;
