import React, { useEffect, useState } from "react";

function Resizer() {
  const [h, setH] = useState(0);
  const [w, setW] = useState(0);
  window.addEventListener("resize", handleResize);

  function handleResize() {
    setH(window.innerHeight);
    setW(window.innerWidth);
  }
  useEffect(() => {
    handleResize();

    return () => removeEventListener("resize", handleResize);
  },[h,w]);
  return (
    <div>
      <h1>
        height:{h} width:{w}
      </h1>
    </div>
  );
}

export default Resizer;
