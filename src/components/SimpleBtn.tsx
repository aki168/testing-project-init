import { useState } from "react";

export const SimpleBtn: React.FC = () => {
  const [state, setState] = useState(false);

  return (
    <button
      onClick={() => {
        setState((prev) => !prev);
      }}
    >
      {state ? "ON" : "OFF"}
    </button>
  );
};
