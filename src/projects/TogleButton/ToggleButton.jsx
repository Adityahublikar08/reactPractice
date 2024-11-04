import "./ToggleButton.css";
import { IoIosSwitch } from "react-icons/io";

import {useState} from 'react';

export const ToggleButton = () => {
const [input, setInput] = useState(false)
  const handleToggleButton = () => {
    return setInput(!input);
  };
  return (
    <>
    <h1 >Toggle Switch <IoIosSwitch /></h1>
    <div className={`toggle-button  ${input ? "on1" : "off1"} `} onClick={handleToggleButton}>
      <div className={`button ${input ? "on" : "off"}`}>
        <h1 className="text">{input ? "on" : "off"}</h1>
      </div>
    </div>
    </>
  );
};
// ${input?"bg-green-600":"bg-red-700"}
