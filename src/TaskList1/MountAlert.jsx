import { useEffect } from "react";

function MountAlert() {
    const handleButton=()=>{
        alert("Button clicked");
    }
  useEffect(() => {
    alert("Stay Alert component is mounted");
  });
  return (
    <div>
      <button onClick={handleButton}>Component Mount</button>
    </div>
  );
}

export default MountAlert;
