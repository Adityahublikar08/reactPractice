import React from "react";
export const EventPropagation = () => {
  const handleOuterDiv = (event) => {
    console.log("Outer div");
    // console.log(event);
    event.stopPropagation();
  };
  const handleInnerDiv = (event) => {
    console.log("Inner div");
    // console.log(user);
    event.stopPropagation();
  };
  const handleButton = (event) => {
    console.log("Button is clicked");
    event.stopPropagation(); //use to stop bubbling ,onClickCapture used to stop capturing
  };

  return (
    <div
      onClickCapturebb={handleOuterDiv}
      style={{ padding: "20px", border: "10px solid blue" }}
    >
      Outer Div
      <div
        onClickCapture={handleInnerDiv}
        style={{ padding: "20px", border: " 10px solid green" }}
      >
        Inner Div <br />
        <button
          onClickCapture={handleButton}
          style={{ padding: "20px", border: " 10px solid red" }}
        >
          Click Me
        </button>
      </div>
    </div>
  );
};
