import { use } from "react";
import { Context } from "./Context";

function ContextData() {
  const data= use(Context);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}

export default ContextData;
