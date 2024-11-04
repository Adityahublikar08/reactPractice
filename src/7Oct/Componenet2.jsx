import React, { useState } from "react";

function Componenet2() {
  const d = ["aditya", "mohan", "hublikar"];
  const [data, setData] = useState("");
  const [storage, setStorage] = useState(d);
  const handleSubmit = () => {
    
    setStorage([...storage, data]);
    setData("");
  };
  const handleRemoveItem = (i) => {
    const newData = storage.filter((index) => index !== i);
    setStorage(newData);
  };

  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleSubmit}>add</button>
      <button onClick={() => setStorage([])}>Clear</button>

      {storage.map((item, index) => {
        return (
          <>
            <p key={index}>
              {index + 1}:{item}
              <button onClick={() => handleRemoveItem(item)}>Remove</button>
            </p>
          </>
        );
      })}
    </div>
  );
}

export default Componenet2;
