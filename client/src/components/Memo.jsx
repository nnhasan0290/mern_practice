import { useMemo, useState } from "react";

const Memo = () => {
  const [norm, setNorm] = useState(0);
  const [anotherState, setAnotherState] = useState(10);
  console.log(norm);

  const memo = useMemo(() => cal(norm), [norm]);

  return (
    <div>
      <h2 onClick={() => setNorm(norm + 1)}>Norm: {norm}</h2>
      <h2>MemoValue: {memo}</h2>

      <h2 onClick={() => setAnotherState(anotherState + 5)}>
        Another State: {anotherState}
      </h2>
    </div>
  );
};

export default Memo;

const cal = (norm) => {
  for (let i = 5; i <= 100; i++) {
    console.log(i);
    norm = norm + i;
  }
  return norm;
};
