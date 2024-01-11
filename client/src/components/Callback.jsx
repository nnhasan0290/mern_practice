import { memo, useCallback, useMemo, useState } from "react";
import { ContextConsumer } from "./ContextReducer";

const Callback = () => {
  const { state, dispatch } = ContextConsumer();
  const [current, setCurrent] = useState(0);
  console.log(current);
  const [todo, setTodo] = useState(["one todo"]);

  const addTodo = useCallback(() => {
    setTodo((prev) => [...prev, "newTodo"]);
  }, [todo]);

  return (
    <>
      <div>
        <button onClick={() => setCurrent((c) => c + 1)}>Current</button>
      </div>
      <Todo todo={todo} />
      <button onClick={addTodo}>Add todo</button>
      <button onClick={() => dispatch({ type: "change" })}>Change</button>
    </>
  );
};

export default Callback;

const Todo = memo(({ todo }) => {
  console.log(todo);
  return (
    <div>
      {todo.map((each, i) => (
        <li key={i}>{each}</li>
      ))}
    </div>
  );
});
