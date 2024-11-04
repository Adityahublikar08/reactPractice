import React from "react";
import { useCustomHook } from "./Index";

function Name() {
  const { name, age } = useCustomHook();
  return (
    <div>
      <h1>
        Name:{name} age:{age}
      </h1>
    </div>
  );
}

export default Name;
