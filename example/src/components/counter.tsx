import { useStore } from "@nanostores/react";
import { $count, decrement, increment } from "../store";

export function Counter() {
  const count = useStore($count);
  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
